import React, { useState } from 'react';
import './First.css'
import { useFormik } from 'formik';
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IoIosMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
const Signin = () => {
  const [isVisible, setvisible] = useState(true)

  const navigate = useNavigate()
    
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().email("must be a valid email").required("email can not be empty"),
      password: yup.string().required("password can not be empty"),
    }),
    onSubmit: (value) => {
      console.log(value);
      alert("hello")
    }
  })

  const togglePasswordVisibility = () => {
    setvisible(!isVisible);
    // alert("hello")
  };

  return (
    <>
      <div className='bg-light shadow-lg p-3 py-3 position-fixed top-0 w-100 navr'>
        <h3>Green(logo)</h3>
      </div>
      <div className='vons pb-5 '>
        <div className='hola shadow-lg rounded-2'>
          <h2 className='text-center doe'>Welcome Back</h2>
          <form action="" onSubmit={formik.handleSubmit}>

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
              <label htmlFor="email" className="form__label d-flex align-items-center gap-1"><IoIosMail className='mt-1'/> Your Email</label>
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
              <label htmlFor="Password"className="form__label d-flex align-items-center gap-1"> <FaLock className='mt-1'/>Password</label>
            </div>
            <div className='sigg my-2'>
              <b> <Link to="#"><a href="">Forgot Password?</a></Link></b>
            </div>
          

            <div className='d-flex justify-content-center align-items-center'>
              <button className="button my-2 mt-4 w-100" type='button'>
                Sign in
                <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
                  <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
                </svg>
              </button>
            </div>

            <div className='sigg my-2'>
              <b>Are you a new user? <Link to="/signup"><a href="">Create account</a></Link></b>
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
               sign in with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
