import React, {useState} from 'react'
import styles from './ColorPicker.module.css'

function ColorPicker() {
    const [color, setColor] = useState("#FFFFFF")

    const handleColorChange = (event) => {
        setColor(event.target.value)
    }

    return(
        <div className={styles.container}>
            <h1>Color Picker</h1>
            <div className={styles.display} style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select a color:</label>
            <input type="color" value={color} onChange={handleColorChange} />
        </div>
    )
}
export default ColorPicker