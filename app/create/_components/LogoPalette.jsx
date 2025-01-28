
import React, { useState } from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import Colors from '@/app/_data/Colors'

function LogoPalette({ onHandleInputChange }) {
  const [selectedPalette, setSelectedPalette] = useState();

  return (
    <div className='my-10'>
      <HeadingDescription
        title={Lookup.logoColorPaletteTitle}
        description={Lookup.logoColorPaletteDesc}
      />

      <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-5'>
        {
          Colors.map((palette, index) => (
            <div key={index} className={`flex p-1 cursor-pointer ${selectedPalette == palette.name && 'border-2 rounded-lg border-primary'}`}>
              {
                palette.colors.map((color, index) => (
                  <div className="h-24 w-full"
                    style={{ backgroundColor: color }}
                    key={index}
                    onClick={() => {
                      setSelectedPalette(palette.name)
                      onHandleInputChange(palette.name)
                    }}
                  >

                  </div>
                ))
              }
            </div>
          ))
        }
      </div>
    </div >
  )
}

export default LogoPalette