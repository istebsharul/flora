"use client";
import React, { useState } from 'react';
import toast from 'react-hot-toast';

interface FormData {
    name: string;
    email: string;
    phoneNumber: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const initialFormData: FormData = {
        name: '',
        email: '',
        phoneNumber: '',
        message: 'Hello Flora Play School,',
    };

    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [invalidFields, setInvalidFields] = useState<Partial<FormData>>({});

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateFormData = (data: FormData): Partial<FormData> => {
        const errors: Partial<FormData> = {};

        if (data.name.trim() === '') errors.name = '';
        if (data.email.trim() === '' || !data.email.includes('@') || !data.email.includes('.')) errors.email = '';
        if (data.message.trim() === '') errors.message = '';

        if (data.phoneNumber && !/^\d*$/.test(data.phoneNumber)) errors.phoneNumber = '';

        return errors;
    };

    const handleSendMessage = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const errors = validateFormData(formData);

            if (Object.keys(errors).length === 0) {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    toast.success("Thank you for reaching out! We have received your message and will get back to you.");
                    setFormData(initialFormData);
                } else {
                    toast.error("Failed to send the message.");
                }

                setInvalidFields({});
            } else {
                if (errors.email === '') toast.error("Invalid email address. Please include '@'.");
                if (errors.phoneNumber === '') toast.error("Phone number must contain only numbers.");
                if (errors.name === '') toast.error("Name is required.");
                if (errors.message === '') toast.error("Message cannot be empty.");
                setInvalidFields(errors);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div id="contact" className="w-full flex flex-col justify-center items-center text-black md:pt-40 pt-10 pb-20">
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold py-10'>
                        Contact Us
                    </h1>
                    <p className="w-11/12 mb-8 text-center">
                        We are here to answer all your questions about Flora Play School and how we can help your child.
                    </p>
                </div>
                <form onSubmit={handleSendMessage} className={`block md:w-3/6 w-4/5 space-y-8`}>
                    <div>
                        <h1 className='py-1'>Full Name</h1>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`w-full pl-5 py-2 bg-transparent text-black border rounded-xl placeholder-[#5A5A5A] placeholder:text-sm focus:border-purple-500 ${invalidFields.name ? 'border-red-500' : 'border-[#5A5A5A]'}`}
                        />
                    </div>
                    <div className="mb-4">
                        <h1>Email</h1>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full pl-5 py-2 bg-transparent text-black border rounded-xl placeholder-[#5A5A5A] placeholder:text-sm focus:border-purple-500 ${invalidFields.email ? 'border-red-500' : 'border-[#5A5A5A]'}`}
                        />
                    </div>
                    <div className="mb-4">
                        <div className=' flex justify-between'>
                            <p>Phone</p>
                            <p className='text-[#5A5A5A]'>(Optional)</p>
                        </div>
                        <input
                            type="tel"
                            name="phoneNumber"
                            placeholder="Phone number"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            className={`w-full pl-5 py-2 bg-transparent text-black border rounded-xl placeholder-[#5A5A5A] placeholder:text-sm focus:border-purple-500 ${invalidFields.phoneNumber ? 'border-red-500' : 'border-[#5A5A5A]'}`}
                        />
                    </div>
                    <div className="mb-4">
                        <textarea
                            name="message"
                            placeholder="Your message"
                            value={formData.message}
                            onChange={handleInputChange}
                            className={`w-full pl-5 py-2 bg-transparent text-black border rounded-xl placeholder-[#5A5A5A] placeholder:text-sm focus:border-purple-500 ${invalidFields.message ? 'border-red-500' : 'border-[#5A5A5A]'}`}
                        />
                    </div>
                    <div className='flex justify-center items-center'>
                        <button
                            type="submit"
                            className="md:w-1/4 w-full py-3 text-white rounded-full bg-gradient-to-r from-purple-900 to-purple-500 hover:from-purple-800 hover:to-purple-400"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ContactForm;
