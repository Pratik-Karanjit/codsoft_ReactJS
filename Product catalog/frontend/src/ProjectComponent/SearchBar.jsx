import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


//search bar here
const SearchBar = ({ onSearch }) => {
  const initialValues = {
    query: '',
  };


  //validations
  const validationSchema = Yup.object().shape({
    query: Yup.string().required('Query is required'),
  });

  const handleSubmit = (values) => {
    onSearch(values.query);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className='searchForm'>
          <Field
            type="text"
            name="query"
            placeholder="Search by name"
          />
          <button type="submit">Search</button>
        </Form>
      )}
    </Formik>
  );
};

export default SearchBar;
