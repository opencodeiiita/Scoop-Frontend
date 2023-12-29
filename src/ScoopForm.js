// ScoopForm.js
import React from 'react';
import { useFormik } from 'formik';
import { useDispatch,useSelector } from 'react-redux';
import { composeScoopAsync } from './redux/scoopSlice';

import * as Yup from 'yup';
import JoditEditor from 'jodit-react';
import "./ScoopForm.css"

const ScoopForm = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      Headline: '',
      Location: '',
      Description: '',
      headimage:'',
      Tags:'',
      
    
    },
    validationSchema: Yup.object({
      Headline: Yup.string().required('Headline is required'),
      Location: Yup.string().required('Location is required'),
      Description: Yup.string().required('Description is required'),
      Tags: Yup.string().required('Tags are required'),
      headimage: Yup.mixed().required('headimage is required'),

    
    }),
    onSubmit: async (values, { resetForm }) => {

      try{
           
       dispatch(composeScoopAsync(values));
       

      }catch(error){
           console.log(error);
      }
      
      resetForm(); 
    },
  });


 
  return (
    <form onSubmit={formik.handleSubmit} id="container">
      <div>
        <label htmlFor="Headline">Headline</label>
        <input
          type="text"
          id="Headline"
          name="Headline"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.Headline}
        />
        {formik.touched.Headline && formik.errors.Headline ? (
          <div>{formik.errors.Headline}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="Location">Location</label>
        <input
          type="text"
          id="Location"
          name="Location"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.Location}
        />
        {formik.touched.Location && formik.errors.Location ? (
          <div>{formik.errors.Location}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="Description">Description</label>
        <JoditEditor
          id="Description"
          name="Description"
          value={formik.values.Description}
          onChange={(value) => formik.setFieldValue('Description', value)}
          onBlur={formik.handleBlur}
        />
        {formik.touched.Description && formik.errors.Description ? (
          <div>{formik.errors.Description}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="Tags">Tags</label>
        <input
          type="text"
          id="Tags"
          name="Tags"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.Tags}
        />
        {formik.touched.Tags && formik.errors.Tags ? (
          <div>{formik.errors.Tags}</div>
        ) : null}
      </div>
      <div className='w-fit'> 
        <label htmlFor="headimage">Header Image</label>
        <input
          type="file"
          id="headimage"
          name="headimage"
          accept="image/*"
          onChange={(e) => {
            formik.setFieldValue('headimage', e.target.files[0]);
          }}      
        />
        {formik.touched.headimage && formik.errors.headimage ? (
          <div>{formik.errors.headimage}</div>
        ) : null}
      </div>

      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ScoopForm;
