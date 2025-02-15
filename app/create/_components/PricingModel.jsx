"use client"
import React, { useEffect } from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SignInButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';

function PricingModel({ formData }) {

  const { user } = useUser();

  // Saving formData to local storage....
  useEffect(() => {
    if (formData?.title && typeof window != 'undefined') {
      localStorage.setItem('formData', JSON.stringify(formData));
    }
  }, [formData])

  return (
    <div className=''>
      <HeadingDescription
        title={Lookup.logoPricingModelTitle}
        description={Lookup.logoPricingModelDesc}
      />

      <div className="flex justify-center items-center mt-5">
        <div className="w-full max-w-sm">
          {
            Lookup.pricingOption.map((pricing, index) => (
              <div className="flex flex-col items-center p-5 w-full mx-auto" key={index}>
                <Image
                  src={pricing.icon}
                  alt={pricing.title}
                  width={60}
                  height={60}
                />

                <h2 className="font-md text-2xl text-[#023047] mt-3 text-center">
                  {pricing.title}
                </h2>

                <div className="text-center">
                  {
                    pricing.features.map((feature) => (
                      <h2 className="text-lg mt-2 text-gray-700 flex items-center justify-center" key={feature}>
                        {feature}
                      </h2>
                    ))
                  }
                </div>

                {
                  user ?
                    <Link href={'/generate-logo?type=' + pricing.title}>
                      <Button className="mt-5 w-full">
                        {pricing.button}
                      </Button>
                    </Link>
                    :
                    <SignInButton mode='modal' forceRedirectUrl={'/generate-logo?type=' + pricing.title}>
                      <Button className="mt-5 w-full">
                        {pricing.button}
                      </Button>
                    </SignInButton>
                }

              </div>
            ))
          }
        </div>
      </div>




    </div>
  )
}

export default PricingModel;