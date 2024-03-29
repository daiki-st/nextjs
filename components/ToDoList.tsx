import React, { useState, useEffect } from 'react';
import { useAddTodo } from '../Hooks/useAddTodo';

export const TodoList = () => {
	const { todos } = useAddTodo()
	
	return(
	    <>
			<div>todoリスト</div>
			{todos?.map((todo) => (
				<li key={todo.id}>{todo.title}</li>
			))}
	    </>
	)
}