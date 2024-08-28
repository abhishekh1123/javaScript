import styles from './Button.module.css'

function Button () {

    // const clickHandler = () => console.log("OUCH!!");
    // const chickHandler2 = (name) => console.log(`${name} stop clicking!!`);
    
    // let count = 0;
    // const clickHandler = () => {
        
    //     if(count < 3){
    //         count++;
    //         console.log(`You have clicked me ${count} time`);
    //     }
    //     else{
    //         console.log("Stop clicking me!!");
    //     }
    // };
    
    const clickHandler = (e) => e.target.textContent = "OUCH!! 🤕"

    return(
        <button className={styles.button} onDoubleClick={(e) => clickHandler(e)}>
            Click Me 😄
        </button>
    )

}

export default Button