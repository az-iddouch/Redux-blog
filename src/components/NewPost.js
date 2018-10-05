import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';
import {
  required,
  maxLength30,
  minLength2,
  minLength20
} from '../form_validation_methods';

class NewPost extends Component {
  renderInput({ name, label, input, meta: { touched, error, warning } }) {
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
          {...input}
          className={`form-control ${touched && error ? 'is-invalid ' : ''}`}
          type="text"
        />
        <div className="invalid-feedback">
          {touched &&
            ((error && <span>{error}</span>) ||
              (warning && <span>{warning}</span>))}
        </div>
      </div>
    );
  }
  renderTextArea({ name, label, input, meta: { touched, error, warning } }) {
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <textarea
          {...input}
          className={`form-control ${touched && error ? 'is-invalid ' : ''}`}
          rows="3"
        />
        <div className="invalid-feedback">
          {touched &&
            ((error && <span>{error}</span>) ||
              (warning && <span>{warning}</span>))}
        </div>
      </div>
    );
  }

  onSubmit = values => {
    this.props.createPost(values, () => this.props.history.push('/'));
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <React.Fragment>
        <div className="d-flex mb-5">
          <h1 className="">create new post .</h1>
        </div>
        <form className="col-md-8" onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            label="Title"
            name="title"
            validate={[required, maxLength30, minLength2]}
            component={this.renderInput}
          />
          <Field
            label="Categories"
            name="categories"
            validate={[required, minLength2]}
            component={this.renderInput}
          />
          <Field
            label="Post Body"
            name="content"
            validate={[required, minLength20]}
            component={this.renderTextArea}
          />
          <button type="submit" className="btn btn-outline-primary mt-2">
            Submit
          </button>
          <Link to="/" className="btn btn-outline-danger mt-2 ml-2">
            Cancel
          </Link>
        </form>
      </React.Fragment>
    );
  }
}

export default reduxForm({
  form: 'NewPostForm'
})(
  connect(
    null,
    { createPost }
  )(NewPost)
);
