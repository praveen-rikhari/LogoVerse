"use client"

import React, { useState } from 'react'
import Lookup from '../_data/Lookup'
import { Button } from '@/components/ui/button'
import Link from 'next/link';
import { WandSparkles } from 'lucide-react';

function Hero() {
  const [logoTitle, setLogoTitle] = useState();

  return (
    <div className='flex items-center mt-24 flex-col gap-5'>
      <h2 className='text-primary text-5xl text-center font-bold'>{Lookup.heroHeading}</h2>
      <h2 className='text-4xl text-center font-bold text-[#023047]'>{Lookup.heroSubheading}</h2>
      <p className='text-lg text-center text-gray-500'>{Lookup.heroDesc}</p>

      <div className='flex gap-6 w-full max-w-2xl mt-10'>
        <input
          className='p-3 border rounded-md w-full shadow-md'
          placeholder='Enter your Logo name...'
          type="text"
          onChange={(e) => setLogoTitle(e.target.value)}
        />
        <Link href={'/create?title=' + logoTitle}>
          <Button className='w-md p-6 text-md font-medium'>
            Create <WandSparkles />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Hero