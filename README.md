https://github.com/FullstackAcademy/2309-FSA-ET-WEB-FT-SF-JPFP
Create an application that keeps track of students and student data

1. application need to load without errors (blank screens are not acceptable)
2. build incrementally, and test your progress as you go!
3. if you have an error, fix the error, before attempting to add functionality
4. if you have time at the end, we ask that you record a short (5min) walkthrough of all the functionality you've built. This is to help us with grading your project and give you practice with recording demos before you're doing it for real in Senior Phase

Views and Functionality
    - You can determine views and functionality from the requirements and wireframes shown below. If you need any clarification, please feel free to ask!

    -tier 1: All Students-

        page -localhost:<port>/students
            students list (header)
            (body)
                student 
                    <more details about student>
                student 
                    <more details about student>
                student 
                    <more details about student>
                student 
                    <more details about student>

        [] Backend 
            -seed
                Write a function which syncs and seeds your database when your application stats.
            -Students
                Write a route to serve up all students
                    Write a 'students' model with the following information:
                        [] firstName - not empty or null
                        [] lastName - not empty or null
                        [] email - not empty or null; must be a valid email
                        [] imageUrl - with a default value
                        [] gpa - decimal between 0.0 and 4.0
        [] Frontend
            -Students
                Write a component to display a list of all student (at least their names)
                Write a students slice to manage students in you Redux store
                Display the all-students component when the url matches '/students'
            -Navbar
                Add a navbar with a link to '/students'

    -tier 2: Single Student-
        page -localhost:<port>/student/2
            Detail page for selected student
                student ________
                <all of moe's details including:
                firstName, lastName, email, imageUrl, and gpa>
        
        [] Backend
            Write a route to serve up a single student (based on their id)
        [] Frontend
            Write a component to display a single student with he following information:
                [] The student's full name, email, image, and gpa
                [] The name of their campus (or a helpful message if they don't have one)
            [] Display the appropriate student when the url matches '/students/:studentId'
            [] Clicking on a student from the students view should navigate to show that student
        
    -tier 3: Adding a Student-
        page -localhost:<port/students>
            student list and add(create) student box 
        
        [] Backend
            [] Write a route to add a new student
        [] Frontend
            [] Write a component to display a form from adding a new student that contains input for at least first name, last name and email
            [] Display this component as part of the students view, alongside the list of students
                {} Submitting the form with a valid description, category, and difficulty should:
                    [] Make a request using RTK Query that causes the new student to be persisted in the database
                    [] Add the new student to the list of student without needing to refresh the page

    -tier 4: Removing a Student-
        page -localhost:<port>/students
            student list with delete button and add(create) student box

        [] Backend
            [] Write a route to remove a student (based on their id)
        [] Frontend
            [] In the students view, include an 'X' button next to each student
                {} Clicking the 'X' button should:
                    [] Make an Ajax request that causes that student to be removed from database
                    [] Remove the student from the list of students without needing to refresh the page

    -tier 5: Updating a Student-
        page -localhost:<port>/students/2
            detail page for selected student and edit box with update button
        
        [] Backend
            [] Write a route to update an existing student
        [] Frontend
            [] Write a component to display a form updating a student
            [] Display this component as part of the student view
                {} Submitting the form with valid sata should:
                    [] Make a request using RTK Query that causes that student to be updated in the database
                    [] Update the student in the current view without needing to refresh the page

    -Bonus Tier: Finishing Touches (15EC)
        []Finishing Touches
            [] If a user attempts to add a new student without a require field, a helpful message should be displayed
            [] If a user attempts to access a page that doesn't exits (ex. '/potato'), a helpful message should be displayed
            [] If a user attempts to view a student that doesn't exist, a helpful message should be displayed
            [] Whenever a component needs to wait for data to load from the server, a "loading" message should be displayed until the data is available
            [] Overall, the app is spectacularly styled and visually stunning
        [] Ordering
            [] Create option for students to be ordered based on laseName on all-students view
            [] Create option for students to be ordered based on GPA on all-students view
        [] Seeding & Pagination
            [] Seed 100+ students
            [] Implement fron-end pagination for the students view (e.g. '/students?page=1' returns the first ten students' data, and '/api/students?page=2' returns students 11-20)
            'RUBRIC.md' -contains the grading rubric for additional factors, as well as the formula for calculating the total score
        [] Deploy Your Application
            [] Deploy your application (search Canvas for "deployment guide" for more information)
            


        





# JPFP
