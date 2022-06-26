import React from 'react';

const Itemform = (props)=>{
	let newItem;
	return (
		<form className="todo-form" onSubmit={(evt)=>{
			evt.preventDefault();
			if(newItem.value!=='')
				props.addItemHandler(newItem.value);
			newItem.value='';
		}}>
			<input ref={node => newItem = node} type="text" placeholder="Enter text..."/>
			<button type="submit" >Add</button>
		</form>
		);
}

export default Itemform;