import React, {useState} from 'react'

// function UpdateArray(){
//     const [food, setFood] = useState(["Apple", "Banana", "Orange"])

//     const handleAddFood = (event) => {
//         const newFood = document.getElementById("foodInput").value;
//         document.getElementById("foodInput").value = "";
        
//         setFood(f => [...f, newFood]);
//     }

//     function handleRemoveFood(index)  {
//         setFood(food.filter((_, i) => i !== index));
//     }
//     return(
//         <div>
//             <h1>List of Foods</h1>
//             <ul>
//                 {food.map((food, index) => 
//                 <li key={index} onClick={() => handleRemoveFood(index)}>
//                     {food}
//                 </li>)}
//             </ul>
//             <input type="text" id="foodInput" placeholder='Enter food name' />
//             <button onClick={handleAddFood}>Add food</button>
//         </div>
//     )
// }



function UpdateArray() {
    const [car, setCar] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState();   
    const [carModel, setCarModel] = useState();

    function handleAddCar(){
        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        };
        setCar(c => [...c, newCar])
        setCarYear(new Date().getFullYear())
        setCarMake("")
        setCarModel("")
    }

    function handleRemoveCar(index){
        setCar(c => c.filter((_, i) => i !== index));
    }

    function handleYearChange(event) {
        setCarYear(event.target.value);
    }

    function handleMakeChange(event) {
        setCarMake(event.target.value)
    }
     
    function handleModelChange(event) {
        setCarModel(event.target.Model)
    }

    return(
        <div>
            <h1>List of Car Objects</h1>
            <ul>
                {car.map((car, index) => 
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>)}
            </ul>

            <input type="number" value={carYear} onChange={handleYearChange} /><br />
            <input type="text" value={carMake} onChange={handleMakeChange}
                placeholder='Enter car Make' /> <br />
            <input type="text" value={carModel} onChange={handleModelChange} 
                placeholder='Enter car Model'/><br />
            <button onClick={handleAddCar}>Add Car</button><br />
            
        </div>
    )
}

export default UpdateArray