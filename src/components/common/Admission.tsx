"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import childrenbg from '../../../public/childrenbg.png';
import StudentFormModal from './StudentForm';


function Admission() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div id="admissions" className='w-screen py-20'>
      <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-semibold py-10'>
        Admission
      </h1>
      <div className='relative'>
        <Image src={childrenbg} className='w-full h-80 object-cover' alt='' />
        <div className='md:w-1/2 w-3/4 flex flex-col justify-center items-center space-y-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <p className='md:text-3xl text-xl text-center'>We welcome applications from children aged 2.5-5 years. Please contact us to arrange a tour of our school and to learn more about our admissions process.</p>
          <button onClick={openModal} className='bg-[#FFCC00] px-10 py-2 text-md font-bold rounded-full hover:shadow-2xl'>Enroll Now</button>
        </div>
      </div>
      <StudentFormModal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  )
}

export default Admission