import { useEffect, useState } from "react"
import Header from "./Components/Navbar/Header"
import Hero from "./Components/Hero/Hero"
import './style.css'
import Preloader from "./Components/Preloader/Preloader";
import Design from "./Components/Background/Design";
import Sponsors from "./Components/Sponsors/Sponsors";
import About from "./Components/About/About";
import Timeline from "./Components/Timeline/Timeline";
import Faq from "./Components/FAQ/Faq";
import Footer from './Components/Footer/Footer'
import Timer from './Components/Timer/Timer'
import { BrowserRouter } from "react-router-dom";
import Guidelines from "./Components/Guidelines/Guidelines";
import Contact from "./Components/Contact/Contact";
import Gallery from "./Components/Gallery/Gallery"
import Prize from "./Components/Prizes/Prize";
import Prize2 from "./Components/Prizes/Prize2";


import Problem from "./Components/ProblemCards/Problem";

function App() {

  const [loading,setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(()=>{
      setloading(false);
    },5000)
  },[]);

  return (
    <>
    {
      loading 
      ? 
        <Preloader/> 
      :
        <>
        <BrowserRouter>
        <Design/>
            <Header/>
            <Hero />
            <About />
            <Timer />
            <Problem />
            <Prize/>
            <Prize2/>
            <Timeline/>
            <Guidelines/>
            <Sponsors/>
            <Gallery/>
            <Faq/>
            <Contact/>
            <Footer />
        </BrowserRouter>
        </>
    }
    </>
  )
}

export default App
