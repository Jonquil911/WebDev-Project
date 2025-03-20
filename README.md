# Study Planner

Description: A study planning web app where users can create, view, update, and delete study tasks. Tasks are associated with specific subjects and can be filtered by status and due date.
• Front-End:
o Users can add, edit, and delete tasks.
o Display tasks using ngFor and filter them based on status (ngIf).
o Login and logout functionality using JWT.
• Back-End:
o Models: User, Subject, Task, TaskStatus.
o Relations: Tasks belong to Users and have a foreign key relation with Subject and TaskStatus.
o CRUD operations for tasks.
o JWT-based authentication for task creation linked to the current authenticated user.
