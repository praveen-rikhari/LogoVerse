"use client"
import { Button } from '@/components/ui/button';
import { UserButton, useUser } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react';

function Header() {
  const { user } = useUser();

  return (
    <div className='px-10 lg:px-32 xl:px-48 2xl:px-56 py-4 flex justify-between items-center shadow-sm'>
      <div className='flex items-center space-x-2'>
        <Image src={'/logo.svg'} alt='logo' width={60} height={30} />
        <span className='font-extrabold text-2xl text-[#023047]'>LogoVerse</span>
      </div>

      <div className='flex gap-3 items-center'>
        {
          user ?
            <>
              <Button variant = "outline"> Dashboard</Button>
              <UserButton />
            </> :
            <Button className='font-semibold'>Get Started</Button>

        }
      </div>

    </div>
  );
}

export default Header;
