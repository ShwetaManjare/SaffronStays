
import React, { useEffect, useRef } from 'react';
import '../Home/style.css';

// Import images from assets
import img1 from '../../assets/Slider/slider1.jpg';
import img2 from '../../assets/Slider/slider2.jpg';
import img3 from '../../assets/Slider/slider3.jpg';
import img4 from '../../assets/Slider/slider5.jpg';


const images = [img1, img2, img3, img4, ];

const Carousel = () => {
    const sliderRef = useRef(null);
    const thumbnailRef = useRef(null);
    const carouselRef = useRef(null);
    let timeRunning = 3000;
    let timeAutoNext = 7000;
    
    useEffect(() => {
        const slider = sliderRef.current;
        const thumbnail = thumbnailRef.current;
        const carousel = carouselRef.current;
        
        const nextSlide = () => showSlider('next');
        const prevSlide = () => showSlider('prev');
        
        let runNextAuto = setTimeout(nextSlide, timeAutoNext);
        
        function showSlider(type) {
            if (!slider || !thumbnail || !carousel) return;
            let sliderItems = slider.querySelectorAll('.item');
            let thumbnailItems = thumbnail.querySelectorAll('.item');
            
            if (type === 'next') {
                slider.appendChild(sliderItems[0]);
                thumbnail.appendChild(thumbnailItems[0]);
                carousel.classList.add('next');
            } else {
                slider.prepend(sliderItems[sliderItems.length - 1]);
                thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
                carousel.classList.add('prev');
            }
            
            setTimeout(() => {
                carousel.classList.remove('next', 'prev');
            }, timeRunning);

            clearTimeout(runNextAuto);
            runNextAuto = setTimeout(nextSlide, timeAutoNext);
        }

        return () => clearTimeout(runNextAuto);
    }, []);

    return (
        <div className="carousel" ref={carouselRef}>
            <div className="list" ref={sliderRef}>
                {images.map((image, index) => (
                    <div className="item" key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} />
                        <div className="content">
                            <div className="author">Welcome to</div>
                            <div className="title">SAFFRON STAY</div>
                            <div className="topic">CAMPING</div>
                            <div className="des"style={{ color:"black", fontWeight:"bold" }} >
                            "SaffronStay – Where Every Stay is an Unforgettable Journey!"
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div>
            <div className="thumbnail" ref={thumbnailRef}>
                {images.map((image, index) => (
                    <div className="item" key={index}>
                        <img src={image} alt={`Thumbnail ${index + 1}`} />
                        {/* <div className="content">
                            <div className="title">Name Slider</div>
                            <div className="description">Description</div>
                        </div> */}
                    </div>
                ))}
            </div>
            <div className="arrows">
                <button id="prev">&lt;</button>
                <button id="next">&gt;</button>
            </div>
            <div className="time"></div>
        </div>
    );
};

export default Carousel;





