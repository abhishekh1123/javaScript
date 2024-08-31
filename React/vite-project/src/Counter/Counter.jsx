import React, {useState} from 'react'
import Styles from './Counter.module.css'

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }

    return(
        <div className={Styles.container}>
            <p className={Styles.name}>{count}</p>
            <button className={Styles.button} onClick={increment}>Increment</button>
            <button className={Styles.button} onClick={reset}>Reset</button>
            <button className={Styles.button} onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter