import propTypes from 'prop-types'
import styles from './Student.module.css'

function Student(prop){
    return(
        <div className={styles.student}>
            <p>Name: {prop.name} </p>
            <p>Age: {prop.age}</p>
            <p>Student: {prop.isStudent ? "Yes" : "No"}</p>
        </div>     
    )
}
Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    isStudent: propTypes.bool,
}
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,

}

export default Student