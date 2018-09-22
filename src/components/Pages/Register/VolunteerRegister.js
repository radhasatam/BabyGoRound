import React, { Component } from 'react';
import AgencyRegisterForm from '../Forms/AgencyRegisterForm';
import { Field, reduxForm } from 'redux-form';
import { renderField } from '../../../utils/renderForms';
import VolunteerRegisterForm from '../Forms/VolunteerRegisterForm';

class VolunteerRegister extends Component {
    constructor(props){
      super(props)
     this._submitForm = this._submitForm.bind(this)
    }
    _submitForm(values) {
            console.log('values', values)
        }
    render() {

     //let { handleSubmit } = this.props;
           return (
               <VolunteerRegisterForm onSubmit={this._submitForm} />
        )
    }
}

export default VolunteerRegister;