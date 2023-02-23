import React from 'react'
import { Stack } from '@mui/material'

const WhatIsImmersion = () => {
  return (
    <div className='about-holder'> 
        <Stack>
            <h1>Immersion</h1>
            <h3 className='about-subheading'>What is it?</h3>
            <p>Immersion is the easiest and most widly used way of brewing coffee. Most people will have some level of familiarity with this method. If you have ever brewed coffee using a cafetiere / french press then you've made immersion coffee before!</p>
            <p>Instead of letting the water flow through the coffee grounds, immersion coffee brews by letting the coffee grounds and the water sit together. After a certain period of time you strain the coffee grounds from the water and your brewed coffee is ready to be enjoyed.</p>
            <h3 className='about-subheading'>What does an immersion brew consist of?</h3>
            <p>Immersion is probably the simplest and most forgiving ways to brew coffee. The variables and an immersion brew are: </p>
            <ul>
              <li>Coffee Weight</li>
              <li>Water Weight</li>
              <li>Grinder / Grind Size</li>
              <li>Time</li>
            </ul>
            <p>Coffee weight and water weight tend to be the most important of variables as these determine the overall strength of your cup. Lower ratios will be stronger while higher ratios will be weaker. The standard most common ratio you will see is usually about 1/16. This means for every 1 gram of coffee, you will use 16 grams of water. For example, if you are using 15 grams of coffee, you would use around 240 grams of water. But don't be afraid to try higher or lower ratios depending on your taste!</p>
            <p>Grind size is the next most important variable as this will determine the overall extraction and flavour of your brew. If the grind is too fine, your coffee may become over extracted and taste astringent or bitter while grinding too coarse could lead to underextraction and taste relatively weak and sour. Immersion brews tend to err on the coarse to very coarse side of grind size.</p>
            <p>Lastly, you have the time you need to wait until you strain your coffee grounds from the coffee. This is what stops the brewing process and prepares it to be drank. This is the most important variable in immersion brews and is what needs to be fine-tuned. If it brews for too long it could over extract the coffee, while too short could under extract it.</p>
        </Stack>
    </div> 
  )
}

export default WhatIsImmersion