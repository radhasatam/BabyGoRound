import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderField } from '../../../utils/renderForms';

import Validator from 'validatorjs';

export const validate = (values) => {
  const rules = {
    name: 'required',
    email: 'required|email',
    phoneNumber: 'required',
    password: 'required|min:6'

  }

  const errorMsg = {
    "required.email": "Please enter an email address",
    "email.email": "Please enter a valid email address",
    "required.password": "Please enter a password for your account",
    "min.password": "Please enter a password with 6 or more characters",
  }

  const validator = new Validator(values, rules, errorMsg)
  validator.passes();

  const extraValidation = (values) => {
    const errors = {}
    return errors
  }

  return {
    ...extraValidation(values),
    ...validator.errors.all()
  }
}


class VolunteerRegisterForm extends Component {

    render() {
    let { handleSubmit } = this.props;
        return (

<form onSubmit={handleSubmit}>

          <h1> VolunteerRegisterForm </h1>

          <Field component={renderField} name="name" id="name" type="name" label="Name" />
            <Field component={renderField} name="email" id="name" type="email" label="Email" />
            <Field component={renderField} name="phoneNumber" id="phoneNumber" type="tel" label="Phone number" />
            <Field component={renderField} name="password" id="password" type="password" label="Password" />
            <Field component={renderField} name="verifyPassword" id="passWord" type="password" label="Verify Password" />


     <hr></hr>

   <button type="submit">Register</button>
 </form>


        )
    }
}
VolunteerRegisterForm = reduxForm({
  form: 'VolunteerRegisterForm',
  enableReinitialize: true,
  validate
})(VolunteerRegisterForm)

export default VolunteerRegisterForm;