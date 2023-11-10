function AddStudentForm() {
    return (
        <form>
            <input type="text" name="firstName" placeholder="First Name" required />
            <input type="text" name="lastName" placeholder="Last Name" required />
            <input type="number" name="studentGPA" placeholder="GPA" />
            <input type="email" name="studentEmail" onChange={validateEmail} placeholder="Email" required />
            <input type="image" src="" alt="" />
            <button className="addStudentButton" type="submit" >
                Add Student
            </button>
        </form>
    )
}
export default AddStudentForm