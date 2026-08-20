import React from 'react'
import { Recycle, ArrowUpRight } from 'lucide-react';

export default function RubbishRemoval() {
    const List = [
        { title: "House Rubbish Clearance" },
        { title: "White Goods Appliances (inc. fridges/freezers)" },
        { title: "Builders Waste & Rubble Removal" },
        { title: "Home Improvement Waste" },
        { title: "Plumbers Waste" },
        { title: "Garden Clearance (inc. sheds & garages)" },
        { title: "Old Furniture (inc. sofas & cabinets)" },
        { title: "Office Waste Clearance" },
        { title: "General House Junk Removal" },
    ]

    return (
        <div className="bg-linear-to-b from-[#E9F4FC] via-white to-[#E9F4FC]">

            <div className="container mx-auto flex w-full max-w-7xl flex-col items-start justify-start px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">

                <div className="mb-8">

                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#0497E2]">
                        Our Services
                    </p>

                    <h1 className="text-3xl font-black leading-tight text-[#11224D] sm:text-4xl lg:text-5xl">
                        Chingford Rubbish Removal
                    </h1>

                    <div className="mt-4 h-1 w-14 rounded-full bg-[#0497E2] transition-all duration-500 hover:w-24"></div>

                </div>


                <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">

                    {List.map((list, index) => (

                        <div
                            key={index}
                            className="group relative flex min-h-20 cursor-pointer items-center gap-4 overflow-hidden rounded-2xl border border-[#11224D]/10 bg-white px-4 py-4 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#0497E2]/30 hover:shadow-xl hover:shadow-[#11224D]/10 sm:px-5"
                        >

                            <div className="absolute left-0 top-0 h-full w-1 bg-[#0497E2] transition-all duration-500 group-hover:w-2"></div>


                            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#11224D]/5 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#11224D]">

                                <Recycle
                                    aria-hidden="true"
                                    className="size-6 text-[#11224D] transition-all duration-500 group-hover:rotate-180 group-hover:text-white"
                                />

                            </div>


                            <div className="min-w-0 flex-1">

                                <span className="mb-1 block text-xs font-bold tracking-widest text-[#0497E2]">
                                    SERVICE {String(index + 1).padStart(2, '0')}
                                </span>

                                <p className="text-base font-bold leading-snug text-[#11224D] transition-colors duration-300 group-hover:text-[#0497E2] sm:text-lg">
                                    {list.title}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    )
}