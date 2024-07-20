import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tweet from './components/Tweet'
import Counter from './components/Counter'
import Students from './components/Students'
import { v4 as uuidv4 } from 'uuid';
import MovieList from './components/MovieList'


function App() {

  let myNames = ["John","Bob","Marry"]

  let teacherData = [
    {
      name:"Omar Kamal",
      city: "Ajman",
      email:"omar@ironhack.com",
      languages:["English","Arabic"],
      course:"Web Dev",
      isTA:false
    },
    {
      name:"Felipe Mantovani",
      city: "Paris",
      email:"felipe@ironhack.com",
      languages:["English","Portuguese"],
      course:"Web Dev",
      isTA:true
    },
    {
      name:"Pool Ortega",
      city: "Lisbon",
      email:"pool@ironhack.com",
      languages:["English","Spanish"],
      course:"Web Dev",
      isTA:true
    },
  ]

  teacherData.sort((a,b)=>{
    return a.name.localeCompare(b.name)
  })
  
  

  console.log(uuidv4())
/*
  Exercise 2:
    1. given the following array of strings display the names on the page

    let studentNames = ["Daniel", "Lee","Toni","Judi","Mikko"]

    Bonus: display in an ordered list
 */

  let myName = "Omar"

  const [theme,setTheme] = useState("dark")

  function light(){
    setTheme("light")
  }
  function dark(){
    setTheme("dark")
  }

  
  return (
    <div className={theme}>
        {/* {teacherData.map((oneTeacher)=>{
        return(
          <Students key={uuidv4()} name={oneTeacher.name} city={oneTeacher.city}></Students>
        )
      })} */}
      
{/* 
      {myNames.map((oneName)=>{
        return(
          <li key={oneName}>{oneName} are people</li>
        )
      })}



      {myNames.map((oneName)=>{
        return(
          <li key={oneName}>{oneName}</li>
        )
      })}


    

      <Counter></Counter>



      <button onClick={dark}>Dark</button>
      <button onClick={light}>Light</button> */}

      <MovieList></MovieList>
    </div>
  )
}

export default App
