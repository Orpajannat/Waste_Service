import React from 'react'
import { Recycle } from 'lucide-react';

export default function RubbishRemoval () {
    const List=[
        {title: "House Rubbish Clearance"},
        {title: "White Goods Appliances (inc. fridges/freezers)"},
        {title: "Builders Waste & Rubble Removal"},
        {title: "Home Improvement Waste"},
        {title: "Plumbers Waste"},
        {title: "Garden Clearance (inc. sheds & garages)"},
        {title: "Old Furniture (inc. sofas & cabinets)"},
        {title: "Office Waste Clearance"},
        {title: "General House Junk Removal"},
    ]
  return (
    <div className='container mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14'>
        <div className='flex w-full max-w-7xl flex-col items-start justify-start gap-5'>
            <h1 className='text-2xl font-bold leading-tight text-black/80 sm:text-3xl'>Chingford Rubbish Removal</h1>
            <div className='grid w-full grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-5'>
                {List.map((list, index)=>(
                    <div
                    key={index}
                    className='flex min-w-0 flex-row items-start gap-2 sm:gap-3'>
                        <Recycle className='mt-0.5 size-5 shrink-0 text-[#1A68A3] sm:size-6' />
                        <p className='min-w-0 text-base leading-snug text-black/60 sm:text-lg'>{list.title}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
