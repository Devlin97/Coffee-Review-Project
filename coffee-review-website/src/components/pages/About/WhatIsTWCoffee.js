import React from 'react'
import { Stack } from '@mui/material'

const WhatIsTWCoffee = () => {
  return (
    <div className='about-holder'> 
        <Stack>
            <h1>Third Wave Coffee</h1>
            <h3 className='about-subheading'>What is it?</h3>
            <p>Third wave coffee is a subculture within the coffee community which looks to maximise the flavour as much as possible. People involved in the subculture use multiple different brewing devices and brewing methods to try and acheive this!</p>
            <h3 className='about-subheading'>Coffee Origin</h3>
            <p>One of the most important parts of this community is the focus on beans and their origin. Most mass-produced coffee which is found in instant coffee can be hard to trace the origin of. With third wave coffee the origin is one of the most important parts of the coffee. Coffee purchased in this community is usually done thorugh small roasters who can pinpoint the exact farm from which the beans were grown! This allows for consumers to experiment with coffee produced in different countries to see the different flavours and notes each countries coffee contains.</p>
            <h3 className='about-subheading'>Roasting</h3>
            <p>When beans are originally cultiviated on a farm they they are known as 'green coffee beans' and would not taste very good at all to drink. Roasters buy these beans to roast them and make them drinkable! Much in the same where lots of mass-produced coffee beans are old and unfresh, they are also roasted very dark to the point of almost being burnt. This makes the coffee bitter and can mask the flavour of older beans.</p>
            <p>For roasters who are focused on the third wave coffee community, they aim to maximise flavour by using a lighter roast and increasing freshness by roasting beans as close to the day they sell them as possible. If you order a bag of coffee from a local roaster it will usually tell you the exact date it was roasted on! Coffee will usually taste best within 4 days to a month of it being roasted, but of course you can enjoy it after this also, just don't expect it to taste as good!</p>
            <h3 className='about-subheading'>Grinding</h3>
            <p>One of the most important parts of third wave coffee is grinding your own coffee at home. Pre-ground coffee starts losing its aroma and freshness rapidly once it has been ground. Due to this, grinding your coffee right before you brew it will optimise the flavour of your brewed coffee.</p>
        </Stack>
    </div> 
  )
}

export default WhatIsTWCoffee