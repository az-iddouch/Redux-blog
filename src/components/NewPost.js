import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class NewPost extends Component {
  renderInput(field) {
    return (
      <div className="form-group">
        <label htmlFor={field.name}>{field.label}</label>
        <input {...field.input} className="form-control" type="text" />
      </div>
    );
  }
  renderTextArea(field) {
    return (
      <div className="form-group">
        <label htmlFor="">{field.label}</label>
        <textarea {...field.input} className="form-control" rows="3" />
      </div>
    );
  }

  render() {
    return (
      <React.Fragment>
        <div className="d-flex mb-5">
          <h1 className="">create new post .</h1>
        </div>
        <form className="col-md-8">
          <Field label="Title" name="title" component={this.renderInput} />
          <Field label="Tags" name="tags" component={this.renderInput} />
          <Field
            label="Post Body"
            name="body"
            component={this.renderTextArea}
          />
        </form>
      </React.Fragment>
    );
  }
}

export default reduxForm({
  form: 'NewPostForm'
})(NewPost);
