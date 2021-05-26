import React, { Component } from 'react'
import CustomTextInput from "./CustomTextInput";
export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'name',
            MobileNumber:'MobileNumber',
            Email: 'Email',
            City:' City',
            Message:'Message',
        };} 
        hundleChange = CustomTextInput =e =>{
            this.setState({
                [CustomTextInput]: e.target.value
            });
        }
    render() {
        return (
            <div>
                <form className="form Modal-form" noValidate>
                    <CustomTextInput
                      id="Name"
                      label="Name"
                      
                      onChange={this.hundleChange('name')}
                    />
                    <CustomTextInput
                      id="MobileNumber"
                      label="Mobile Number"
                     
                      onChange={this.hundleChange('MobileNumber')}
                    />
                    <CustomTextInput
                      id="Email"
                      label="Email Address"
                    
                      onChange={this.hundleChange('Email')}
                    />
                    <CustomTextInput
                      id="City"
                      label="City"
                     
                      onChange={this.hundleChange('City')}
                    />
                    <CustomTextInput
                      id="Message"
                      type="text"
                      label="Message"
                     
                      onChange={this.hundleChange('Message')}
                    />
                    <div className="buttonTopMargin">
                      <button
                      type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
            </div>
        )
    }
}
