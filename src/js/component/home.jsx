import React, {useState} from "react";


//create your first component
const Home = () => {
	const[todos, setTodos] = useState([]); //donde irán la lista de todos
    const[inputValue, setInputValue] = useState(""); //donde irá lo que se escriba en input
    const[hiddenDelete, setHiddenDelete] = useState(true);

	//hace que el estado de inputValue sea igual a lo que se escribe en input
	const handleChange = (event) =>{
        setInputValue(event.target.value);
	}
	//añade nueva todo al estado todos y limpia el estado de inputValue cuando se le da enter
	const handleSubmit = (event) => {
       event.preventDefault();
	   setTodos([...todos, inputValue]);
	   setInputValue("");
	}

   const handleKeyDown = (event) =>{
	if(event.key === "Enter"){
		handleSubmit(event)
	}
   }

   const handleDelete = (index) => {
	const newTodos=[...todos];
	newTodos.splice(index,1);
	setTodos(newTodos);
   }


   console.log(todos)
	return (
		<div className="container-fluid bg-black w-100 d-flex flex-column justify-content-center align-items-center ">
			<div className="backgroundList">
			  <div className="container d-flex flex-column justify-content-center align-items-center">
			     <h1 className="title">todos</h1>
				 <form>
				   <input className="input" type="text" placeholder="Write a task..." value={inputValue} onChange={handleChange} onKeyDown={handleKeyDown}></input>
				 </form>
				 <ul>
				     {todos.map((todo, index) => (
						<li className="submittedInput" key={index}>
						{todo}
						<button className="closing-btn" onClick={() => handleDelete(index)}>X</button>
						</li>	
				      ))}
					  {todos.length <= 0 && <p className="submittedInput">No tasks, add a task</p>}
			     </ul> 
			  </div>
			</div>
		</div>
	);
};

export default Home;
