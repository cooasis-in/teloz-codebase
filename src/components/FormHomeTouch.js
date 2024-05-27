import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function FormHomeTouch() {

  return (
    <>
      <div className="bg-[#FFFFFF] border-t-[1px] border-solid border-[#0000001A]">
        <div className="container mx-auto py-16">
          <div className="grid grid-cols-2 gap-6">
            <div className="left-col">
              <h3 className="text-[40px] leading-[40.8px] font-normal text-[#000000] max-w-[493px]">Let's graaab a cup of coffee ?</h3>
              <p className="text-[20px] leading-[31px] font-light mt-6 text-[#000000] max-w-[392px]">Let's have a coffee together and discuss how we may help you ?</p>
            </div>
            <div className="right-col">
              <Formik
                initialValues={{ firstName: '', lastName: '', email: '' }}
                validationSchema={Yup.object({
                  firstName: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
                  lastName: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
                  email: Yup.string().email('Invalid email address').required('Required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              >
                <Form>
                  <label htmlFor="firstName">First Name</label>
                  <Field name="firstName" type="text" />
                  <ErrorMessage name="firstName" />

                  <label htmlFor="lastName">Last Name</label>
                  <Field name="lastName" type="text" />
                  <ErrorMessage name="lastName" />

                  <label htmlFor="email">Email Address</label>
                  <Field name="email" type="email" />
                  <ErrorMessage name="email" />

                  <button type="submit">Submit</button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormHomeTouch;