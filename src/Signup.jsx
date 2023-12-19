import React, { useState, useEffect } from 'react';
import './First.css'
import Select from 'react-select';
import { useFormik } from 'formik';
import * as yup from 'yup'
import { Link } from 'react-router-dom';
// import { MdErrorOutline } from "react-icons/md";

const Signup = () => {

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  // const [phoneNumber, setPhoneNumber] = useState('');
  const [isVisible, setvisible] = useState(true)
  const [isConVisible, setConvisible] = useState(true)

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      country: "",
      phone: ""
    },
    // validationSchema: yup.object({
    //   firstName: yup.string().required("input your first name"),
    //   lastName: yup.string().required("input your last name"),
    //   email: yup.string().email("must be a valid email").required("email can not be empty"),
    //   password: yup.string().min(7, "password is too short").max(17, "password is too long").required("password can not be empty"),
    //   confirmPassword: yup.string().required("confirm your password"),
    //   country: yup.string().required("select your current location"),
    //   phone: yup.string().min(8, "must be a valid number").required("add your active phone number")
    // }),
     validationSchema : yup.object({
      firstName: yup.string().min(2, "please input your full name").required("input your first name"),
      lastName: yup.string().min(2, "please input your full name").required("input your last name"),
      email: yup.string().email("must be a valid email").required("email can not be empty"),
      password: yup
        .string()
        .min(7, "password is too short")
        .max(17, "password is too long")
        .required("please add a password"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required("please confirm password"),
      phone: yup.string().min(8, "must be a valid number").required("add a phone number"),
    }),
    onSubmit: async (values) => {
      alert("hello"); 
      console.log(values); 
    },
  });




  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          const transformedCountries = data.map(country => ({
            label: country.name?.common || '',
            value: country.cca2 || '',
            code: `+${country.callingCodes?.[0] || 'N/A'}`,
          }));
          transformedCountries.sort((a, b) => a.label.localeCompare(b.label));
          setCountries(transformedCountries);
        } else {
          console.error('Invalid API response structure:', data);
        }
      })
      .catch(error => console.error('Error fetching countries:', error));
  }, []);


  const togglePasswordVisibility = () => {
    setvisible(!isVisible);
    // alert("hello")
  };
  const toggleCPasswordVisibility = () => {
    setConvisible(!isConVisible)
  }

  return (
    <>
      <div className='bg-light shadow-lg p-3 py-3 position-sticky top-0 w-100 navr'>
        <h3>Green(logo)</h3>
      </div>
      <div className='vons'>
        <div className='hola shadow-lg rounded-2'>
          <h2 className='text-center doe'>Create Account</h2>

         <form action="" onSubmit={formik.handleSubmit}>
            <div className='dof1'>
              <div className='dof'>
                <div className="form__group field">
                  <input
                    type="input"
                    className="form__field"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name='firstName'
                    placeholder=""
                    required=""
                  />
                  {formik.touched.firstName ? <p className='text-danger sme'> {formik.errors.firstName}</p> : ""}
                  <label htmlFor="firstName" className="form__label">First Name</label>
                </div>
              </div>
              <div className='dof'>
                <div className="form__group field">
                  <input
                    type="input"
                    className="form__field"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name='lastName'
                    placeholder=""
                    required=""
                  />
                  {formik.touched.lastName ? <p className='text-danger sme'> {formik.errors.lastName}</p> : ""}
                  <label htmlFor="lastName" className="form__label">Last Name</label>
                </div>
              </div>
            </div>
            <div className="form__group field">
              <input
                type="input"
                className="form__field"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name='email'
                placeholder=""
                required=""
              />
              {formik.touched.email ? <p className='text-danger sme'> {formik.errors.email}</p> : ""}
              <label htmlFor="email" className="form__label">Email</label>
            </div>

            <div className="form__group field">
              <div className=' imag'>
                <input
                  type={isVisible ? 'password' : 'text'}
                  className="form__field"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name='password'
                  placeholder="••••••"
                  required=""
                />
                <img src={isVisible ? require('../src/eyeclose.png') : require('../src/eyeopen.png')} alt=''
                  onClick={togglePasswordVisibility} width={30} className='curs' />
              </div>
              {formik.touched.password ? <p className='text-danger sme'> {formik.errors.password}</p> : ""}
              <label htmlFor="Password" className="form__label">Password</label>
            </div>
            <div className="form__group field">
              <div className=' imag'>
                <input
                  type={isConVisible ? 'password' : 'text'}
                  className="form__field"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name='confirmPassword'
                  placeholder="••••••"
                  required=""
                />
                <img src={isConVisible ? require('../src/eyeclose.png') : require('../src/eyeopen.png')} alt=''
                  onClick={toggleCPasswordVisibility} width={30} className='curs' />
              </div>
              {formik.touched.confirmPassword ? <p className='text-danger sme'> {formik.errors.confirmPassword}</p> : ""}
              <label htmlFor="confirmPassword" className="form__label">Confirm Password</label>
            </div>

            <div className='form__group field'>
              <input
                type='number'
                className="form__field"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name='phone'
                placeholder=""
                required=""
              />
              {formik.touched.phone ? <p className='text-danger sme'> {formik.errors.phone}</p> : ""}
              <label htmlFor='phoneNumber' className='form__label'>
                Enter Phone Number
              </label>
            </div>

            <div className="my-3">
              <label htmlFor="gender" className='my-3 gend'>Gender</label>
              <div class="radio-buttons-container">
                <div class="radio-button">
                  <input name="radio-group" id="radio2" class="radio-button__input" type="radio" />
                  <label for="radio2" class="radio-button__label">
                    <span class="radio-button__custom"></span>
                    Male
                  </label>
                </div>
                <div class="radio-button">
                  <input name="radio-group" id="radio1" class="radio-button__input" type="radio" />
                  <label for="radio1" class="radio-button__label">
                    <span class="radio-button__custom"></span>
                    Female
                  </label>
                </div>
                <div class="radio-button">
                  <input name="radio-group" id="radio3" class="radio-button__input" type="radio" />
                  <label for="radio3" class="radio-button__label">
                    <span class="radio-button__custom"></span>
                    Others
                  </label>
                </div>
              </div>
            </div>

            <div className='form__group field'>
              <label htmlFor='country' className='form__label'>
                Country
              </label>
              <Select
                id='country'
                name='country'
                options={countries}
                value={selectedCountry}
                onChange={(selectedOption) => setSelectedCountry(selectedOption)}
                placeholder='Select your country'
                className='mt-4 sele'
              />
            </div>

            <div className='d-flex justify-content-center align-items-center'>
              <button className="button my-2 mt-4 w-100" type="submit">
              Sign Up
              <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                <path clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fillRule="evenodd"></path>
              </svg>
            </button>
            </div>

            <div className='sigg my-2'>
              <b>Already have an account? <Link to="/signin"><a href="">Sign in</a></Link></b>
            </div>
          </form>

          <div className='d-flex align-items-center justify-content-around'>
            <div className='unle'></div>
            <p className='ppo'>Or</p>
            <div className='unle'></div>
          </div>

          <div className='d-flex justify-content-center align-items-center'>
          <button class="button2">
              <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262">
                <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>
                <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
                <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path>
                <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
              </svg>
              Sign Up with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
