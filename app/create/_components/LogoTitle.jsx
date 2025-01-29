"use client"

import React, { useState } from 'react';
import HeadingDescription from './HeadingDescription';
import Lookup from '../../_data/Lookup';
import { useSearchParams } from 'next/navigation';

function LogoTitle({onHandleInputChange}) {
    const params = useSearchParams();
    const [title , setTitle] = useState(params?.get('title') ?? '');

    return (
        <div className='my-6'>
            <HeadingDescription
                title={Lookup?.logoTitle}
                description={Lookup.logoDescription}
            />

            <input type="text" placeholder='Enter your Logo name...'
                className='p-4 border rounded-lg mt-5 w-full'
                defaultValue={title}
                onChange={(e) => onHandleInputChange(e.target.value)}
            />
        </div>
    )
}

export default LogoTitle