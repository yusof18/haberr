import React from 'react'
import Card from './Card'

import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const cards = [
    {
        id: 1,
        title: 'solved Problem 1',
        image:  image1,
        url: 'http://flujo00.000webhostapp.com/problem_1.html',
        text: 'this is the fast web'
    },
    {
        id: 2,
        title: 'solved problem 2',
        image:  image2,
        url: 'http://flujo00.000webhostapp.com/problem_2.html',
        text: 'this is the fab'
    },
    {
    id: 3,
    title: 'solved problem 3',
    image:  image3,
    url: 'http://flujo00.000webhostapp.com/problem_2.html',
    text: 'this '
    }
]

function Cards() {
 
    return (
        <div clasName="container-fluid align-items-center vh-100">
            <div className="row ">
                {
                    cards.map((card) => (
                      <div className="col-sm-3 container align-items-center vh-100" key={card.id}>
                      <Card title={card.title} imageSource={card.image} url={card.url} text={card.text}/>
                      </div>  
                    ))
                }
             
            </div>
        </div>
    )
}

export default Cards
