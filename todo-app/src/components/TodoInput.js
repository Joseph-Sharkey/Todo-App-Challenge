import { useState } from 'react';

const TodoInput = (props) => {
	const [inputValue, setInputValue] = useState("")
	function submitInput(event) {
		event.preventDefault();
		props.appendFunction(inputValue);
		setInputValue("");
	}

	return (
		<div className="todoInput">
			<form className="inputForm" onSubmit={(e) => submitInput(e)}>
				<input className="input" type="text" value={inputValue} onChange={e => {setInputValue(e.target.value)}}></input>
				<input className="inputSubmit" type="submit"></input>
			</form>
		</div>
	);
};


export default TodoInput;