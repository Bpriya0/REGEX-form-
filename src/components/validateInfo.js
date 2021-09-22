export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
        errors.username = 'Username required';
  }else if (!/^[a-zA-Z\s]*$/.test(values.username)) {
      errors.username = ' username is invalidonly letters and spaces allowed.';
    }

  if (!values.phonenumber) {
    errors.phonenumber = 'Phonenumbr required';
  }else if(!/^[0-9\b]+$/.test(values.phonenumber)){
    errors.phonenumber = 'Phone Number is invalid please Enter your 10 digit number';
  }
  
  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password needs to be 8 characters or more';
  }

  if (!values.password2) {
    errors.password2 = 'Password is required';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Passwords do not match';
  }
  return errors;
}