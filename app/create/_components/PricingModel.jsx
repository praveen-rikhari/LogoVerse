import React from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import Image from 'next/image';
import { Button } from '@/components/ui/button';

function PricingModel() {
  return (
    <div className=''>
      <HeadingDescription
        title={Lookup.logoPricingModelTitle}
        description={Lookup.logoPricingModelDesc}
      />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-5'>
        {
          Lookup.pricingOption.map((pricing, index) => (
            <div className='flex flex-col items-center p-5 border rounded-2xl' key={index}>
              <Image
                src={pricing.icon}
                alt={pricing.title}
                width={60} height={60}
              />

              <h2 className='font-md text:2xl text-[#023047]'>
                {pricing.title}
              </h2>

              <div>
                {
                  pricing.features.map((feature, index) => (
                    <h2 className='text-lg mt-2 text-gray-700' key={feature}>
                      {feature}
                    </h2>
                  ))
                }
              </div>

              <Button className="mt-5">
                {pricing.button}
              </Button>

            </div>
          ))
        }
      </div>

    </div>
  )
}

export default PricingModel;