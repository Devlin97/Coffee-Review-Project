import React, { useState } from 'react'
import { List, ListItem, ListItemButton, ListSubheader, ListItemText, Collapse, Box } from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import WhatIsPourover from './WhatIsPourover'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import WhatIsImmersion from './WhatIsImmersion'
import WhatIsAeropress from './WhatIsAeropress'

const AboutList = () => {
    const [open, setOpen] = useState(true)
    const [immersion, setImmersion] = useState(false)
    const [pourover, setPourover] = useState(true)
    const [aeropress, setAeropress] = useState(false)

  return (
    <Box sx={{ width: '100%', margin: '0 auto', padding: '0 1.5rem', maxWidth: '1024px' }}>
        <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 2fr', 
            gridTemplateRows: '350px ', 
            '@media screen and (max-width: 960px)': 
                {  
                    gridTemplateColumns: '1fr ',
                    paddingRight: '2rem'
                } 
            }}>
            <List sx={{  
                overflowY: 'auto',
                minWidth: 350,
                margin: '10px',
                backgroundColor: 'rgba(63,76,119,0.2)',
                color: '#CBCCCD' 
                }} 
                subheader={
                <ListSubheader sx={{ 
                    color: '#CBCCCD',
                    backgroundColor: 'rgba(63,76,119,0.2)'  
                    }}>
                    Learn
                </ListSubheader>}>

                <ListItem>
                    <ListItemButton onClick={() => {setOpen(!open)}}>
                        <ListItemText primary='Ways to brew speciality coffee' />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </ListItem>
                    <Collapse in={open} timeout='auto' unmountOnExit>
                        <List disablePadding>
                            <ListItem sx={{ pl: 4 }}>
                                <ListItemButton onClick={() => {
                                    setPourover(true)
                                    setImmersion(false)
                                    setAeropress(false)
                                }}>
                                    <ListItemText primary='Pourover' />
                                </ListItemButton>
                            </ListItem>
                            <ListItem sx={{ pl: 4 }}>
                                <ListItemButton onClick={() => { 
                                    setImmersion(true)
                                    setPourover(false)
                                    setAeropress(false)
                                }}>
                                    <ListItemText primary='Immersion' />
                                </ListItemButton>
                            </ListItem>
                            <ListItem sx={{ pl: 4 }}>
                                <ListItemButton onClick={() => { 
                                    setImmersion(false)
                                    setPourover(false)
                                    setAeropress(true)
                                }}>
                                    <ListItemText primary='Aeropress' />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Collapse>
            </List>
            {pourover && 
                <WhatIsPourover />
            }
            {immersion && 
                <WhatIsImmersion />
            }
            {aeropress && 
                <WhatIsAeropress />
            }
        </Box>
    </Box>
  )
}

export default AboutList