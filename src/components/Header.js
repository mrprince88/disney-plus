import React,{useEffect} from 'react';
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

  console.log(userPhoto);
    return (
        <Nav>
            <Logo src='/images/logo.svg'/>
            {
              !userPhoto ?
              (<Login onClick={signIn}>Login</Login>) :
              (
              <>
                <NavMenu>
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
                  <span>HOME</span>  
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
background:#090b13;
display: flex;
align-items: center;
padding: 0 36px;
`

const Logo=styled.img `
width: 80px;
`
const NavMenu = styled.div `
display: flex;
flex:1;
margin-left:25px;
margin-right: auto;
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
`

const UserImg= styled.img `
width:40px;
height:40px;
border-radius: 50%;
cursor: pointer;
`

const Login=styled.div `
margin-left: auto;
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