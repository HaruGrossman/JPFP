Frontend Client side

tier 1
-Students
    [] Write a component to display a list of all student (at least their names)
    [] Write a students slice to manage students in you Redux store
    [] Display the all-students component when the url matches '/students'
-Navbar
    [] Add a navbar with a link to '/students'

BREAKDOWN 
    create component folder
        1. All students
            - match '/students' url
        2. Single student details
            - match '/students/:studentId' url 
        3. Navigation bar
    create store
        1. Slice all students
    
tier 2
    [] Write a component to display a single student with he following information:
        [] The student's full name, email, image, and gpa
        [] The name of their campus (or a helpful message if they don't have one)
    [] Display the appropriate student when the url matches '/students/:studentId'
    [] Clicking on a student from the students view should navigate to show that student

BREAKDOWN
    In components folder
        1. Single student details
            include firstName, lastName, studentEmail, studentImage, and studentGPA
            list studentCampus (or message 'No campus listed')
    Navigation from all student list to selected student

tier 3
    [] Write a component to display a form from adding a new student that contains input for at least first name, last name and email
    [] Display this component as part of the students view, alongside the list of students
        {} Submitting the form with a valid description, category, and difficulty should:
            [] Make a request using RTK Query that causes the new student to be persisted in the database
            [] Add the new student to the list of student without needing to refresh the page

BREAKDOWN
    In component folder 
        1. Add new student file
            contain input for firstName, lastName, and studentEmail
    Add 'add student' button to navigation bar
        1. when clicked on it will open box on page to add student
        2. on submit 
            - make a request to backend, to persist new student in database
            - new student will be added to all student list without refreshing page

tier 4
    [] In the students view, include an 'X' button next to each student
        {} Clicking the 'X' button should:
            [] Make an Ajax request that causes that student to be removed from database
            [] Remove the student from the list of students without needing to refresh the page

BREAKDOWN
    In component folder/ all student list
        1. add 'delete' button
            - removes student from database backend without needing to refresh the page

tier 5
    [] Write a component to display a form updating a student
    [] Display this component as part of the student view
        {} Submitting the form with valid data should:
            [] Make a request using RTK Query that causes that student to be updated in the database
            [] Update the student in the current view without needing to refresh the page

BREAKDOWN
    In component folder/ single student details 
        1. add 'edit/update' button
            - edit/updates student in database without needing to refresh the page