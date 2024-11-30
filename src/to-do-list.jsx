import React,{useState} from 'react';
function ToDoList(){
    const [task,setTask]=useState(["Eat breakfast","take a Shower","running"]);
    const[newTask,setNewTask]=useState("");
    function handleInputtask(event){
        setNewTask(event.target.value);

    }
    function addtask(){
        if(newTask.trim()!==""){
            setTask(t=>[...t,newTask]);
            setNewTask("");
        }
    }

    function DeleteTask(index){
        const updateTask= task.filter((_,i)=>i!==index);
        setTask(updateTask);


    }
    function moveTaskUp(index){
        if(index>0){
            const updatetask=[...task];
            [updatetask[index],updatetask[index-1]]=
            [updatetask[index-1],updatetask[index]];
            setTask(updatetask);
        }

    }

    function movetaskDown(index){
        if(index<task.length-1){
            const updatetask=[...task];
            [updatetask[index],updatetask[index+1]]=
            [updatetask[index+1],updatetask[index]];
            setTask(updatetask);
        }

    }


    return(
        <>
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input type="text" placeholder='Enter a task' value={newTask} onChange={handleInputtask}></input>
                <button className="add-button" onClick={addtask}>Add</button>
        </div>
        <ol>
                    {task.map((task,index)=> 
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className='delete-button'
                                 onClick={()=>DeleteTask(index)}>
                         Delete
                        </button>
                        <button className='move-button'
                                 onClick={()=>moveTaskUp(index)}>
                         Move up
                        </button>
                        <button className='move-button'
                                 onClick={()=>movetaskDown(index)}>
                         Move Down
                        </button>
                    </li>)}
        </ol>

           

        </div>
        </>
    )


}
export default ToDoList