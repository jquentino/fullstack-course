import Header from "./Header"
import Content from "./Content"

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content array_of_items={course.parts} />
            {/* <Total array_of_items={items}/> */}
        </div>
    )
}

export default Course