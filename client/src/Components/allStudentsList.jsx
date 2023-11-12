// returns how we want our student list to appear on the page
//// list- per student:image, name, delete button
// matches '/students' url
import "../App.css"
import SingleStudentDetails from "./singleStudentDetails"


const mockStudent = [
    {
        firstName: "John",
        lastName: "Smith",
        studentGPA: 2.0,
    },
    {
        firstName: "Sam",
        lastName: "Harry",
        studentGPA: 3.0,
    },
    {
        firstName: "Anthony",
        lastName: "Jones",
        studentGPA: 4.0,
    }
]

function AllStudentList() {
    // should take array of students and turn them into singleStudentDetails.jsx
    return (
        <>
            {mockStudent.map(student => <SingleStudentDetails student={student} />)}
            {/* <image /> */}
            {/* <h4>`${firstName} ${lastName}`</h4>
            <button>X</button> */}
        </>
    )
}
export default AllStudentList
