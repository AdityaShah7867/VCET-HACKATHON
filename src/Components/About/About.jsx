import React, { useEffect, useState, useRef } from "react";
import code from './code.gif'
import './ab.css'

const About = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  const aboutRef = useRef(null);

  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const aboutText = `
  VCET Hackathon is a 30 hours Virtual Hackathon organized by Department of Information Technology of "Vidyavardhini's College of Engineering and Technology". By organizing this Hackathon, we are trying to promote a strong Programming and Product Building Culture among students that will help them develop Problem Solving, Critical Thinking and Software Development Skills. It is an opportunity to take on challenging problems that revolve around us all the time and crack them down. Will you get time to eat? Can you ditch your sleep? Do you have passion to build? Find out in this 30 hours long thrilling experience!.
  `;

  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsAboutVisible(true);
        } else {
          setIsAboutVisible(false);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isAboutVisible) {
      const interval = setInterval(() => {
        if (currentIndex < aboutText.length) {
          setText((prevText) => prevText + aboutText[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }
      }, 20);

      return () => {
        clearInterval(interval);
      };
    }
  }, [currentIndex, aboutText, isAboutVisible]);

  return (
    <>
    <div class="glitch-wrapper">
   <h1 class="glitch" data-text="About Us">About Us</h1>
</div>   

<div>
      <div>
            <div class="py-5 service-32" style={{position:'relative'}}>
                <div class="container">
                    <div class="row wrap-feature-32">
                        <div class="col-md-6"> 
                          <img src={code} style={{
                    transform: `translate(-${position.x / 20}px, -${position.y / 20}px)`,
                  }} class="img-fluid" width="100%" /> 
                        </div>
                        <div  style={{  backgroundColor: '#252525', borderRadius:'15px', color:'#08b2aa', fontWeight:'bold'}} ref={aboutRef} className={`col-md-6 align-self-center abb p-4  ${isAboutVisible ? 'visible' : ''}`}>
                            <p className="d-flex justify-content-start"><i class="fa fa-circle text-danger"></i><i class="fa fa-circle mx-1 text-warning" aria-hidden="true"></i><i class="fa fa-circle text-success" aria-hidden="true"></i></p>
                            <p class="my-3">
                              {text}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default About;