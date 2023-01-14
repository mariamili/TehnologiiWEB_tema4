import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import store from'../stores/RobotStore';
import Robot from './Robot';

function RobotForm() {
	const [name , setName] = useState('');
	const [type , setType] = useState('');
	const [mass , setMass] = useState('');


	const handleChange =(e)=>{
	setName(e.target.value);
	}

	const handleTypeChange =(e)=>{
	setType(e.target.value);
	}

	const handleMassChange =(e)=>{
	setMass(e.target.value);
	}

	const handleSubmit=(e)=>{
	e.preventDefault();
    store.addRobot({name,type,mass});
    setMass('');
    setName('');
    setType('');
	}
return (
	<div className="Form">
    <h1>Robot form</h1>
	<form onSubmit={(e) => {handleSubmit(e)}}>
		<label htmlFor='name'>
		Name:
		</label><br/>
		<input id='name'name='name' type="text" value={name}  required onChange={(e)=> {handleChange(e)}} /><br/>
		<label htmlFor='type' >
		Type:
		</label><br/>
		<input id='type'name="type" type="text" value={type} required onChange={(e)=> {handleTypeChange(e)}} /><br/>
		<label htmlFor='mass'>
		Mass:
		</label><br/>
		<input id='mass'type="text" name='mass' value={mass} required onChange={(e)=> {handleMassChange(e)}} /><br/>
		<input type="submit" value="Submit"/>
	</form>
	</div>
);
}

export default RobotForm;
