import React from 'react'
import village from '../../static/colouring/VillageStairsImage.png';
import mandala1 from '../../static/colouring/Mandala1Image.png';
import mandala2 from '../../static/colouring/Mandala2Image.png';

const DefaultPage = ({handleImageSelection}) => {

    return (
        <>
            <h2>Choose a picture to colour in: </h2>
            <img src={village} className='select-img' onClick={()=>{handleImageSelection('village')}} onTouchStart={()=>{handleImageSelection('village')}}/>
            <img src={mandala1} className='select-img' onClick={()=>{handleImageSelection('mandala1')}} onTouchStart={()=>{handleImageSelection('mandala1')}}/>
            <img src={mandala2} id='mandala2-img' className='select-img' onClick={()=>{handleImageSelection('mandala2')}} onTouchStart={()=>{handleImageSelection('mandala2')}}/>
        </>
    )
}

export default DefaultPage;