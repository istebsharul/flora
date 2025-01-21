import React from 'react';
import Image from 'next/image';
import ourCurriculum from '../../../public/ourCurriculum.png';
import ourFacilities from '../../../public/ourFacilities.png';
import ourStaff from '../../../public/ourStaff.png';

function About() {
    return (
        <div id="about" className='flex flex-col justify-center items-center py-20'>
            <div className='md:w-3/5 flex flex-col justify-center items-center'>
                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold md:py-10'>
                    About Us
                </h1>
                <p className='text-center text-lg p-10'>At <strong>Flora Play School</strong>, we believe that the early age of a child&apos;s life are the most critical in shaping their future. Our mission is to provide a nurturing and supportive environment that fosters the physical, emotional, social, and cognitive development of our students.We believe that play is the most effective way for young children to learn and develop. Our curriculum is designed to provide a balance of structured and unstructured play, allowing children to explore, discover, and learn at their own pace.</p>
            </div>
            <div className='md:w-3/5 flex md:flex-row flex-col gap-4 justify-center items-center md:p-0 p-8'>
                <div className='md:w-2/5 h-1/2 px-8 py-10 flex flex-col justify-center items-center rounded-3xl bg-[#FF7373]/50'>
                    <h1 className='text-2xl font-bold'>Our Curriculum</h1>
                    <div className='p-2'><Image src={ourCurriculum} alt="Description" height={100}/></div>
                    <p className='p-2 text-center text-sm'>
                        Our curriculum promotes independence, creativity, and lifelong learning. Through Practical Life Skills, children gain confidence with tasks like cooking and self-care. Sensorial Education enhances fine motor skills, while Language and Literacy focus on reading and communication. Mathematics builds foundational concepts, Cultural Studies and reasoning helps to grow.
                    </p>
                </div>
                <div className='md:w-2/5 px-8 py-10 flex flex-col justify-center items-center rounded-3xl bg-[#FFDD64]/50'>
                    <h1 className='text-2xl font-bold'>Our Facilities</h1>
                    <div className='p-2'><Image src={ourFacilities} alt="Description" height={100}/></div>
                    <p className='p-2 text-center text-sm'>
                        Our facility offers spacious classrooms, outdoor play areas, and beautiful gardens for physical activity. We have a cozy library and reading nook, an art studio for creative expression, and a music room that promotes rhythm, coordination, and overall development. Our environment fosters fun and learning, helping children grow in all aspects of their development.
                    </p>
                </div>
                <div className='md:w-2/5 px-8 py-10 flex flex-col justify-center items-center rounded-3xl bg-[#65C0D9]/50'>
                    <h1 className='text-2xl font-bold'>Our Staff</h1>
                    <Image src={ourStaff} alt="Description" height={100}/>
                    <p className='p-2 text-center text-sm'>
                    Our team is made up of highly qualified, experienced, and passionate teachers. With a low student-to-teacher ratio, we offer personalized care and attention. We are deeply dedicated to nurturing each child&apos;s unique potential, providing the support, guidance, and encouragement they need to thrive and achieve success in their personal, academic, and social growth in a safe, supportive environment.</p>
                </div>
            </div>
        </div>
    )
}

export default About