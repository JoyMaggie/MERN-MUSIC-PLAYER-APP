import { Alert, Button, Label, Spinner, TextInput, ToggleSwitch } from 'flowbite-react';
import React, { useState } from 'react'
import { FaSpotify } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { HiInformationCircle, HiOutlineMail } from "react-icons/hi";
import { TbPasswordUser } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom';
import { signInFailure, signInStart, signInSuccess } from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Login() {
  const[formData, setFormData] = useState({})
  const {loading, error:errorMessage} = useSelector(state => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChange = (e)=>{
    const{value, id} = e.target
    setFormData({...formData, [id]:value})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()

    if(!formData.email || !formData.password){
      return dispatch(signInFailure("Please fill out all fields!!"))
    }

    try {
      dispatch(signInStart())
      const res = await fetch('/api/auth/signin',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(formData)
      })
      const data = await res.json()

      if(data.success === false){
        dispatch(signInFailure(data.message))
      }
      
      if(res.ok){
        dispatch(signInSuccess(data))
        navigate('/')
      }
    } catch (error) {
      dispatch(signInFailure(error.message))
    }
  }
  
  return (
    <div className='min-h-screen mt-12'>
      <div className='mx-auto max-w-sm flex flex-col p-5'>
        <div className='flex flex-col items-center'>
          <FaSpotify className='w-14 h-14'/>
          <h1 className='text-2xl font-serif font-semibold'>Log in to start listening</h1>
        </div>

        <form onSubmit={handleSubmit} className='flex flex-col gap-3 mt-7'>
          <Label value='Email Address'/>
          <TextInput
            id='email'
            type='email'
            placeholder='name@smolify.com'
            onChange={handleChange}
            icon={HiOutlineMail}/>

          <Label value='Password'/>
          <TextInput
            id='password'
            type='password'
            placeholder='xxxxxxxxxxxxx'
            onChange={handleChange}
            icon={TbPasswordUser}/>
            <ToggleSwitch checked label='Remember me' />
            <Button 
              type='submit' gradientDuoTone="redToYellow"  
              pill
              disabled={loading}>
                {loading ? 
                  (<>
                    <Spinner size='sm'/>
                    <span>Loading...</span>
                    </>) : "Log in"}
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
              Continue with Google
            </Button>
        </div>

        <div className='mt-2 text-center'>
          <span>Don't have an account?</span>
          <Link to="/signup" className='underline'>Sign up for Smolify</Link>
        </div>

        {errorMessage &&
          <Alert className='mt-4' color='failure' icon={HiInformationCircle}>{errorMessage}</Alert>
        }
      </div>
    </div>
  )
}

