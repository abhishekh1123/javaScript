import styles from './UserGreeting.module.css'
import propTypes from 'prop-types'

function UserGreeting(props){

    const welcomeMessage = <h2 className = {styles.welcomeMessage} >Welcome {props.userName}</h2> 

    const loginPrompt =  <h2 className= {styles.loginPrompt} >Please log in to continue</h2>
    
    return(props.isLoggedIn ? welcomeMessage : loginPrompt);

}

UserGreeting.propTypes = {
    userName: propTypes.string,
    isLoggedIn: propTypes.bool,
}

UserGreeting.defaultProps = {
    userName: "Guest",
    isLoggedIn: false
}
export default UserGreeting