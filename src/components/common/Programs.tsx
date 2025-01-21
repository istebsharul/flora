import React from 'react';
import Image from 'next/image';
import mont1 from '../../../public/mont1.png';
import mont2 from '../../../public/mont2.png';
import lkg from '../../../public/lkg.png';

function Programs() {
    return (
        <div id="programs" className='w-full flex flex-col justify-center items-center md:py-20 py-10'>
            <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold py-10'>
                Programs
            </h1>
            <div className='w-full md:w-1/2 space-y-8 flex flex-col justify-center items-center text-center md:text-left'>
                <div className='md:w-full w-3/4 flex flex-col md:flex-row justify-center items-center rounded-3xl md:rounded-full bg-[#FF7373]/50'>
                    <div className='p-4 w-full flex md:justify-start justify-center items-center md:w-1/4'>
                        <Image src={mont1} alt='mont1' />
                    </div>
                    <div className='w-full md:w-3/4 flex flex-col py-4 px-4 md:pr-8'>
                        <h2 className='text-2xl sm:text-3xl md:text-lg lg:text-xl font-semibold'>
                            Montessori 1
                        </h2>
                        <p className='text-md lg:text-md'>
                            Our Montessori 1 class is designed for children aged 2.5-3.5 years. In this class, we focus on developing fine motor skills, hand-eye coordination, and social skills.
                        </p>
                    </div>
                </div>
                <div className='md:w-full w-3/4 flex flex-col md:flex-row-reverse justify-center items-center rounded-3xl md:rounded-full bg-[#FFDD64]/50'>
                    <div className='p-4 w-full flex justify-center md:justify-end md:w-1/4'>
                        <Image src={mont2} alt='mont2' />
                    </div>
                    <div className='w-full md:w-3/4 flex flex-col py-4 px-4 md:pl-16'>
                        <h2 className='text-2xl sm:text-3xl md:text-lg lg:text-xl font-semibold'>
                            Montessori 2
                        </h2>
                        <p className='text-md lg:text-md'>
                            Our Montessori 2 class is designed for children aged 3.5-4.5 years. In this class, we build on the skills developed in Mont 1, introducing new materials and activities that promote independence, self-confidence, and academic readiness.
                        </p>
                    </div>
                </div>
                <div className='md:w-full w-3/4 flex flex-col md:flex-row justify-center items-center rounded-3xl md:rounded-full bg-[#65C0D9]/50'>
                    <div className='p-4 w-full flex md:justify-start justify-center items-center md:w-1/4'>
                        <Image src={lkg} alt='lkg' />
                    </div>
                    <div className='w-full md:w-3/4 flex flex-col py-4 px-4 md:pr-8'>
                        <h2 className='text-2xl sm:text-3xl md:text-lg lg:text-xl font-semibold'>
                            L.K.G (Lower Kindergarten)
                        </h2>
                        <p className='text-md lg:text-md'>
                            Our LKG class is designed for children aged 4-5 years. In this class, we focus on preparing children for formal schooling, introducing more structured lessons and activities that promote literacy, numeracy, and social skills.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Programs;
