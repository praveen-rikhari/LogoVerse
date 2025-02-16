"use client"
import { Button } from '@/components/ui/button';
import { SignInButton, UserButton, useUser } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

function Header() {
  const { user } = useUser();

  return (
    <div className='w-full shadow-sm bg-white'>
      <div className='max-w-screen-xl mx-auto px-5 sm:px-10 lg:px-20 xl:px-32 py-4 flex flex-wrap justify-between items-center'>

        <Link href={'/'}>
          <div className='flex items-center space-x-2'>
            <Image src={'/logo.svg'} alt='logo' width={50} height={30} className="w-10 h-auto sm:w-12" />
            <span className='font-extrabold text-lg sm:text-xl md:text-2xl text-[#023047]'>LogoVerse</span>
          </div>
        </Link>

        <div className='flex gap-3 items-center mt-2 md:mt-0'>
          {
            user ? (
              <>
                <Link href={'/dashboard'}>
                  <Button variant="outline" className="text-sm sm:text-base px-3 sm:px-4">
                    Dashboard
                  </Button>
                </Link>
                <UserButton />
              </>
            ) : (
              <SignInButton>
                <Button className='font-semibold text-sm sm:text-base px-3 sm:px-4'>
                  Get Started
                </Button>
              </SignInButton>
            )
          }
        </div>

      </div>
    </div>
  );
}

export default Header;
