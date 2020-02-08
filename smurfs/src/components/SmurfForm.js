import React from "react";
import axios from 'axios';
import { connect } from 'react-redux';
import { getSmurf } from '../actions';
import { useForm } from '../hooks/useForm';
import "./App.css";

function SmurfForm(props) {

    const submitCallback = () => {
        console.log("Submitting The New Smurf: ", values);

        axios
            .post('http://localhost:3333/smurfs', values)
            .then(res => {
                console.log('SMURFS THAT HAVE BEEN SENT::::::::::: ', res);
                props.getSmurf();
            })
            .catch(err => {
                console.log('AAAAAHHHHHHHH ', err);
            });
    };

    const [values, handleChanges, handleSubmit, clearForm] = useForm(
    {
        name: "",
        age: "",
        height: ""
    },
    submitCallback
    );
    
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Name' name='name' value={values.name} onChange={handleChanges}/>
            <input type='number' placeholder='Age' name='age' value={values.age} onChange={handleChanges}/>
            <input type='number' placeholder='Height' name='height' value={values.height} onChange={handleChanges}/>
            <button type="submit">Add Smurf!</button>
            <button onClick={clearForm}>Reset Form</button>
        </form>
    );
}

const mapStateToProps = state => {
  return {

  }
}

export default connect(
    mapStateToProps,
    {
        getSmurf
    }
)(SmurfForm);