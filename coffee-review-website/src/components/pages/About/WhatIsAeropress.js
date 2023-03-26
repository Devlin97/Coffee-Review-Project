import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'

const WhatIsAeropress = () => {
  return (
    <div className='about-holder'> 
        <Stack>
            <h1>Aeropress</h1>
            <h3 className='about-subheading'>What is it?</h3>
            <p>Aeropress is one of the most unique and fun ways you can make coffee. It is technically an immersion method but it's distinctive enough to warrant its own catregory.</p>
            <p>The aeropress is not only a brew method, but a brewer itself. It brews coffee much the same as immersion, except to seperate the coffee from the grounds you plunge the coffee through the grounds. This is quick and very fun to do.</p>
            <h3 className='about-subheading'>What does an aeropress brew consist of?</h3>
            <p>Aeropress is almost as simple as immersion with one added variable. The variables for an aeropress brew are: </p>
            <ul>
              <li>Coffee Weight</li>
              <li>Water Weight</li>
              <li>Grinder / Grind Size</li>
              <li>Time</li>
              <li>Standard or Inverted</li>
            </ul>
            <p>Coffee weight and water weight tend to be the most important of variables as these determine the overall strength of your cup. Lower ratios will be stronger while higher ratios will be weaker. The standard most common ratio you will see for aeropress is usually about 1/16. This means for every 1 gram of coffee, you will use 16 grams of water. For example, if you are using 15 grams of coffee, you would use around 240 grams of water. Try the<> </> 
              <Link to='/ratio' style={{ textDecoration: 'underline', color: '#CBCCCD' }}>
                 brew ratio calculator
              </Link>
              <> </>to find what ratios you could use! But don't be afraid to try higher or lower ratios depending on your taste!</p>
            <p>Grind size is the next most important variable as this will determine the overall extraction and flavour of your brew. If the grind is too fine, your coffee may become over extracted and taste astringent or bitter while grinding too coarse could lead to underextraction and taste relatively weak and sour. Immersion brews tend to err on the coarse to very coarse side of grind size.</p>
            <p>Lastly, you have the time you need to wait until you plunge your coffee. This is what stops the brewing process and prepares it to be drank. This is the most important variable in aeropress brews and is what needs to be fine-tuned. If it brews for too long it could over extract the coffee, while too short could under extract it. Since the plunging process can take around 20-30 seconds this is usually accounted for in the total brew time.</p>
            <p>The aeropress has two different orientations with which it can brew coffee. The first orientation is the standard method. For this the aeropress sits directly overtop your mug/carafe and sits like this while you're waiting to plunge your coffee. This is the most common way, but since the bottom of the aeropress is open so the coffee can be plunged, some coffee will leak out during the brew process. The inverted method seeks to cure this. For the inverted method the aeropress has the plunger inserted into it and is sat upside town on the countertop. This allows for no coffee to be spilled during the brew process but you will have to flip the aeropress to plunge the coffee. Even though you should be fine, some spills are known to have occured!</p>
        </Stack>
    </div> 
  )
}

export default WhatIsAeropress