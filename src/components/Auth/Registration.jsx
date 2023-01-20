import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import Background from "../custom_styling/Background";
import axios from "axios";
import Logo from "../../assets/exceptions/png/E.png";
import { Link } from "react-router-dom";
import { Formik, Field } from "formik";
import { State } from "country-state-city";


function Registration() {
  const states = State.getStatesOfCountry("IN");
  const [loading, setLoading] = useState(false);

  return (
    <Container maxWidth="xl">
      <Background />

      <section className=" ">
        <div className="flex flex-row items-center justify-center px-6  mx-auto md:h-screen lg:py-0">
          <div
            className="block text-neutral-content login-container-part1 reg-container
        bg-white-400  rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10
       shadow-lg rounded-lg
       border-2 border-sky-500 lg:w-6/12"
          >
            <div className="  ">
              <img className="mx-auto w-36  lg:w-48" src={Logo} alt="logo" />
              <h4
                className="text-xl font-semibold text-center  pb-1 text-primary lg:text-3xl"
                style={{ fontFamily: "Orbitron" }}
              >
                EXCEPTIONS - 2023
              </h4>

              <Formik
                initialValues={{
                  email: "",
                  firstName: "",
                  lastName: "",
                  contactNumber: "",
                  password: "",
                  collegeName: "",
                  usn: "",
                  state: "",
                  city: "",
                  zip: "",
                }}
                validate={(values) => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = "Required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  }
                  return errors;
                }}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                  setLoading(true);
                  await axios
                    .post(
                      "https://exceptions-website-backend.vercel.app/auth/register-participant",
                      values
                    )
                    .then(async (data) => {
                      axios
                        .post(
                          "https://exceptions-website-backend.vercel.app/auth/send-confirmation-email",
                          {
                            userId: data.data.userId,
                          }
                        )
                        .then((data) => {
                          setLoading(false);
                          alert(
                            "Thanks for registering !!" +
                              data.data.message +
                              " confirm your mail before trying to login"
                          );
                          resetForm();
                        });
                    })
                    .catch((err) => {
                      alert(
                        "Unknown error occured , please try again after sometime"
                      );
                      setLoading(false);
                      alert("Unknown error occured ! please try after sometime")
                      
                      resetForm();
                    });
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <form onSubmit={handleSubmit}>
                    <p className="mb-4 text-center text-xl font-bold">
                      Lets create an account
                    </p>

                    <div className="lg:flex lg:flex-col items-center justify-center w-full">
                      <div className="mb-4 ">
                        <input
                          type="text"
                          name="firstName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.firstName}
                          placeholder="First name"
                          className="form-control block px-3  lg:w-96 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        />
                      </div>

                      <div className="mb-4">
                        <input
                          type="text"
                          name="lastName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.lastName}
                          placeholder="Last name"
                          className="form-control block lg:w-96 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        />
                      </div>

                      <div className="mb-4">
                        <input
                          type="text"
                          name="contactNumber"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.contactNumber}
                          placeholder="Contact number"
                          className="form-control block lg:w-96 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        />
                      </div>

                      <div className="mb-4">
                        <input
                          type="email"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          placeholder="Email ID"
                          className="form-control block lg:w-96 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        />
                      </div>

                      <div className="mb-4">
                        <input
                          type="text"
                          name="collegeName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.collegeName}
                          placeholder="College Name"
                          className="form-control block lg:w-96 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        />
                      </div>

                      <div className="mb-4">
                        <input
                          type="text"
                          name="usn"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.usn}
                          placeholder="University number"
                          className="form-control block lg:w-96 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        />
                      </div>

                      <div className="mb-4">
                        <input
                          type="text"
                          name="city"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.city}
                          placeholder="City"
                          className="form-control block lg:w-96 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        />
                      </div>
                      <div className="mb-4">
                        <Field
                          name="state"
                          as="select"
                          className="form-control block state-selector lg:w-96 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        >
                          <option value="">Select State</option>
                          {states.map((state) => {
                            return (
                              <option value={state.name} key={state.name}>
                                {state.name}
                              </option>
                            );
                          })}
                        </Field>
                      </div>

                      <div className="mb-4">
                        <input
                          type="text"
                          name="zip"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.zip}
                          placeholder="Pin code"
                          className="form-control block lg:w-96 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        />
                      </div>

                      <div className="mb-4">
                        <input
                          type="password"
                          onChange={handleChange}
                          value={values.password}
                          className="form-control block lg:w-96 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          name="password"
                          placeholder="Password"
                        />
                      </div>

                      <button
                        className={`px-6 py-2.5 text-neutral btn btn-outline btn-warning
              text-neutral font-bold btn-register
             text-sm leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg 
             focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition
              duration-150 ease-in-out w-72  ml-3 ${
                loading ? "loading" : null
              } `}
                        type="submit"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                      >
                        Register
                      </button>
                    </div>
                    <div className="text-center pt-1  pb-1"></div>
                    <div className="">
                      <p className=" font-bold login-link text-center">
                        {" "}
                        Have an account?{" "}
                        <Link to="/login" className="text-warning">
                          Click here
                        </Link>
                      </p>

                      <p className=" font-bold login-link text-center my-3 ">
                        {" "}
                        <Link to="/" className="text-primary underline">
                          Back home{" "}
                        </Link>
                      </p>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Registration;
