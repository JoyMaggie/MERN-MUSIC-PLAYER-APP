import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import React, { useState } from 'react'
import { FaSpotify } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { HiInformationCircle } from "react-icons/hi";
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const[formData, setFormData] = useState({})
  const[errorMessage, setErrorMessage] = useState(null)
  const[loading,setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e)=>{
    const{value, id} = e.target
    setFormData({...formData, [id]:value})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()

    if(!formData.username || !formData.email|| !formData.password){
      return setErrorMessage("Please fill out all fields!!")
    }

    try {
      setLoading(true)
      setErrorMessage(null)
      const res = await fetch('/api/auth/signup',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(formData)
      })
      const data = await res.json()

      if(data.success === false){
        return setErrorMessage(data.message)
      }
      setLoading(false)
      if(res.ok){
        navigate('/')
      }
    } catch (error) {
      setErrorMessage(error.message)
      setLoading(false)
    }
  }
  
  return (
    <div className='min-h-screen mt-12'>
      <div className='mx-auto max-w-sm flex flex-col p-5'>
        <div className='flex flex-col items-center'>
          <FaSpotify className='w-14 h-14'/>
          <h1 className='text-2xl font-serif font-semibold'>Sign up to start listening</h1>
        </div>

        <form onSubmit={handleSubmit} className='flex flex-col gap-3 mt-7'>
          <Label value='Username'/>
          <TextInput
            id='username'
            type='text'
            placeholder='username'
            onChange={handleChange}/>

          <Label value='Email Address'/>
          <TextInput
            id='email'
            type='email'
            placeholder='name@smolify.com'
            onChange={handleChange}/>

          <Label value='Password'/>
          <TextInput
            id='password'
            type='password'
            placeholder='xxxxxxxxxxxxx'
            onChange={handleChange}/>
            <Button 
              type='submit' gradientDuoTone="redToYellow"  
              pill
              disabled={loading}>
                {loading ? 
                  (<>
                    <Spinner size='sm'/>
                    <span>Loading...</span>
                    </>) : "Sign Up"}
            </Button>
        </form>

        <div className='flex items-center justify-center my-1'>
          <span>or</span>
        </div>

        <div className='flex flex-col gap-2'>
            <Button 
              className='text-lg' 
              pill outline gradientDuoTone="redToYellow">
              <FcGoogle className='w-6 h-6 mr-6 '/>
              Sign up with Google
            </Button>
        </div>

        <div className='mt-2 text-center'>
          <span>Already have an account?</span>
          <Link to="/login" className='underline'>Log in here</Link>
        </div>

        {errorMessage &&
          <Alert className='mt-4' color='failure' icon={HiInformationCircle}>{errorMessage}</Alert>
        }
      </div>
    </div>
  )
}
