import React from 'react'
import Hero from './Hero'
import HowItWorks from './HowItWorks'
import Features from './Features'
import WhoItsFor from './WhoItsFor'
import FAQ from './FAQ'
import CTA from './CTA'
// import OpenAICostCalculator from './OpenAICostCalculator'

const Landingpage = ()=>{

    return(
<div>
        <Hero/>
        <HowItWorks />
<Features />
<WhoItsFor />
<FAQ />
<CTA />
{/* <OpenAICostCalculator/> */}
</div>
    )

}

export default Landingpage