"use client"
import React, { useState } from 'react';
import ImageSlider from './ImageSlider';
import StudentFormModal from './StudentForm';

function HeroSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <div id="home" className='w-full flex justify-center items-center py-32'>
            <section className="2xl:w-3/5 md:w-3/4 w-full bg-white md:py-16 2xl:py-28 md:px-6 flex flex-col-reverse items-center md:flex-row md:justify-between">
                {/* Text Section */}
                <div className="md:w-2/3 w-full text-center md:text-left md:mt-0 mt-40">
                    <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-black">
                        Welcome to
                    </h1>
                    <h1 className="text-[8rem] text-[#DD3344] font-nunito font-bold md:leading-none leading-none">Flora</h1>
                    <h2 className="md:text-[6rem] text-[4rem] font-black font-gabriola text-[#F9C126] text-shadow-custom leading-tight">
                        Play School
                    </h2>
                    <p className="text-xl lg:text-4xl text-[#2747E2] font-palatino font-semibold">
                        Where every children blossoms
                    </p>
                    <button
                        onClick={openModal}
                        className="mt-6 px-6 py-3 bg-purple-200 text-black font-semibold rounded-full shadow-lg hover:bg-purple-300 transition">
                        Fill Up Online Form
                    </button>
                </div>

                {/* Image Collage */}
                <div className="relative md:w-2/3 w-4/5 flex justify-center items-center md:mt-0 mt-20">
                    <div className='absolute'>
                        {/* <Image src={circle1} alt="Child 1" className='w-[500px] h-[400px] bg-blue-500 rounded-tr-[40%] rounded-tl-[60%] rounded-bl-[40%] rounded-br-[50%] object-cover'/> */}
                        <ImageSlider />
                    </div>
                </div>
            </section>
            <StudentFormModal isOpen={isModalOpen} closeModal={closeModal} />
        </div>
    );
}

export default HeroSection;
