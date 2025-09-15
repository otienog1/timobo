'use client'

import Image from "next/image"
import { Destination } from "@/lib/types"
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

const ClientDestinations = ({ page }: { page: any }) => {
    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="font-display font-bold text-4xl mb-20 uppercase tracking-wider text-center">
                {page.acf.title}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {page.acf.destinations.map((item: { destination: any }, index: number) => (
                    <div key={index}>
                        {/* Replace this with your DestinationCard component once it's defined */}
                        <h2>{item.destination.name}</h2>
                        <p>{item.destination.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ClientDestinations