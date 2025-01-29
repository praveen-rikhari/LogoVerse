import React, { useState } from 'react';
import HeadingDescription from './HeadingDescription';
import Lookup from '@/app/_data/Lookup';
import Design from '@/app/_data/Design';
import Image from 'next/image';

function LogoDesigns({ onHandleInputChange , formData}) {
  const [selectedDesign, setSelectedDesign] = useState(formData?.design?.title);

  return (
    <div className='my-10'>
      <HeadingDescription
        title={Lookup.logoDesignTitle}
        description={Lookup.logoDesignDesc}
      />

      <div className='grid grid-cols-2 md:grid-cols-3 gap-10 mt-5'>
        {
          Design.map((design, index) => (
            <div key={index}
              onClick={() => {
                setSelectedDesign(design.title)
                onHandleInputChange(design)
              }}
              className={`p-1 hover:border-2 border-primary rounded-xl ${selectedDesign == design.title && 'border-2 rounded-xl border-primary'}`}
            >
              <Image
                src={design.image}
                alt={design.title}
                width={300}
                height={200}
                className='w-full rounded-xl'
              />

              <h2 className='text-center mt-3 font-medium text-lg text-[#023047]'>
                {design.title}
              </h2>
            </div>
          ))
        }
      </div>
    </div >
  )
}

export default LogoDesigns