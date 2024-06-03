import React from 'react'
import HeroSection from './HeroSection'
import HostEventCard from '../reusableComponents/HostEventCard'
import FullyEquipedSpaces from './FullyEquipedSpaces'
import EventHostSteps from './EventHostSteps'
import FormReachOut from '../reusableComponents/FormReachOut'

const BookNowMaster = () => {
  return (
    <div>
        <HeroSection/>
        <HostEventCard/>
        <div className='bg-white'>
        <FullyEquipedSpaces/>
        <EventHostSteps/>
        <FormReachOut/>
        </div>
    </div>
  )
}

export default BookNowMaster