import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Button from './Button/Button.jsx'
import Student from './Student/Student.jsx'
import UserGreeting from './UserGreeting/UserGreeting.jsx'
function App() {

  return(
    <>
      {/* <Header/> */}
      {/* <Food/> */}
      {/* <Footer/> */}
      {/* <Button/> */}
      {/* <Student name = "Abhi" age = {23} isStudent = {true}/>
      <Student name = "Sabir" age = {24} isStudent = {false} />
      <Student name = "Ani" age = {22} isStudent = {true}/>
      <Student name = "Sumit" age = {22} isStudent = {true}/>
      <Student name = "Pragyan"/>
      <Student/> */}
      <UserGreeting isLoggedIn={true} userName = "Abhi" />
      <UserGreeting isLoggedIn={true} />
    </>
  );
}

export default App
