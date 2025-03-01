import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from "@/public/logo.png";
import { ThemeToggle } from './ThemeToggle';
import { Button } from '../ui/button';


const Navbar = () => {
  return (
    <nav className='flex justify-between py-4'>
     <Link href="/" className="flex items-center gap-2">
        <Image src={Logo} alt="Job Marshal Logo" width={40} height={40} />
        <h1 className="text-2xl font-bold">
          Job<span className="text-primary">Marshal</span>
        </h1>
      </Link>
      <div className=' gap-4 flex items-center'>
        <ThemeToggle/>
        <Button className=' bg-green-400'>Login</Button>
      </div>
    </nav>
  )
}

export default Navbar