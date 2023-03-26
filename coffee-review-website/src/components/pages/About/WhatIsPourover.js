import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'

const WhatIsPourover = () => {
  return (
    <div className='about-holder'> 
        <Stack>
            <h1>Pourover</h1>
            <h3 className='about-subheading'>What is it?</h3>
            <p>Pourover is one of the most popular ways to brew specialty coffee. Most content you'll see when diving into the third wave coffee world will revolve around pourovers. Not only is it fun, it's probably the best way to pull the maximum amount of flavour out of your coffee.</p>
            <p>Pourover brews coffee by using gravity. As you pour the boiling water over the coffee, gravity pulls it through the coffee bed and brewed coffee comes out the other side of the brewer. Pourovers are very variable dependent however meaning that consistency is key when it comes to making the best cup possible.</p>
            <h3 className='about-subheading'>What does a pourover consist of?</h3>
            <p>Pourovers consist of a variety of variables which any slight change to will be noticable in the cup it produces. These variables are: </p>
            <ul>
              <li>Coffee Weight</li>
              <li>Water Weight</li>
              <li>Grinder / Grind Size</li>
              <li>Bloom Weight</li>
              <li>Bloom Time</li>
              <li>Series of Pours</li>
            </ul>
            <p>Coffee weight and water weight tend to be the most important of variables as these determine the overall strength of your cup. Lower ratios will be stronger while higher ratios will be weaker. The standard most common ratio you will see is usually about 1/16. This means for every 1 gram of coffee, you will use 16 grams of water. For example, if you are using 15 grams of coffee, you would use around 240 grams of water. Try the<> </> 
              <Link to='/ratio' style={{ textDecoration: 'underline', color: '#CBCCCD' }}>
                 brew ratio calculator
              </Link>
              <> </>to find what ratios you could use! Don't be afraid to try higher or lower ratios depending on your taste!</p>
            <p>Grind size is the next most important variable as this will determine the overall extraction and flavour of your brew. If the grind is too fine, your coffee may become over extracted and taste astringent or bitter while grinding too coarse could lead to underextraction and taste relatively weak and sour.</p>
            <p>Bloom weight and bloom time are other words for your very first pour. Fresh coffee which has been recently roasted will contain lots of carbon dioxide. When you first pour boiling water over the coffee it will bubble and start to degas. This pour usually sits for a little longer than the others so the coffee has sufficient time to relase the carbon dioxode within it. This is usually around 30 to 40 seconds.</p>
            <p>After your coffee has bloomed, finally you have a series of pours left to do until you reach your desired weight. This could be anything from 1 pour to even shorts bursts of 5 pours! You want to ensure your're slowly pouring over the coffee so all the coffee is getting covered and the brewer isn't creating a pool of water.</p>
        </Stack>
    </div> 
  )
}

export default WhatIsPourover