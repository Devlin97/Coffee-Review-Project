import React, { useState } from 'react'
import { List, ListItem, ListItemButton, ListSubheader, ListItemText, Collapse, Box } from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import WhatIsPourover from './WhatIsPourover'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

const AboutList = () => {
    const [open, setOpen] = useState(true)
    const [explainer, setExplainer] = useState()

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 2fr' }}>
        <List sx={{ 
            height: '100%', 
            maxHeight: '550px', 
            overflowY: 'auto',
            maxWidth: 400,
            minWidth: 350, 
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
                            <ListItemButton>
                                <ListItemText primary='Pourover' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem sx={{ pl: 4 }}>
                            <ListItemButton>
                                <ListItemText primary='Immersion' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem sx={{ pl: 4 }}>
                            <ListItemButton>
                                <ListItemText primary='Aeropress' />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Collapse>
        </List>
        <WhatIsPourover />
    </Box>
  )
}

export default AboutList