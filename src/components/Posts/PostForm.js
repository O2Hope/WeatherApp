import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import {createPost} from '../../actions/postActions'

class PostForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            body: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.name] : e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();

        const data = this.state;

        this.props.createPost(data);

   
    }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form  noValidate autoComplete="false" onSubmit={this.handleSubmit}>
            <TextField
                floatingLabelText="Titulo"
                value={this.state.title}
                name="title"
                onChange={this.handleChange}
                fullWidth={true}
            />
            <TextField
                floatingLabelText="Body"
                value={this.state.body}
                name="body"
                onChange={this.handleChange}
                fullWidth={true}
                multiLine={true}
            />
            <RaisedButton type="submit">Save</RaisedButton>
        </form>
      </div>
    )
  }
}

PostForm.proptypes = {
    createPost : PropTypes.func.isRequired,
}

export default connect(null, {createPost})(PostForm);
