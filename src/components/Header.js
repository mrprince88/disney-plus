import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import { auth,provider} from '../firebase';
import {useHistory} from 'react-router-dom';
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignOut
} from "../features/user/userSlice";
import {useDispatch,useSelector} from "react-redux";

function Header () {

  const dispatch=useDispatch();
  const history=useHistory();
  const userName=useSelector(selectUserName);
  const userPhoto=useSelector(selectUserPhoto);

  useEffect(()=>{
    auth.onAuthStateChanged(async(user)=>{
      if(user) {
        dispatch(setUserLogin({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      }))
      history.push("/home");
      }
    })
  },[])


  const signIn = ()=> {
    auth.signInWithPopup(provider)
    .then((result)=>{
        let user=result.user
        dispatch(setUserLogin({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      }))
      history.push("/home")
    })
  }

  const signOut= () => {
    auth.signOut()
    .then(()=>{
      dispatch(setSignOut());
      history.push("/")
    })
  }

  const [state,setState]=useState(false);

  function toggle() {
    state===false ? setState(true): setState(false);
  }
    return (
        <Nav>

            <Logo><img src='/images/logo.svg'/></Logo>
            {
              !userPhoto ?
              (<Login onClick={signIn}>Login</Login>) :
              (
              <>
            <div onClick={toggle} className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
                <NavMenu show={state}>

                <div>
                  <img src='/images/home-icon.svg'/>
                  <span>HOME</span>  
                </div>

                <div>
                  <img src='/images/search-icon.svg'/>
                  <span>SEARCH</span>  
                </div>
                <div>
                  <img src='/images/watchlist-icon.svg'/>
                  <span>WATCHLIST</span>  
                </div>
                <div>
                  <img src='/images/original-icon.svg'/>
                  <span>ORIGINALS</span>  
                </div>
                <div>
                  <img src='/images/movie-icon.svg'/>
                  <span>MOVIES</span>  
                </div>
                <div>
                  <img src='/images/series-icon.svg'/>
                  <span>SERIES</span>  
                </div>

            </NavMenu>
             <UserImg onClick={signOut} src={userPhoto} title="Logout"/>

              </>
              )
            }
        </Nav>

    );
}

export default Header

const Nav = styled.nav `
height: 70px;
position: sticky;
top:0;
z-index:4;
background:#111826;
display: flex;
align-items: center;
padding: 0 20px;
.hamburger {
  order:-1;
  margin-left: -25px;
  position: relative;
  z-index:3;
  padding: 20px;
  span {
    margin-top: 3px;
    margin-bottom: 3px;
    width: 18px;
    height: 2px;
    background: rgba(255, 255, 255, 0.6);
    display: block;
  }
}

@media(min-width:768px) {
  .hamburger{
    display:none;
  }
}
`

const Logo=styled.div `
display: flex;
align-items: center;
height: 100%;
padding-left:5px;
padding-right:6px;
img {
width: 80px;
z-index:3;
}
@media(max-width:768px) {
  width:100%;
  height:100%;
  display:flex;
  justify-content: start;
}
`
const NavMenu = styled.div `
display: flex;
flex:1;
align-items: center;
div {
    display: flex;
    align-items: center;
    padding:0 12px;
    cursor:pointer;

    img {
        height:21px;
    }

    span {
        font-size: 15px;
        letter-spacing: 1.42px;
        position: relative;
        &:after {
            content:"";
            height:2px;
            background:white;
            position:absolute;
            left:0;
            right:0;
            bottom:-6px;
            opacity:0;
            transform-origin:left center;
            transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            transform: scaleX(0);
        }
    }

    &:hover {
       span:after {
           transform:scaleX(1);
           opacity:1;
       } 
    }
    
}
@media(max-width:850px) {
  padding: 80px;
  background-color: #111826;
  flex-direction:column;
  position:absolute;
  justify-content: space-evenly;
  left:0;
  top:0;
  width: 80%;
  height: 100vh;
  z-index:2;
  overflow:hidden;
  transition: transform 0.3s ease;
  ${({show})=>{
    if(!show) {
  return `
      transform: translateX(-100%);
  `
  }
  else {
  return `
  transform: translateX(0);
  &: after {
    content:"";
    background: grey;
  }
  `
  }
  }
}
}
`

const UserImg= styled.img `
margin-left: auto;
width:40px;
height:40px;
border-radius: 50%;
cursor: pointer;
z-index:3;
`

const Login=styled.div `
margin-left: auto;
margin-right:10px;
border: 1px solid #f9f9f9;
padding: 8px 16px;
border-radius: 4px;
letter-spacing: 1.5px;
text-transform: uppercase;
background-color: rgba(0,0,0,0.6);
transition: all 0.2s ease 0s;
cursor: pointer;
&: hover {
  background-color: #f9f9f9;
  color: #000;
  border-color: transparent;
}
`