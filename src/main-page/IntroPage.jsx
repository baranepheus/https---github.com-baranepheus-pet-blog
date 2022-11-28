import React from 'react';
import DogCard from '../components/DogCard';
import dogData from '../dataObjects/dogData';

export default function IntroPage(){
    const dataDog = dogData.map(item => {
        return(
            <DogCard 
                key={item.id}
                item={item}
            />
        )
    })
    return(
        <section className='intropage--div' >
            <div className='intro--content'>
                <h1 className='intro--title'>Winter's Family Tree</h1>
                <div className='card--div'>
                    {dataDog}
                </div>
            </div>
        </section>
    )
} 

{/* <h1 className='intro--title'>Winter's Family Tree</h1> */}