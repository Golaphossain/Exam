# Quiz-Exam-Management-G37
Our project is an exam management system where students can participate in a quiz exam and see their scores. On the student homepage, students can see all available quiz exams and can participate in the respective exam. When a student attends an exam he must answer all the questions in a bounded time and after submitting the answer he can see his obtained score. The teacher can create an exam and can upload the exam. After creating the exam, the teacher can add questions with Options and Correct Answer ,can  view questions, and delete the question. The teacher can give permission the student to take an exam. And Teachers can also block any student. On the other hand, the Admin can view all students and teachers and uploaded exams and can delete any exam.

## The key features of our project are listed below.

1. Login.
2. Registration.
3. Password reset.
4. Student can see how many exams and questions are present on his dashboard.
5. Student can give exams at any time, there is no limit on the number of attempts.
6. Student can view his mark after completing each exam.
7. Teacher can  see the total number of students.
8. Teacher can view the result list.
9. Teacher can add, view, delete exams.
10. Teacher can add questions to the respective exam with options, correct answers.
11. Teacher can view and delete questions too.
12. Admin can see the total number of students, teachers, and available exams on the dashboard can delete any exam.    

## Security Features :- 
1. Student can not change tab.
2. Student can not resize tab.
3. Student can not copy text of question and options.
4. Question and Option will be shuffled for every student.

# How to run.
In backend, we use mongodb atlas as database server. At first create a database in your mongodb atlas cluster and paste the database link in .env file. 
For online database connection you can follow this link.
[Connect Backend to Database MongoDB Atlas with NodeJS](https://www.youtube.com/watch?v=68Jd7GXZPe8)

Then you can create an app password by referring to this link.

[How to Create App-Specific Passwords in Gmail](https://www.lifewire.com/get-a-password-to-access-gmail-by-pop-imap-2-1171882)

![envfile](./Screen-shots/env.png)

Then open two terminal one for backend and another for frontend.

In backend path ,run the following commands to start the backend server.

$ **npm install** 
and then 

$ **npm run dev**

In frontend/exam directory, run the following commands to start the frontend server.

$ **npm install**
and then 

$ **npm start** or **ng serve**
