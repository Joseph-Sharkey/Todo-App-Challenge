import Todo from './Todo';
import { useEffect } from 'react';

const TodoList = (props) => {

	return (
		<div className="todoList">
			{props.todoList.map(element => {
				return (
					<Todo todo={element} deleteFunction={props.deleteFunction} key={element.key}/>
				);
			})}	
		</div>
	);
};

export default TodoList;