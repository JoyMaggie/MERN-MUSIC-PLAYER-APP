import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react'
import { FaSpotify } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className='min-h-screen mt-12'>
      <div className='mx-auto max-w-sm flex flex-col p-5'>
        <div className='flex flex-col items-center'>
          <FaSpotify className='w-14 h-14'/>
          <h1 className='text-2xl font-serif font-semibold'>Sign up to start listening</h1>
        </div>

        <form className='flex flex-col gap-2 mt-7'>
          <Label value='Email Address
          '/>
          <TextInput
            id='email'
            type='email'
            placeholder='name@smolify.com'
            required/>
            <Button type='submit' gradientDuoTone="redToYellow"  pill>Next </Button>
        </form>

        <div className='flex items-center justify-center my-3'>
          <span>or</span>
        </div>

        <div className='flex flex-col gap-2'>
            <Button 
              className='text-lg' 
              pill outline gradientDuoTone="redToYellow">
              <FcGoogle className='w-6 h-6 mr-6 '/>
              Sign up with Google
            </Button>
          
            <Button 
              className='text-lg' 
              pill 
              outline gradientDuoTone="redToYellow">
              <FaFacebook className='w-6 h-6 mr-6'/>Sign up with Facebook
            </Button>

            <Button 
              className='text-lg' 
              pill 
              outline gradientDuoTone="redToYellow">
              <FaApple className='w-6 h-6 mr-6'/>Sign up with Apple
            </Button>
        </div>

        <div className='mt-2 text-center'>
          <span>Already have an account?</span>
          <Link to="/login" className='underline'>Log in here</Link>
        </div>
      </div>
    </div>
  )
}
