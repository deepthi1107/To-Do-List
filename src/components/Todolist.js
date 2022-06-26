import React from 'react';
import Item from './Item';
import Itemform from './Itemform';

class Todolist extends React.Component{
	constructor(){
		super();
		
		this.state= {
			items: [{
				title: "Cs project",
				done: false
			},
			{
				title: "Ds assignment",
				done: false
			}
			]
		};
	}

	addItem(value){
		let items = this.state.items;
		items.push({
			title: value,
			done: false
		});
		this.setState({
			items:items
		});
	}

	editItem(value, index){
		
		let items = this.state.items;
		items[index].title = value;
		this.setState({
			items:items
		});
	}

	deleteItem(index){
		if(window.confirm('Do you want to delete?')){
			let items = this.state.items;
			items.splice(index,1);
			
			this.setState({
				items:items
			});
		}
		
	}

	doneItem(index){
		let items = this.state.items;
		
		items[index].done = !items[index].done;

		this.setState({
			items:items
		});
	}


	render(){
		return(
			<div className="todo">
				<h2>To-Do</h2>
				<ul className="todo-list">
					{
						this.state.items.map((item, index)=>{
							return <Item key={index} editHandler={this.editItem.bind(this)} doneHandler={this.doneItem.bind(this)} deleteHandler={this.deleteItem.bind(this)} index={index} item={item}/>
						})
					}
					
				</ul>
				<Itemform addItemHandler={this.addItem.bind(this)}/>
			</div>
		)
	}
}

export default Todolist;