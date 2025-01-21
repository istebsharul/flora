"use client";
import { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const scriptURL = process.env.SCRIPT_URL;

const StudentFormModal = ({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) => {
  const [name, setName] = useState<string>("");
  const [selectedClass, setSelectedClass] = useState<string>("Montessori1");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const modalRef = useRef<HTMLDivElement>(null); // Ref for modal container

  // Close modal if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeModal]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("class", selectedClass);
    formData.append("phone", phoneNumber);
    formData.append("email", email);

    if (!scriptURL) {
      console.error("SCRIPT_URL is not defined");
      toast.error("Submission failed: Missing script URL.");
      return;
    }

    // Using toast.promise for better user feedback
    toast.promise(
      axios.post(scriptURL, formData),
      {
        loading: "Processing...",
        success: () => {
          closeModal();
          return "Thank you! We will contact you shortly.";
          setName('');
          setPhoneNumber('');
          setEmail('')
        },
        error: (err: unknown) => {
          console.error("Error submitting form:", err);
          return "Could not save. Please try again later.";
        },
      }
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
      <div
        ref={modalRef}
        className="relative bg-blue-50 p-8 rounded-xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-red-500 mb-5">
          Student Registration
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 rounded">
          <div>
            <label htmlFor="name" className="block">
              Student Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border px-4 py-2 w-full rounded-xl shadow-inner focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="class" className="block">
              Class
            </label>
            <div className="relative">
              <select
                id="class"
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="border px-4 py-3 w-full pr-16 rounded-xl shadow-inner focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="Montessori1">Montessori1 - 2.5-3.5 Yrs</option>
                <option value="Montessori2">Montessori2 - 3.5-4.5 Yrs</option>
                <option value="LKG">LKG - 4.5-5.5 Yrs</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block">
              Phone Number (Required)
            </label>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className="border px-4 py-2 w-full rounded-xl shadow-inner focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block">
              Email (Optional)
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border px-4 py-2 w-full rounded-xl shadow-inner focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-green-500 text-white px-4 py-2 rounded-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentFormModal;
