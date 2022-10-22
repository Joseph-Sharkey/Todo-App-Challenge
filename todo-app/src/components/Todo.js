import { useEffect } from "react"
import { useState } from "react"
const Todo = (props) => {
	const [displayClass, setDisplayClass] = useState("todoDiv") 
	return(
		<div className={displayClass}>
			<button className="checkButton" onClick={() => {
				props.todo.checked = !props.todo.checked
				if (displayClass === "todoDiv") {
					setDisplayClass(displayClass + ' todoDivCrossed');
				} else {
					setDisplayClass('todoDiv');
				}
			}}></button>
			<h2 className="todoContent">{props.todo.item}</h2>
			<button className="deleteButton" onClick={() => {props.deleteFunction(props.todo)}}>X</button>
		
		</div>
	)
}


export default Todo;