// returns how we want our single student details to appear on the page
//// image, firstName, lastName, studentEmail, studentGPA, and studentCampus
// matches '/students/:studentId' url

function SingleStudentDetails() {
    return (
        <>
            <form>
                {`${studentImage}`}
                <br />
                {`${firstName} ${lastName}`}
                <br />
                {`Contact information:${studentEmail}`}
                <br />
                <button>Update</button>

            </form>
        </>
    )
}
export default SingleStudentDetails