import React, {useState} from 'react'

function ToDoList() {
    const [task, setTask] = useState(["Take a shower", "Buy Somethin", "Walk my dog"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if (newTask.trim() !== "") {
            setTask(t => [...t, newTask])
            
        }
        setNewTask("");
    }
    function deleteTask(index){
        const updateTask = task.filter((_, i) => i !== index)
        setTask(updateTask)
    }
    function moveTaskUp(index){
        if (index > 0) {
            const updateTask = [...task];
            [updateTask[index], updateTask[index - 1]] = 
            [updateTask[index - 1], updateTask[index]]
            setTask(updateTask);
        }
    }
    function moveTaskDown(index){
        if (index < task.length - 1) {
            const updateTask = [...task];
            [updateTask[index], updateTask[index + 1]] = 
            [updateTask[index + 1], updateTask[index]]
            setTask(updateTask);
        }
    }

    return(
        <div className='to-do-list'>

            <h1>To Do List</h1>

            <div>    
                <input 
                type="text"
                placeholder='Enter a task'
                onChange={handleInputChange}/>
                <button 
                    className='add-button'
                    onClick={addTask}>
                    Add
                </button>

                <ol>
                    {task.map((task, index) => 
                        <li key={index}>
                            <span className='text'>{task}</span>
                            <button 
                                className='delete-button'
                                onClick={() => deleteTask(index)}>
                                Delete
                            </button>
                            <button 
                                className='move-button'
                                onClick={() => moveTaskUp(index)}>
                                👆
                            </button>
                            <button 
                                className='move-button'
                                onClick={() => moveTaskDown(index)}>
                                👇
                            </button>
                        </li>
                    )}
                </ol>
            </div>
        </div>
    )

}
export default ToDoList