import { Footer } from 'flowbite-react'
import React from 'react'
import { FaFacebook, FaInstagram, FaSpotify, FaXTwitter } from 'react-icons/fa6'

export default function Footercom() {
  return (
    <Footer container className='border border-t-6'>
      <div className='w-full'>
        <div className='w-full justify-between sm:flex sm:items-center sm:justify-between'>
          <div className='flex justify-center items-center gap-2'>
            <FaSpotify className='w-10 h-10'/>
            <span className='text-2xl uppercase font-serif font-semibold'>Smolify</span>
          </div>
          <Footer.LinkGroup>
            <Footer.Link href='#'>About</Footer.Link>
            <Footer.Link href='#'>Privacy policy</Footer.Link>
            <Footer.Link href='#'>Licencing</Footer.Link>
            <Footer.Link href='#'>Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider/>
        <div className='w-full sm:flex sm:justify-between sm:items-center'>
          <Footer.Copyright href='#' by='Smolify' year={2024}/>
          <div className='flex space-x-6 sm:justify-center'>
            <Footer.Icon href='#' icon={FaInstagram}/>
            <Footer.Icon href='#' icon={FaXTwitter}/>
            <Footer.Icon href='#' icon={FaFacebook}/>
          </div>
        </div>
      </div>
    </Footer>
  )
}
