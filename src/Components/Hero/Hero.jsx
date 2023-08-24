import React, { useEffect } from "react";
import Aos from "aos";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Hero = () => {
  const notify = () => toast.info("Coming Soon!", {
    position: "top-right",
    autoClose: 3000,
    style: {
        backgroundColor: "#08b2aa" 
    }
});

  useEffect(() => {
    Aos.init();
  });
  return (
    <div>
      <section
        id="hero"
        class="min-vh-100 d-flex align-items-center text-center"
      >
        <div class="container">
          <div class="row">
            <div class="col-12">
              <img
                src="https://vcet-hackathon.web.app/logo2.png"
                height="90"
                alt="logo"
                className="my-3"
              />
              <h4 class="text-white my-3">
                Vidyavardhini's College Of Engineering and Technology
              </h4>
              <p class=" my-1" style={{ color: "#9CF5FD" }}>
                presents
              </p>
              <h1 class="text-uppercase text-white fw-semibold display-1">
                VCET{" "}
                <a
                  style={{ color: "#9CF5FD", textDecoration: "none" }}
                  className="neonText"
                >
                  HACKATHON
                </a>
              </h1>
              {/* <h3 class="my-2 logo ">
                        <b><span>Unleash </span><span>the </span><span>Unreal</span></b>
                    </h3> */}
              <div class="glitch-wrapper">
                <div class="glitch" data-text="Unleash The Unreal">
                  Unleash The Unreal
                </div>
              </div>
              <div>
                <button onClick={notify} class="btn btn-brand my-3">
                  Register Now
                </button>
                
                <ToastContainer
                  
                  closeButton={false}
                  position="top-right"
                  autoClose={3000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="colored"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
