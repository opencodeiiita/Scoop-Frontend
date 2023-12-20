// ScoopForm.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import JoditEditor from 'jodit-react';
import "./ScoopForm.css"

const ScoopForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      headline: '',
      location: '',
      content: '', // Assuming you have a text editor for content
    },
    validationSchema: Yup.object({
      headline: Yup.string().required('Headline is required'),
      location: Yup.string().required('Location is required'),
      content: Yup.string().required('Content is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      onSubmit(values);
      resetForm(); 
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} id="container">
      <div>
        <label htmlFor="headline">Headline</label>
        <input
          type="text"
          id="headline"
          name="headline"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.headline}
        />
        {formik.touched.headline && formik.errors.headline ? (
          <div>{formik.errors.headline}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.location}
        />
        {formik.touched.location && formik.errors.location ? (
          <div>{formik.errors.location}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="content">Content</label>
        <JoditEditor
          id="content"
          name="content"
          value={formik.values.content}
          onChange={(value) => formik.setFieldValue('content', value)}
          onBlur={formik.handleBlur}
        />
        {formik.touched.content && formik.errors.content ? (
          <div>{formik.errors.content}</div>
        ) : null}
      </div>

      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ScoopForm;
