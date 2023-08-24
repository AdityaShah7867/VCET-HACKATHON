import React from "react";
import "./Sponsers.css";
import DearDigital from './images/dear-digital.png';
import Napsum from './images/Napsums.png';
import Software from './images/software_ag.png';
import Giber from './images/Giber.jpg';
import GeeksforGeeks from './images/gfg_2021.png';
import StreamYard from './images/Streamyard.png';
import GiveMYCertificate from './images/GMC_logo2021.png';
import GetBrains from './images/jetbrains.png';
import Taskade from './images/taskade.png';
import CafeCanfx from './images/CafeCanfx.png';

const Sponsors = () => {
  return (
    <div className="container sponsors">
      <div className="mt-4 text-center">
        <div className="mb-4">
        <div class="glitch-wrapper mb-5">
   <h1 class="glitch" data-text="Our Sponsors">Our Sponsors</h1>
</div>        </div>

        {/* Title Sponsor */}
        <div className="sponsors-container">

        <div className="d-flex justify-content-center align-items-center mb-4">
          <div className="text-center">
            <h2 className="font-bold">Title Sponsor</h2>
            <div className="card">
              <div className="pic">
                <img src={DearDigital} alt="Dear Digital" style={{ width: "180px" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Powered by */}
        <div className="d-flex justify-content-center align-items-center mb-4">
          <div className="text-center">
            <h2 className="font-bold">Powered by</h2>
            </div>
        </div>
        <div className="d-flex flex-wrap justify-content-center mt-4 gap-4">
          <div>

            <div className="card">
              <div className="pic">
                <img src={Napsum} alt="" style={{ width: "100%" }} />
              </div>
            </div>
          </div>
          <div>
           
            <div className="card">
              <div className="pic">
                <img src={Napsum} alt="" style={{ width: "100%" }} />
              </div>
            </div>
          </div>
        </div>

{/* Co-powered by */}
        <div className="d-flex justify-content-center align-items-center mb-4">
          <div className="text-center">
            <h2 className="font-bold">Co-Powered by</h2>
            </div>
        </div>
      
        
        <div className="d-flex flex-wrap justify-content-center mt-4 gap-4">
          <div>

            <div className="card">
              <div className="pic">
                <img src={Software} alt="" style={{ width: "100%" }} />
              </div>
            </div>
          </div>
          <div>
            <div className="card">
              <div className="pic">
                <img src={Giber} alt="" style={{ width: '100px' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Associated with */}
        <div className="mt-4 mb-4">
          <h2 className="font-bold">Associated with</h2>
        </div>

        {/* Coding Partner, Streaming Partner, Certificate Partner */}
        <div className="d-flex flex-wrap justify-content-center mt-4 gap-4">
          <div>
            <h2 className="fw-medium">Coding Partner</h2>
            <div className="card">
              <div className="pic">
                <img src={GeeksforGeeks} alt="" style={{ width: "100%" }} />
              </div>
            </div>
          </div>
          <div>
            <h2 className="fw-medium">Streaming Partner</h2>
            <div className="card">
              <div className="pic">
                <img src={StreamYard} alt="" style={{ width: "100%" }} />
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-medium">Certificate Partner</h2>
            <div className="card">
              <div className="pic">
                <img src={GiveMYCertificate} alt="" style={{ width: "100%" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Community Partner, Technology Partner, Broadcasting Partner */}
        <div className="d-flex flex-wrap  justify-content-center mt-4 gap-4">
          <div>
            <h2 className="fw-medium">Community Partner</h2>
            <div className="card">
              <div className="pic">
                <img src={GetBrains} alt="" style={{ width: "160px" }} />
              </div>
            </div>
          </div>
          <div>
            <h2 className="fw-medium">Technology Partner</h2>
            <div className="card">
              <div className="pic">
                <img src={Taskade} alt="" style={{ width: "100%" }} />
              </div>
            </div>
          </div>
          <div>
            <h2 className="fw-medium">Broadcasting Partner</h2>
            <div className="card">
              <div className="pic">
                <img src={CafeCanfx} alt="" style={{ width: "100%" }} />
              </div>
            </div>
          </div>
           {/* Media Partner */}
        </div>

       
      </div>
    </div>
    </div>
  );
};

export default Sponsors;