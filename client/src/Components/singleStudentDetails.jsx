// returns how we want our single student details to appear on the page
//// image, firstName, lastName, studentEmail, studentGPA, and studentCampus
// matches '/students/:studentId' url
import "../App.css"

function SingleStudentDetails({ student }) {
    // used in allStudentList.jsx to represent single student 
    return (
        <>
            <div>
                {student.firstName}
                {/* {`${studentImage}`} */}
                <br />
                {/* {`${firstName} ${lastName}`} */}
                <br />
                {/* {`Contact information:${studentEmail}`} */}
                <br />
                {/* <button>Update</button> */}

            </div>
        </>
    )
}
export default SingleStudentDetails