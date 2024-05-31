import React from 'react'
import HostOfSolution from './HostOfSolution'
import CoworkingSpaces from './CoworkingSpaces'
import AccordionSection from '../homeLandingPage/AccordionSection'
import FormHomeTouch from '../homeLandingPage/FormHomeTouch'
import AreUStartup from '../reusableComponents/AreUStartup'

const DesktopMaster = () => {
  return (
    <div>
      <HostOfSolution/>
      <CoworkingSpaces/>
      <AccordionSection />
      <FormHomeTouch />
      <AreUStartup />
    </div>
  )
}

export default DesktopMaster