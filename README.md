# Study Planner

**Description**: A study planning web app where users can create, view, update, and delete study tasks. Tasks are associated with specific subjects and can be filtered by status and due date.
- Front-End:
  - Users can add, edit, and delete tasks.
  - Display tasks using ngFor and filter them based on status (ngIf).
  - Login and logout functionality using JWT.
- Back-End:
  - Models: User, Subject, Task, TaskStatus.
  - Relations: Tasks belong to Users and have a foreign key relation with Subject and TaskStatus.
  - CRUD operations for tasks.
  - JWT-based authentication for task creation linked to the current authenticated user.
 
**Group Members**:
- Yegizbayev Arlan
- Alpamys Aisulu
- Batyrbayeva Balzhan
