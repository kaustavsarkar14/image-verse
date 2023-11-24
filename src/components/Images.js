import React, { useContext } from 'react'
import imageContext from '../context/imageContext'
import "./images.css"
import Shimmer from './Shimmer'

const Images = () => {
    const { images } = useContext(imageContext)
    
    console.log(images)
    if(images==null) return <Shimmer/>
    if(images.length==0) return <h1>No result found</h1>
    return (
        <div className='images' >
            {
                images.map((el, i) => {
                    return <div key={el.id} className='image' >
                        <img src={el.urls.regular} alt="" />
                    </div>
                })
            }
        </div >
    )
}

export default Images