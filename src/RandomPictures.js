import React from 'react'
import Boy from './../Assets/boy.svg'
import Man from './../Assets/man.svg'
import Man2 from './../Assets/man-2.svg'
import GentleMan from './../Assets/gentleman.svg'
import BusinnessMan from './../Assets/businness-man.svg'


import Girl from './../Assets/girl.svg'
import Woen2 from './../Assets/woen-2.svg'
import Women from './../Assets/women.svg'
import { border } from './App'

const svgPhoto = {
    male: [
      // Boy, Man, Man2,
       GentleMan, 
      // BusinnessMan
    ],
    female: [
      // Girl, 
      Woen2
      // , Women
    ]
}
const {male, female} = svgPhoto

const Photo = {
    male: ()=>male[Math.floor(Math.random() * male.length)],
    female: ()=>female[Math.floor(Math.random() * female.length)]

}

const RandomPictures = ({gender, width, height, style})=>{
    const Pictures: any = Photo[gender||'male']()
    return gender?<Pictures
      width={width} 
      height={height}
      style={style}
    />:<></>
  }

export default RandomPictures