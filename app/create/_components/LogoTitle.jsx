"use client"

import React from 'react';
import HeadingDescription from './HeadingDescription';
import Lookup from '../../_data/Lookup';

function LogoTitle({onHandleInputChange}) {

    return (
        <div className='my-6'>
            <HeadingDescription
                title={Lookup?.logoTitle}
                description={Lookup.logoDescription}
            />

            <input type="text" placeholder='Enter your Logo name...'
                className='p-4 border rounded-lg mt-5 w-full'
                // value={title}
                onChange={(e) => onHandleInputChange(e.target.value)}
            />
        </div>
    )
}

export default LogoTitle