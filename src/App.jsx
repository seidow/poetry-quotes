import { useState } from 'react'
import Navbar from './assets/Header'
import Post from './assets/post'
import Header from './assets/Header'
import { poetry } from './assets/poetry'
import Footer from './assets/Footer'

function App() {
  let isClicked = true;
  const [currentPoetry, setPoatry] = useState(
      {key: poetry[0].key,
      text1: poetry[0].text1,
      text2: poetry[0].text2,
      author: poetry[0].author})

  function GetPoetry(){
    let index;
    do{
      index = Math.floor(Math.random() * poetry.length);
    }while(index === currentPoetry.key);
    
   setPoatry(
      {
        key: poetry[index].key,
        text1: poetry[index].text1,
        text2: poetry[index].text2,
        author: poetry[index].author}
    )
  }
  return (
    <div>
      <Header />
      <Post 
      key = {currentPoetry.key}
      text1= {currentPoetry.text1}
      text2= {currentPoetry.text2}
      author= {currentPoetry.author}
      onNext = {GetPoetry}
      />
      <Footer />
    </div>
  )
}

export default App

/*
key = {isClicked ? poetry[getPoetry].key: poetry[0].key}
        text1= {isClicked ? poetry[getPoetry].text1:poetry[0].text1}
        text2= {isClicked ? poetry[getPoetry].text2:poetry[0].text2}
        author= {isClicked ? poetry[getPoetry].author:poetry[0].author}
        onClicked = {getPoetry}
*/