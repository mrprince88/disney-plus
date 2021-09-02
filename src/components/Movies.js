import React,{useEffect} from 'react';
import styled from 'styled-components';
import {selectMovies} from "../features/movie/movieSlice";
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchMovies} from '../features/movie/movieSlice';

function Movies() {

   const dispatch=useDispatch();
    
   useEffect(()=>{
      dispatch(fetchMovies())
   },[])

   const movies=useSelector(selectMovies);
   
    return (
        <Container>
            <h3>Recommened For You</h3>
            <Content>
               {movies && movies.filter((movie)=>movie.type==="recommend").map((movie)=>(
                <div key={movie.id}>
                   <Link to={`/detail/${movie.id}`}>
                     <img src={movie.cardImg}/>
                   </Link>
                </div>
               ))}
            </Content>
            <h3>New to Disney+</h3>
            <Content>
               {movies && movies.filter((movie)=>movie.type==="new").map((movie)=>(
                <div key={movie.id}>
                   <Link to={`/detail/${movie.id}`}>
                     <img src={movie.cardImg}/>
                   </Link>
                </div>
               ))}
            </Content>
            <h3>Trending</h3>
            <Content>
               {movies && movies.filter((movie)=>movie.type==="trending").map((movie)=>(
                <div key={movie.id}>
                   <Link to={`/detail/${movie.id}`}>
                     <img src={movie.cardImg}/>
                   </Link>
                </div>
               ))}
            </Content>
            <h3>Originals</h3>
            <Content>
               {movies && movies.filter((movie)=>movie.type==="original").map((movie)=>(
                <div key={movie.id}>
                   <Link to={`/detail/${movie.id}`}>
                     <img src={movie.cardImg}/>
                   </Link>
                </div>
               ))}
            </Content>
        </Container>
    )
}

export default Movies


const Container=styled.div `
font-family:"Roboto","HelveticaNeue-Light",sans-serif;
`

const Content=styled.div `
padding: 5px;
display: grid;
grid-gap: 15px;
grid-template-columns: repeat(auto-fill,1fr);
grid-auto-flow: column;
grid-auto-columns: minmax(160px,1fr);
overflow-x: auto;
overflow-y: visible;
&::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* Chrome/Safari/Webkit */
}

@media(min-width: 768px) {
grid-gap: 25px;
grid-template-columns:repeat(4,minmax(0,1fr));
}
margin-bottom: 25px;
div {
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &:hover {
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        border-color: rgba(249, 249, 249, 0.8);
    }
}
`