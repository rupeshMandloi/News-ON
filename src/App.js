
import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import NewsBoard from './Components/NewBoard'
import Footer from './Components/Footer';

function App() {

  const [category, setCategory] = useState("general");
  return (
    <>
     <Navbar setCategory={setCategory}/>
     <NewsBoard category={category}/>
     <Footer/>
    </>
  )
}

export default App


//API_KEY=f7ccbeb8b34548db9e93f830a99373cb1