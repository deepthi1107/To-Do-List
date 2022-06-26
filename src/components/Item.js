import React from 'react';

class Item extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			editing: false
		};
	}

	editToggle(){
		this.setState({
			editing: !this.state.editing
		});
	}

	submitEditForm(evt){
		evt.preventDefault();
		if(this.refs.editValue.value!==''){
			this.props.editHandler(this.refs.editValue.value, this.props.index);
			this.editToggle();
		}
	}
	render(){
		return(
			<div>
			{(this.state.editing)?
				<li>
					<form onSubmit={this.submitEditForm.bind(this)}>
						<input 
						ref="editValue"
						defaultValue={this.props.item.title}  
						type="text"/>
						<button type="submit">Save</button>
					</form>
				</li>
			:

				<li className={this.props.item.done?'done':''}>
					<input type="checkbox" defaultChecked={this.props.item.done} onChange={()=>{
						this.props.doneHandler(this.props.index);
					}}/>
					<p className="item-title">{this.props.item.title}</p>
					<div className="buttons">
						<button onClick={this.editToggle.bind(this)}>Edit
						</button>
						<button onClick={()=>{
								this.props.deleteHandler(this.props.index);
							}}>Delete
						</button>
					</div>
				</li>
			}
			</div>
		)
	}
}


export default Item;