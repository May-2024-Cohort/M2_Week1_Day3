
// importing the useState hook from react
import {useState} from 'react'

function Counter() {

    let initialValue = 0
    //    [state, updaterFunction] = useState(initial value)
    const [count,setCount] = useState(initialValue)



    
/* 
  Exercise 1:
    1. Create a reset button
    2. This button should reset the state of count
*/


    function increaseCount(){

        if(count<10){
            // Functional Update
            setCount((prevCount)=>{return prevCount+1})
            setCount((prevCount)=>{return prevCount+1})
        }
    }

    function decreaseCount(){

        if(count>0){
            setCount(count-1)
        }
    }
    

    function resetCount(){
        setCount(initialValue)
    }

  return (
    <div>
        <h2>{count}</h2>

        <button onClick={increaseCount}> + </button>
        <button onClick={decreaseCount}> - </button>
        <button onClick={resetCount}> Reset </button>

    </div>
  )
}

export default Counter