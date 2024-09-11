import React, {useState, useEffect} from 'react'

function UseEffect() {
    const [count, setCount] =  useState(0);
    

    return(<>
        <p>Count: {count}</p>
        <button>Add</button>
    </>)

}
export default UseEffect