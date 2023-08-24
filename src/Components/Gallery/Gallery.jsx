import React from 'react';
import './Gallery.css';
import Fancybox from './Fancybox';
import img1 from "./gallery/winners.jpg"
import img4 from "./gallery/Screenshot_2021.png"
import img2 from "./gallery/car3.png"
import img3 from "./gallery/img5.jpg"
import img5 from "./gallery/2021.jpeg"

const Gallery2 = () => {
  return (

    <div className='my-5' id='gallery' style={{position:'relative'}}>
      <div class="glitch-wrapper">
   <h1 class="glitch" data-text="Gallery">Gallery</h1>
</div>  
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >

        <div className='hidden-mobile'>
          <div class=" parent ">

            <a data-fancybox="gallery" class="general val1" href={img1}>
              <img class="fimg" src={img1} />
            </a>

            <a data-fancybox="gallery" class="general val2" href={img2}>
              <img class="fimg" src={img2} />
            </a>

            <a data-fancybox="gallery" class="general val3" href={img3}>
              <img class="fimg" src={img3} />
            </a>

            <a data-fancybox="gallery" class="general val4" href={img4}>
              <img class="fimg" src={img4} />
            </a>

            <a data-fancybox="gallery" class="general val5" href={img1}>
              <img class="fimg" src={img1} />
            </a>
            <a data-fancybox="gallery" class="general val6" href={img1}>
              <img class="fimg" src={img1} />
            </a>
            
            

           
          </div>
        </div>
      </Fancybox>

      {/* <div className='hidden-mobile'>
        <div class=" parent ">
          <img class="general val1"  src="https://cdn.pixabay.com/photo/2023/07/11/17/24/ai-generated-8121001_1280.jpg" />
          <img class="general val2" src="https://cdn.pixabay.com/photo/2023/08/03/13/49/ai-generated-8167209_640.png" />
          <img class="general val3" src="https://cdn.pixabay.com/photo/2022/12/03/16/26/crater-7633035_640.png" />
          <img class="general val4" src="https://cdn.pixabay.com/photo/2023/08/04/08/35/ai-generated-8168687_640.jpg" />
          <img class="general val5" src="https://cdn.pixabay.com/photo/2023/07/28/12/29/ai-generated-8155175_640.png" />
          <img class="general val6" src="https://cdn.pixabay.com/photo/2023/02/20/20/44/ai-generated-7803070_640.jpg" />
          <img class="general val7" src="https://cdn.pixabay.com/photo/2023/07/03/09/36/ai-generated-8103801_1280.jpg" />
          <img class="general val8" src="https://cdn.pixabay.com/photo/2023/02/17/10/44/ai-generated-7795744_640.jpg" />
          <img class="general val9" src="https://cdn.pixabay.com/photo/2023/08/03/11/57/ai-generated-8166964_640.jpg" />
        </div>
      </div> */}
      <div className='d-lg-none d-md-none'>
        <Fancybox
          options={{
            Carousel: {
              infinite: false,
            },
          }}
        >

          <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">

                <div className="carousel-item active">
                <a data-fancybox="gallery" class="general val1" href={img1}>
                  <img class="fimg" src={img1} className="d-block w-100" alt="..." />
                </a>
                </div>

                <div className="carousel-item">
                <a data-fancybox="gallery" class="general val1" href={img2}>
                  <img class="fimg" src={img2} className="d-block w-100" alt="..." />
                </a>
                </div>

                <div className="carousel-item">
                <a data-fancybox="gallery" class="general val1" href={img3}>
                  <img src={img3} className="d-block w-100" alt="..." />
                </a>
                </div>

                <div className="carousel-item">
                <a data-fancybox="gallery" class="general val1" href={img4}>
                  <img src={img4} className="d-block w-100" alt="..." />
                </a>
                </div>

                <div className="carousel-item">
                <a data-fancybox="gallery" class="general val1" href={img5} >
                  <img src={img5} className="d-block w-100" alt="..." />
                </a>
                </div>

                <div className="carousel-item active">
                <a data-fancybox="gallery" class="general val1" href={img1}>
                  <img class="fimg" src={img1} className="d-block w-100" alt="..." />
                </a>
                </div>
              </div>

              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active thumbnail" aria-current="true" aria-label="Slide 1">
                  <img src={img1} className="d-block w-100" alt="..." />
                </button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} className="thumbnail" aria-label="Slide 2">
                  <img src={img2} className="d-block w-100" alt="..." />
                </button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} className="thumbnail" aria-label="Slide 3">
                  <img src={img3} className="d-block w-100" alt="..." />
                </button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} className="thumbnail" aria-label="Slide 4">
                  <img src={img4} className="d-block w-100" alt="..." />
                </button>

                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={4} className="thumbnail" aria-label="Slide 6">
                  <img src={img5} className="d-block w-100" alt="..." />
                </button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active thumbnail" aria-current="true" aria-label="Slide 1">
                  <img src={img1} className="d-block w-100" alt="..." />
                </button>

              </div>
            </div>
            <br />

          </div>

          </Fancybox>


      </div>
    </div>

  );
}

export default Gallery2




// <div>
//           <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
//             <div className="carousel-inner">
//               <div className="carousel-item active">
//                 <img src="https://cdn.pixabay.com/photo/2023/07/11/17/24/ai-generated-8121001_1280.jpg" className="d-block w-100" alt="..." />
//               </div>
//               <div className="carousel-item">
//                 <img src="https://cdn.pixabay.com/photo/2023/08/03/13/49/ai-generated-8167209_640.png" className="d-block w-100" alt="..." />
//               </div>

//               <div className="carousel-item">
//                 <img src="https://cdn.pixabay.com/photo/2023/08/04/08/35/ai-generated-8168687_640.jpg" className="d-block w-100" alt="..." />
//               </div>
//               <div className="carousel-item">
//                 <img src="https://cdn.pixabay.com/photo/2023/07/28/12/29/ai-generated-8155175_640.png" className="d-block w-100" alt="..." />
//               </div>

//               <div className="carousel-item">
//                 <img src="https://cdn.pixabay.com/photo/2023/02/17/10/44/ai-generated-7795744_640.jpg" className="d-block w-100" alt="..." />
//               </div>
//             </div>

//             <div className="carousel-indicators">
//               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active thumbnail" aria-current="true" aria-label="Slide 1">
//                 <img src="https://cdn.pixabay.com/photo/2023/07/11/17/24/ai-generated-8121001_1280.jpg" className="d-block w-100" alt="..." />
//               </button>
//               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} className="thumbnail" aria-label="Slide 2">
//                 <img src="https://cdn.pixabay.com/photo/2023/08/03/13/49/ai-generated-8167209_640.png" className="d-block w-100" alt="..." />
//               </button>
//               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} className="thumbnail" aria-label="Slide 3">
//                 <img src="https://cdn.pixabay.com/photo/2023/08/04/08/35/ai-generated-8168687_640.jpg" className="d-block w-100" alt="..." />
//               </button>
//               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} className="thumbnail" aria-label="Slide 4">
//                 <img src="https://cdn.pixabay.com/photo/2023/07/28/12/29/ai-generated-8155175_640.png" className="d-block w-100" alt="..." />
//               </button>

//               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={4} className="thumbnail" aria-label="Slide 6">
//                 <img src="https://cdn.pixabay.com/photo/2023/02/17/10/44/ai-generated-7795744_640.jpg" className="d-block w-100" alt="..." />
//               </button>

//             </div>
//           </div>
//           <br />

//         </div>