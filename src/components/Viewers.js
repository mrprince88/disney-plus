import React from 'react'
import styled from 'styled-components';

function Viewers() {
    return (
        <Container>
            <div>
                <img src='/images/viewers-disney.png'></img>
                <video className='videoTag' loop muted   onMouseOver={event => event.target.play()}
  onMouseOut={event => {event.target.pause();event.target.load()}}>
                    <source src="/videos/disney.mp4"/>
                </video>
            </div>
            <div>
                <img src='/images/viewers-pixar.png'></img>
                <video className='videoTag' loop muted onMouseOver={event => event.target.play()}
  onMouseOut={event => {event.target.pause();event.target.load()}}>
                    <source src="/videos/pixar.mp4"/>
                </video>
            </div>
            <div>
                <img src='/images/viewers-marvel.png'></img>
                <video className='videoTag' loop muted onMouseOver={event => event.target.play()}
  onMouseOut={event => {event.target.pause();event.target.load()}}>
                    <source src="/videos/marvel.mp4"/>
                </video>
            </div>
            <div>
                <img src='/images/viewers-starwars.png'></img>
                <video className='videoTag' loop muted onMouseOver={event => event.target.play()}
  onMouseOut={event => {event.target.pause();event.target.load()}}>
                    <source src="/videos/star-wars.mp4"/>
                </video>
            </div>
            <div>
                <img src='/images/viewers-national.png'></img>
                <video className='videoTag' loop muted onMouseOver={event => event.target.play()}
  onMouseOut={(event) => {event.target.pause();event.target.load()}}>
                    <source src="/videos/national-geographic.mp4"/>
                </video>
            </div>

        </Container>
    )
}

export default Viewers

const Container=styled.div `
border-radius: 10px;
cursor: pointer;
margin-top: 30px;
display: grid;
grid-template-columns:repeat(5,auto);
padding: 30px 0px 26px;
grid-gap: 25px;
@media(max-width: 768px) {
    grid-gap: 5px;
}

div {
    position: relative;
    border: solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: opacity 0.25s ease-in;
    img {
        position: absolute;
        top:0; left:0;
        width: 100%;
        height: 100%;
        object-fit: fill;
    }

    video {
        width: 100%;
        height: 100%;
        object-fit: fill;
        opacity:0;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        video {
            opacity:1;
        }
    }

}
`