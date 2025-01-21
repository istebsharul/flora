"use client";
import { useState } from 'react';
import Image from 'next/image'; // Assuming you're using Next.js
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel'; // Import carousel component

import circle1 from '../../../public/hero.png';
import circle2 from '../../../public/hero1.png';
import circle3 from '../../../public/hero2.png';

const ImageSlider = () => {
    const images = [circle1, circle2, circle3]; // Add your image sources here
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className='relative w-full'>
            {/* React Responsive Carousel Component */}
            <Carousel
                selectedItem={currentIndex}
                onChange={(index) => setCurrentIndex(index)} // Update currentIndex when slide changes
                autoPlay={true} // Set to true if you want autoPlay feature
                infiniteLoop={true} // Enable infinite loop for the carousel
                showArrows={false} // Enable previous and next arrows
                showThumbs={false} // Disable thumbs navigation
                showStatus={false} // Disable status display
                showIndicators={true}
                dynamicHeight={false} // Disable dynamic height adjustment
                emulateTouch={true} // Enable touch swipe support for mobile
                transitionTime={500} // Transition duration (ms)
            >
                {images.map((src, index) => (
                    <div key={index} className='relative'>
                        <Image
                            src={src}
                            alt={`Image ${index + 1}`}
                            className='md:w-[500px] md:h-[400px] rounded-tr-[40%] rounded-tl-[60%] rounded-bl-[40%] rounded-br-[50%] object-cover'
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default ImageSlider;
