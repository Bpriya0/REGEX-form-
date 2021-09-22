import React, { useState , useEffect} from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';



function getFormValues() {
	const storedValues = localStorage.getItem('form');
	if (!storedValues)
		return {
      name: '',
      email: '',
			phonenumber: '',
		};
	return JSON.parse(storedValues);
}

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [values, setValues] = useState(getFormValues);
  
  React.useEffect(() => {
		localStorage.setItem('form', JSON.stringify(values));
	}, [values]);

  
  function submitForm() {
    setIsSubmitted(true);
  }

 
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80' alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
