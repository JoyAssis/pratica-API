import React, {useState} from "react"
import axios from "axios"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import fundo from "./assets/fundodog.jpg"
import fundomedia from "./assets/fundomedia.jpg"

const GlobalStyle = createGlobalStyle`
*{
margin:0;
padding:0;
box-sizing:border-box;
}
`

const Content = styled.div`
background-image: url(${fundo});
background-size: 1370px 700px;
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
color: orange;

 @media (max-width: 760px;){
  background-image: url(${fundomedia});
}
`
const Btn = styled.button`
width: 250px;
height: 30px;
margin: 10px;
padding:0 0.5em;
cursor: pointer;
border-radius: 20px;
font-weight: bold;
background: white;
color: black;
border: 3px solid orange;
&:hover{
  background-color: orange;
}
`
const Img = styled.img`
width: 50vw;
height:70vh;

 @media(max-width:760px){
   width: 60vw;
   height: 50vh;
 }
`

export default function App(){

  const [dog,setDog] = useState([])

  function Doginhos (){
    axios.get('https://dog.ceo/api/breeds/image/random').then((response)=>{
      setDog(response.data.message)
    })
  }

  
  return(
    <Content>
     <GlobalStyle/>
     <h1>API</h1>
     <Btn onClick={()=>{Doginhos()}}>Clique para ver um doguinho</Btn>
     <Img src={dog}/>
    </Content>
  )
}