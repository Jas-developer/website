
import propTypes from "prop-types";

function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>School: {props.school}</p>
            <p>Age: {props.age}</p>
            <p>Status: {props.isStudent ? <p>{props.name} is a Student</p> : "That boy is not a student"}</p>
        </div>
    )
};



Student.propTypes = {
    name:propTypes.string,
    age:propTypes.number,
    school:propTypes.string,
    isStudent: propTypes.bool
};

Student.defaultProps = {
   name: "Guest",
   age: 0,
   isStudent: false
};



export default Student;