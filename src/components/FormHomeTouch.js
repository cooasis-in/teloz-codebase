'use client'
import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "./Button";

function FormHomeTouch() {
  const [desks, setDesks] = useState(0);

  return (
    <div className="bg-[#FFFFFF] border-t-[1px] border-solid border-[#0000001A]">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="left-col">
            <h3 className="text-2xl lg:text-4xl leading-[40.8px] font-normal text-[#000000] max-w-md lg:max-w-none">
              Let's grab a cup of coffee ?
            </h3>
            <p className="text-lg lg:text-xl leading-[31px] font-light mt-6 text-[#000000] max-w-md lg:max-w-xl">
              Let's have a coffee together and discuss how we may help you ?
            </p>
          </div>
          <div className="right-col">
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                companyName: "",
                email: "",
                phoneNumber: "",
                workspaceType: "",
              }}
              validationSchema={Yup.object({
                firstName: Yup.string()
                  .max(15, "Must be 15 characters or less")
                  .required("Required"),
                lastName: Yup.string()
                  .max(20, "Must be 20 characters or less")
                  .required("Required"),
                companyName: Yup.string().required("Required"),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Required"),
                phoneNumber: Yup.string().required("Required"),
                workspaceType: Yup.string().required("Required"),
              })}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                  alert(JSON.stringify({ ...values, desks }, null, 2));
                  setSubmitting(false);
                  resetForm();
                }, 400);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Field
                        name="firstName"
                        type="text"
                        placeholder="First Name *"
                        className="input mt-1 block w-full border border-gray-300 shadow-sm py-3 px-3 focus:ring-black focus:border-black"
                      />
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div>
                      <Field
                        name="lastName"
                        type="text"
                        placeholder="Last Name *"
                        className="input mt-1 block w-full border border-gray-300 shadow-sm py-3 px-3 focus:ring-black focus:border-black"
                      />
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Field
                        name="companyName"
                        type="text"
                        placeholder="Company Name *"
                        className="input mt-1 block w-full border border-gray-300 shadow-sm py-3 px-3 focus:ring-black focus:border-black"
                      />
                      <ErrorMessage
                        name="companyName"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div>
                      <Field
                        name="email"
                        type="email"
                        placeholder="Company email address *"
                        className="input mt-1 block w-full border border-gray-300 shadow-sm py-3 px-3 focus:ring-black focus:border-black"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Field
                        name="phoneNumber"
                        type="text"
                        placeholder="Phone number *"
                        className="input mt-1 block w-full border border-gray-300 shadow-sm py-3 px-3 focus:ring-black focus:border-black"
                      />
                      <ErrorMessage
                        name="phoneNumber"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div>
                      <Field
                        name="workspaceType"
                        type="text"
                        placeholder="Workspace type"
                        className="input mt-1 block w-full border border-gray-300 shadow-sm py-3 px-3 focus:ring-black focus:border-black"
                      />
                      <ErrorMessage
                        name="workspaceType"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>
                  <div className="flex items-center mb-4 border border-gray-300 rounded-lg">
                    <label
                      htmlFor="desks"
                      className="block text-sm font-medium text-gray-700 p-3"
                    >
                      Desks Required
                    </label>
                    <div className="flex items-center border-l border-gray-300">
                      <button
                        type="button"
                        onClick={() => setDesks(desks > 0 ? desks - 1 : 0)}
                        className="p-2"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        id="desks"
                        name="desks"
                        value={desks}
                        readOnly
                        className="w-16 text-center border-0"
                      />
                      <button
                        type="button"
                        onClick={() => setDesks(desks + 1)}
                        className="p-2"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    By clicking the above button, you agree to our Terms of
                    Service and confirm that you have read and understood our
                    Privacy Policy.
                  </p>
                  {/* <button
                    type="submit"
                    className="mt-4 bg-black text-white py-2 px-4 rounded-lg"
                    disabled={isSubmitting}
                  >
                    Get in touch
                  </button> */}
                  <Button
                size="lg:w-[186px] lg:h-[59px]"
                color=" bg-black"
                border="border"
                hover="none"
                borcolor="border-black"
                type="submit"
                disabled={isSubmitting}
              >
                Get in touch
              </Button>
                 </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormHomeTouch;
