"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from '../../../public/logo.png';
import { FaDownload } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { GiArchiveRegister } from "react-icons/gi";
import StudentFormModal from './StudentForm';

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <div id="footer" className='w-full'>
            <StudentFormModal isOpen={isModalOpen} closeModal={closeModal} />
            <footer className='w-screen bg-purple-100 flex flex-col justify-center items-center'>
                {/* Middle Section - Info & Links */}
                <div className='w-4/6 text-gray-800 py-10 text-center lg:text-left'>
                    <div className='container flex md:flex-row flex-col flex-wrap justify-center lg:justify-between items-center'>
                        <div className='md:w-1/3 flex flex-col md:justify-start justify-center items-center'>
                            <Image src={logo} alt='Company Logo' className='flex justify-start mb-4 lg:mx-0' />
                            <p className='md:pl-2'>At Flora Play School, we prioritize early childhood development through a nurturing environment, combining structured and unstructured play to foster physical, emotional, social, and cognitive growth.</p>
                            <div className='flex justify-center items-center space-x-4 my-4'>
                                <FaFacebookF />
                                <FaTwitter />
                                <FaInstagram />
                                <FaLinkedinIn />
                            </div>
                        </div>
                        <div className='md:w-1/3 text-left md:text-2xl flex flex-wrap justify-center gap-10 md:mt-10 lg:mt-0 p-4 md:p-0'>
                            <div>
                                <h3 className='font-bold'>School</h3>
                                <ul className='text-sm'>
                                    <li>About Us</li>
                                    <li>How It Works</li>
                                    <li>Contact</li>
                                    <li>Our Team</li>
                                    <li>Careers</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className='font-bold'>Resources</h3>
                                <ul className='text-sm'>
                                    <li>Blog</li>
                                    <li>Case Studies</li>
                                    <li>Guides</li>
                                    <li>eBooks</li>
                                </ul>
                            </div>
                        </div>
                        <div className='md:w-1/5 flex flex-col justify-end items-end space-y-3'>
                            <a
                                href={`tel:+917003561315`}
                                className='w-full py-2 px-8 flex justify-center items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold'>
                                <IoIosCall />
                                Call Now
                            </a>
                            <button
                                onClick={openModal}
                                className='w-full py-2 px-8 flex justify-center items-center gap-2 rounded-full bg-green-600 hover:bg-green-700 text-white font-bold'>
                                <GiArchiveRegister />
                                Register
                            </button>
                            <a
                                href='/flora_prospectus.pdf'
                                download
                                className='w-full py-2 px-8 flex justify-center items-center gap-2 rounded-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold'
                            >
                                <FaDownload />Prospectus
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Social Media */}
                <div className='text-gray-400 pb-2 text-center text-purple-900'>
                    &copy; 2025 <span className="font-semibold">Flora Play School</span>. All rights reserved.
                    <span className="px-2">
                        Build with 💜 by{' '}
                        <a
                            className="font-bold"
                            href="https://www.ontopgroups.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ontop Groups
                        </a>
                    </span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;