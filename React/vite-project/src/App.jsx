import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Button from './Button/Button.jsx'
import Student from './Student/Student.jsx'
import UserGreeting from './UserGreeting/UserGreeting.jsx'
import List from './List.jsx'
function App() {

  const fruits = [{id: 1, name: "Apple", calories: 95}, 
                  {id: 2, name: "Orange", calories: 45}, 
                  {id: 3, name: "Banana", calories: 105}, 
                  {id: 4, name: "Pinnaple", calories: 37},
                  {id: 5, name: "Coconut", calories: 159}];

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
      {/* <UserGreeting isLoggedIn={true} userName = "Abhi" />
      <UserGreeting isLoggedIn={true} /> */}

      
      <List items = {fruits} category = "Fruits"/>
    </>
  );
}

export default App
