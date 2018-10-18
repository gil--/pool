import React, { Component } from 'react';
import { Button, FormField, TextInputField, Textarea, Pane } from 'evergreen-ui';
import { Formik, Field, ErrorMessage } from 'formik';

class Login extends Component {
    render() {
        return <Pane margin={20} clearfix display="flex" alignItems="center">
            <Pane border width={'50%'} padding={20}>
              <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={values => {
                        let errors = {};
                        errors.email = 'Invalid email address';
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                    alert('submitted!');
                    setSubmitting(false);
                }}>
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => <form onSubmit={handleSubmit
                      /* and other goodies */
                    }>
                    <TextInputField
                        label="Email"
                        type="email"
                        name="email"
                        placeholder="obama@whitehouse.gov"
                        height={40}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        isInvalid={errors.email && true}
                        validationMessage={errors.email}
                    />
                    <TextInputField
                        label="Name"
                        name="name"
                        placeholder="Barack Obama"
                        height={40}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        isInvalid={errors.name && true}
                        validationMessage={errors.name}
                    />
                    <TextInputField
                        label="Location"
                        name="location"
                        placeholder="New York, New York"
                        height={40}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.location}
                        isInvalid={errors.location && true}
                        validationMessage={errors.location}
                    />
                    <FormField label="Description">
                      <Textarea label="Description" name="description" placeholder="" />
                      <ErrorMessage name="description" component="div" />
                    </FormField>
                    <Button type="submit" marginRight={16} appearance="primary" height={56} disabled={isSubmitting}>
                      Create Pool
                    </Button>
                  </form>}
              </Formik>
            </Pane>
          </Pane>;
    }
}

export default Login;
