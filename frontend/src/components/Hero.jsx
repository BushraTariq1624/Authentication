import { useNavigate } from 'react-router-dom';
import Card from './Card';
import React from 'react'
import { toast } from "react-toastify";

// import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Hero = () => {
	const navigate = useNavigate();
	const handleLogin = () => {
		navigate('/login');
	};
	const { isAuthenticated } = useSelector((state) => state.auth);
	
	return (
		<>
			{isAuthenticated ? (<section className="text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-wrap -m-4">
						<div className="p-4 lg:w-1/3">
							<div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
								<h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
									Pending
								</h1>
								
									<Card/>
							</div>
						</div>
						<div className="p-4 lg:w-1/3">
							<div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
								<h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
									In Process
								</h1>
								<p className="leading-relaxed mb-3">
									Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
									microdosing tousled waistcoat.
								</p>
							</div>
						</div>
						<div className="p-4 lg:w-1/3">
							<div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
								<h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
									Done
								</h1>
								<p className="leading-relaxed mb-3">
									Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
									microdosing tousled waistcoat.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>) : (
				<section className="text-gray-600 body-font">
					<div className="container px-5 py-24 mx-auto">
						<div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
							<h1 className="flex-grow sm:pr-16 text-5xl font-medium title-font text-gray-900">Welcome To Our Task Manager.
								<p>Please Login Your Account To Add & Manage Task</p>
							</h1>
							<button className="flex-shrink-0 text-white bg-orange-400 border-0 py-2 px-8 focus:outline-none hover:bg-orange-300 rounded text-lg mt-10 sm:mt-0" onClick={handleLogin}>Login</button>
						</div>
					</div>
				</section>)}
		</>

	)
}

export default Hero
// useEffect(() => {
//     if (!isAuthenticated) return;

//     const fetchAllTasks = async () => {
//         ...
//     };
//     fetchAllTasks();
// }, [isAuthenticated]);