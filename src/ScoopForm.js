// ScoopForm.js

import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import TextEditor from './TextEditor'; 

const ScoopForm = () => {
  const initialValues = {
    headline: '',
    location: '',
    content: '',
  };

  const validationSchema = Yup.object().shape({
    headline: Yup.string().required('Headline is required'),
    location: Yup.string().required('Location is required'),
    content: Yup.string().required('Content is required'),
  });

  const handleSubmit = (values) => {
    // Handle form submission
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="headline">Headline:</label>
        <Field type="text" id="headline" name="headline" />

        <label htmlFor="location">Location:</label>
        <Field type="text" id="location" name="location" />

        <TextEditor name="content" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default ScoopForm;
