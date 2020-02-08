import React, { useState } from "react";
import { connect } from 'react-redux';

export const useForm = (initialValues = {}, submitCallback) => {

    const [values, setValues] = useState(initialValues);
  
    const handleChanges = e => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = e => {
      e.preventDefault();
      submitCallback();
    };
  
    const clearForm = e => {
      e.preventDefault();
      setValues(initialValues);
    };
  
    return [values, handleChanges, handleSubmit, clearForm];
  };