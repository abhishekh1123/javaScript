import React, {useState} from 'react'

function UpdateArray(){
    const [food, setFood] = useState(["Apple", "Banana", "Orange"])

    const handleAddFood = (event) => {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        
        setFood(f => [...f, newFood]);
    }

    function handleRemoveFood(index)  {
        setFood(food.filter((_, i) => i !== index));
    }
    return(
        <div>
            <h1>List of Foods</h1>
            <ul>
                {food.map((food, index) => 
                <li key={index} onClick={() => handleRemoveFood(index)}>
                    {food}
                </li>)}
            </ul>
            <input type="text" id="foodInput" placeholder='Enter food name' />
            <button onClick={handleAddFood}>Add food</button>
        </div>
    )
}

export default UpdateArray