import React, { useState } from 'react'

const AddRecipe = () => {
  const [title, setTitle] = useState();
  const [brewMethod, setBrewMethod] = useState();
  const [coffeeWeight, setCoffeeWeight] = useState();
  const [waterWeight, setWaterWeight] = useState();
  const [brewer, setBrewer] = useState();
  const [grinder, setGrinder] = useState();
  const [grindSize, setGrindSize] = useState();
  const [description, setDescription] = useState();
  const [totalTime, setTotalTime] = useState();
  
    return (
    <div>AddRecipe</div>
  )
}

export default AddRecipe