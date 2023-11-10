// returns how we want our navigation to appear on the page
//// title, home (all student list button), add student button

function NavigationBar() {
    return (
        <nav>
            <title>Fullstack Students</title>
            <a href="http://">Home</a> {/* returns to all student page */}
            <button>Add Student</button> {/* popup box to add student */}
        </nav>
    )
}
export default NavigationBar