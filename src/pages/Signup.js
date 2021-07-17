import React from "react";
import { Container, CustomInput } from "../components";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const Signup = () => {
  return (
    <div className="bg-primary h-full flex">
      <Container>
        <div className="w-full mx-auto sm:w-full md:w-2/3 lg:w-1/2 mt-24">
          <div className="text-center font-bold text-2xl text-white mb-8">
            Sign up
          </div>
          <div className="bg-white rounded p-8">
            <Formik
              initialValues={{
                fullname: "",
                email: "",
                password: "",
              }}
              validationSchema={Yup.object({
                fullname: Yup.string().required("Fullname is required"),
                email: Yup.string()
                  .email("Invalid email")
                  .required("Email is required"),
                password: Yup.string()
                  .min(2, "Too Short!")
                  .max(50, "Too Long!")
                  .required("Password is required"),
              })}
              onSubmit={async (values, { resetForm, setSubmitting }) => {
                console.log(values);
                resetForm();
                setSubmitting(false);
              }}
            >
              {(props) => (
                <Form className="space-y-4">
                  <CustomInput
                    label="Fullname"
                    name="fullname"
                    type="text"
                    placeholder="John Doe"
                    large="true"
                    showerror
                  />
                  <CustomInput
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="johndoe@email.com"
                    large="true"
                    showerror
                  />
                  <CustomInput
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="123abcde"
                    large="true"
                    showerror
                  />
                  <div>
                    <button
                      disabled={props.isSubmitting}
                      type="submit"
                      className="w-full text-center p-4 border border-transparent text-sm font-semibold  bg-primary-darkest text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded"
                    >
                      {props.isSubmitting ? "Loading..." : "Register"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Signup;
