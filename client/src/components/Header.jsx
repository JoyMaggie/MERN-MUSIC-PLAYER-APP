import React from 'react'
import {Button, Navbar} from 'flowbite-react'
import { SlArrowLeft, SlArrowRight,} from "react-icons/sl";
import { FaSpotify } from "react-icons/fa6";
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <Navbar className='border-b-2 py-6'>
      <div className='flex gap-3'>
        <Button pill color="gray">
          <SlArrowLeft/>
        </Button>
        <Button pill color="gray">
          <SlArrowRight/>
        </Button>
      </div>

      <div className='flex gap-3 items-center justify-center'>
        <FaSpotify className='w-11 h-11'/>
        <h1 className='text-2xl font-serif font-semibold'>SMOLIFY</h1>
      </div>

      <div className='flex gap-4'>
        <Link to="/signup">
         <Button outline gradientDuoTone="cyanToBlue" pill>Sign Up</Button>
        </Link>
        <Link to="/login">
         <Button outline gradientDuoTone="cyanToBlue" pill>Log In</Button>
        </Link>
      </div>
    </Navbar>
  )
}
