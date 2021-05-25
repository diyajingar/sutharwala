import React, { Component } from 'react'
import TextField from "@material-ui/core/TextField";
export default class CustomTextInput extends Component {
    render() {
        return (
            
                 <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id={this.props.id}
              label={this.props.label}
              name={this.props.id}
              autoComplete={this.props.id}
              autoFocus
              onChange={(event) => this.props.onChange(event.target.value)}
            />
         
        )
    }
}
