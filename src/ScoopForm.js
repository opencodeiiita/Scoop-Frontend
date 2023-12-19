// ScoopForm.js

import React from 'react';
import {useState} from "react";
import {useRef} from "react";
import { useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './ScoopForm.css'; // Import the CSS file
import JoditEditor from 'jodit-react';

const ScoopForm = () => {    

const editor=useRef(null)
const [content,setcontent]=useState('');

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
    <div className="scoop-form-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label className="scoop-form-label" htmlFor="headline">
            Headline:
          </label>
          <Field className="scoop-form-input1" type="text" id="headline" name="headline" />
          

          <label className="scoop-form-label" htmlFor="location">
            Location:
          </label>
            
          <Field className="scoop-form-input1" type="text" id="headline" name="headline" />
             
          <label className="scoop-form-label" htmlFor="headline">
            News Content:
          </label>
          <JoditEditor
          ref={editor}
          value={content}
          onchange={newContent=>setcontent(newContent)}>            
          </JoditEditor>         
          <br></br>
          <button className="scoop-form-button" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ScoopForm;
