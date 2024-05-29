import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Button from '../reusableComponents/Button'


const BuiltToSupport = () => {

    const events = [
        { id: 1, date: 'May 24, 2021', title: 'Tech Forum: Evening Networking', image: '/image/honeywell card.png' },
        { id: 2, date: 'May 24, 2021', title: 'Tech Forum: Evening Networking', image: '/image/honeywell card.png' },
        { id: 3, date: 'May 24, 2021', title: 'Tech Forum: Evening Networking', image: '/image/honeywell card.png' },
      
      ]
  return (
    <div className="min-h-screen mt-[100px] bg-white flex flex-col items-center justify-center py-12">
      <Head>
        <title>Tech Forum</title>
        <meta name="description" content="Built to support both your work and wellbeing." />
      </Head>
      <div className="text-center mb-12 px-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Built to support both your work and wellbeing.</h1>
        <p className="text-gray-600 mt-4">Telospaces plays host and venue to many types of events and programming <br/> based on promoting the arts, personal growth, and work-life integration.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-20 px-4">
        {events.map((event) => (
          <div key={event.id} className="max-w-xs mx-auto bg-white border border-gray-300  shadow-lg overflow-hidden">
            <div className="relative h-48">
              <Image src={event.image} layout="fill" objectFit="cover" alt={event.title} />
            </div>
            <div className="p-4">
              <p className="font-semibold mb-2">{event.date}</p>
              <h3 className="text-xl font-bold mb-4">{event.title}</h3>
              <Button
            className="mt-8"    
            color=" bg-white"
            text="black"
            border="border"
            hover="hover:bg-[#FFFCEE] "
          >
            Details & Info
          </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BuiltToSupport