import React from 'react'

export default function DogCard(props){
    return(
        <div className='dogcard--div'>
            <img src="images/summer.png" className='summer-pic'/>
            <div className='dogcard--text'>
                <h1>{props.item.title}</h1>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}