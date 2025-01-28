import React from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'

function LogoDesc({onHandleInputChange}) {
  return (
    <div className='my-10'>
      <HeadingDescription
        title={Lookup.logoDescTitle}
        description={Lookup.logoDescDesc}
      />

      <input type="text" placeholder='Enter logo description...'
        className='p-4 border rounded-lg mt-5 w-full'
        onChange={(e) => onHandleInputChange(e.target.value)}
      />
    </div>
  )
}

export default LogoDesc;