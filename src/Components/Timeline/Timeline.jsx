import React, { useEffect } from 'react'
import AOS from "aos";

const Timeline = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <div id='timeline'>
      <div class="container" style={{marginTop:'150px'}}>
      <div class="text-center my-5">
        <div class="glitch-wrapper">
   <h1 class="glitch" data-text="Timeline">Timeline</h1>
</div>
    </div>
        <div class="row">
            <div class="col-md-12">
                <div class="Yearly-timeline">
                <div class="timeline">
                        <a class="timeline-content text-white">
                            <h3 class="title">2018-2021</h3>
                            <p class="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                            </p>
                        </a>
                    </div>
                    <div class="timeline">
                        <a class="timeline-content text-white" >
                            <h3 class="title">2013-2017</h3>
                            <p class="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                            </p>
                        </a>
                    </div>
                    <div class="timeline" >
                        <a class="timeline-content text-white">
                            <h3 class="title">2018-2021</h3>
                            <p class="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                            </p>
                        </a>
                    </div>
                    <div class="timeline" >
                        <a class="timeline-content text-white">
                            <h3 class="title">2013-2017</h3>
                            <p class="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                            </p>
                        </a>
                    </div>
                    <div class="timeline" >
                        <a class="timeline-content text-white">
                            <h3 class="title">2018-2021</h3>
                            <p class="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                            </p>
                        </a>
                    </div>
                    <div class="timeline" >
                        <a class="timeline-content text-white">
                            <h3 class="title">2013-2017</h3>
                            <p class="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Timeline
