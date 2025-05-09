import React, { useState } from 'react';
import { toast } from "react-toastify";


const Addtask = () => {
  const [formData, setFormData] = useState({
    title: '',
    assignedTo: '',
    status:'',
    description: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    const token = localStorage.getItem("token");

    e.preventDefault();
    setStatus('Submitting...');

    try {
      const response = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/Addtask/task`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,

        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Task submitted:', result);
      setStatus('Task added successfully!');
      toast.success("task added successfully")
      setFormData({ title: '', assignedTo: '', description: '' }); // Reset form
    } catch (error) {
      console.error('Error submitting task:', error);
      setStatus('Failed to add task. Please try again.');
    }
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Add Task
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Enter Your Regular Tasks
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    Title
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                    Assigned To
                  </label>
                  <input
                    type="text"
                    id="status"
                    name="assignedTo"
                    value={formData.assignedTo}
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                    Status
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                    Description
                  </label>
                  <textarea
                    id="message"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto text-white bg-orange-400 border-0 py-2 px-8 focus:outline-none hover:bg-orange-300 rounded text-lg"
                >
                  Add Task
                </button>
              </div>
              {status && (
                <div className="p-2 w-full text-center text-sm text-blue-600">
                  {status}
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Addtask;
