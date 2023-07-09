import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-seeresults',
  templateUrl: './seeresults.component.html',
  styleUrls: ['./seeresults.component.css']
})
export class SeeresultsComponent implements OnInit {
  quizid: any;
  load: any
  empty: any = true;
  public allResults: any[];
  // authSubscription: Subscription;
  constructor(private teacherService: TeacherService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.load = true;
    this.empty = true;
    if (this.teacherService.getQuizId() == undefined) {
      this.router.navigate(['/teacher/teacherhome']);
    }
    
      else {
        this.quizid = this.teacherService.getQuizId();
         console.log(this.quizid);
        this.getAllResult(this.quizid)
      }

    }

  getAllResult(quizid) {
    // console.log(quizid);

    this.teacherService.getAllResult(quizid)
      .subscribe(
        data => {
          if (data['rslt']) {
            this.allResults = data['rslt']
            this.load = false

            if (!this.allResults.length) {
              this.empty = true;

            }
            else {
              this.empty = false;
            }
          }

        },
        error => {
          this.router.navigate(['/error']);
        }


      )
  }
}
