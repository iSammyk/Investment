import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
const Test = () => {
 const formik = useFormik({
  initialValues:{
    username: "",
    password:"",
  },
  validationSchema:yup.object({
    username:yup .string().required('username cannot be empty'),
    password:yup.string().required('password cannot be empty')
  }),
  onSubmit: async (values) => {
    alert("hello"); 
    console.log(values); 
  },
});
  return (
    <>
     <main>
<form action="" onSubmit={formik.handleSubmit}>

   <input type="text" name='username' onChange={formik.handleChange} onBlur={formik.handleBlur} />
   <p className='text-danger'>{formik.touched.username && formik.errors.username}</p>

   <input type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} name='password' />
   <p className='text-danger'>{formik.touched.password && formik.errors.password}</p>

   <button type='submit'>submit</button>
</form>
     </main>
    </>
  )
}

export default Test