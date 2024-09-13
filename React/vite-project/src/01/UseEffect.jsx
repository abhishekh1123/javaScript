import React, {useState, useEffect} from 'react'

function UseEffect() {
    const [count, setCount] =  useState(0);
    
    useEffect(() => {
        document.title = `count ${count}`
    }, [count])

    function addCount(){
        setCount(c => c + 1);
    }

    function substractCount(){
    }

    return(<>
        <p>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={substractCount}>Substract</button>
    </>)

}
export default UseEffect