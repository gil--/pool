import React, { Component } from 'react';
import { Button, FormField, TextInputField, Textarea, Pane } from 'evergreen-ui';
import { Formik } from 'formik';
import * as Yup from 'yup';

const FormSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is Required'),
    name: Yup.string()
        .required('Name is Required'),
    location: Yup.string()
        .required('Location is Required'),
    description: Yup.string()
        .required('Description is Required'),
})

class Login extends Component {
    render() {
        return <Pane margin={20} clearfix display="flex" alignItems="center">
            <Pane border width={'50%'} padding={20}>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={FormSchema}
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
                        <Textarea
                            label="Description"
                            name="description"
                            placeholder=""
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}
                            isInvalid={errors.description && true}
                            validationMessage={errors.description}
                        />
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
