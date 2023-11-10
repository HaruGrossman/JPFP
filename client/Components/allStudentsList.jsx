// returns how we want our student list to appear on the page
//// list- per student:image, name, delete button
// matches '/students' url

function AllStudentList() {
    return (
        <>
            {/* <image /> */}
            <h4>`${firstName} ${lastName}`</h4>
            <button>X</button>
        </>
    )
}
export default AllStudentList
