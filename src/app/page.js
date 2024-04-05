import React from 'react'
import Homepage from '../components/homepage/Homepage'
import Get from '@/components/gettoknow/Get'
import Choose from '@/components/choose/Choose'
import Experiments from '@/components/experiments/Experiments'
import Floral from '@/components/floral/Floral'
import Footer from '@/components/footer/Footer'
import Works from '@/components/works/Works'
const page = () => {
  return (
    <div>

       <Homepage/> 
      <Get/> 
      <Choose/> 
      <Experiments/>
      <Floral/> 
      <Works/>
    <Footer/>
    
    
    </div>
   
  )
}

export default page