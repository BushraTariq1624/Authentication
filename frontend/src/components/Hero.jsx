import { useNavigate } from 'react-router-dom';
// import Card from './Card';
import axios from "axios"
import React, { useState, useEffect } from 'react'
import { toast } from "react-toastify";

// import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Hero = () => {
	const navigate = useNavigate();
	const handleLogin = () => {
		navigate('/login');
	};
	const { isAuthenticated } = useSelector((state) => state.auth);
	const [Data, setData] = useState({ tasks: [] });
	const userId = localStorage.getItem("userId")

	const headersGet = {
		// userId: localStorage.getItem("userId"),
		userId,
		Authorization: `Bearer ${localStorage.getItem("token")}`,
	};
	useEffect(() => {
		//  const token = localStorage.getItem("token")
		const fetch = async () => {
			// console.log("Headers being sent: ", headers); // ADD THIS
			try {
				const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/Addtask/getalltasks/${userId}`, {
					headers: headersGet,
				});
				console.log(response.data);
				setData(response.data.user);
			} catch (error) {
				console.error("Error:", error);
			}
		};
		fetch();
	}, []);
	return (
		<>
			{isAuthenticated ? (<section className="text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto">

					<div className="flex flex-wrap -m-4">
						<div className="p-4 lg:w-1/3">
							<div className="h-full bg-orange-300 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
								<h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
									Pending
								</h1>
								<div className="flex flex-col gap-6 p-6">
									{Data &&
										Data.tasks &&
										Data.tasks.filter(task => task.status === "pending").map((items) => (
											<div
												key={items._id}
												className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col justify-between"
											>
												{/* <div className="flex justify-end gap-6 text-gray-600 text-xl">
                                <FontAwesomeIcon
                                    icon={faTrash}
                                    className="hover:text-red-500 cursor-pointer transition duration-300"
                                    onClick={() => deleteTask(items._id)}
                                />
                            </div> */}
												<div>
														<h3 className="text-2xl font-bold text-gray-800 mb-2">
															Task Title: {items.title}
														</h3>
														<p className="text-gray-600">Assigned To: {items.assignedTo}</p>

														<p className="text-gray-600">Description: {items.description}</p>
														<p className="text-gray-600">Status: {items.status}</p>
													

												</div>
												<div className="mt-6 flex flex-col gap-3">
													{/* <button
                                    className={`${items.complete === false ? "bg-fuchsia-800" : "bg-green-700"
                                        } text-white py-2 rounded font-semibold transition duration-300 hover:cursor-pointer`}
                                    onClick={() => handleCompleteTask(items._id)}
                                > */}
													{/* {items.complete === true ? "Complete" : "In Progress"} */}
													{/* </button> */}
												</div>
											</div>
										))}
								</div>
							</div>
						</div>
						<div className="p-4 lg:w-1/3">
							<div className="h-full  bg-orange-300  bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
								<h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
									In Progress
								</h1>
								<div className="flex flex-col gap-6 p-6">
									{Data &&
										Data.tasks &&
										Data.tasks.filter(task => task.status === "in-progress").map((items) => (
											<div
												key={items._id}
												className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col justify-between"
											>
												{/* <div className="flex justify-end gap-6 text-gray-600 text-xl">
                                <FontAwesomeIcon
                                    icon={faTrash}
                                    className="hover:text-red-500 cursor-pointer transition duration-300"
                                    onClick={() => deleteTask(items._id)}
                                />
                            </div> */}
												<div>
												
														<h3 className="text-2xl font-bold text-gray-800 mb-2">
															Task Title: {items.title}
														</h3>
														<p className="text-gray-600">Assigned To: {items.assignedTo}</p>

														<p className="text-gray-600">Description: {items.description}</p>
														<p className="text-gray-600">Status: {items.status}</p>
												

												</div>
												<div className="mt-6 flex flex-col gap-3">
													{/* <button
                                    className={`${items.complete === false ? "bg-fuchsia-800" : "bg-green-700"
                                        } text-white py-2 rounded font-semibold transition duration-300 hover:cursor-pointer`}
                                    onClick={() => handleCompleteTask(items._id)}
                                > */}
													{/* {items.complete === true ? "Complete" : "In Progress"} */}
													{/* </button> */}
												</div>
											</div>
										))}
								</div>
							</div>
						</div>
						<div className="p-4 lg:w-1/3">
							<div className="h-full  bg-orange-300  bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
								<h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
									Done
								</h1>
								<div className="flex flex-col gap-6 p-6">
									{Data &&
										Data.tasks &&
										Data.tasks.filter(task => task.status === "done").map((items) => (
											<div
												key={items._id}
												className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col justify-between"
											>
												{/* <div className="flex justify-end gap-6 text-gray-600 text-xl">
                                <FontAwesomeIcon
                                    icon={faTrash}
                                    className="hover:text-red-500 cursor-pointer transition duration-300"
                                    onClick={() => deleteTask(items._id)}
                                />
                            </div> */}
												<div>
													
														<h3 className="text-2xl font-bold text-gray-800 mb-2">
															Task Title: {items.title}
														</h3>
														<p className="text-gray-600">Assigned To: {items.assignedTo}</p>

														<p className="text-gray-600">Description: {items.description}</p>
														<p className="text-gray-600">Status: {items.status}</p>
													

												</div>
												<div className="mt-6 flex flex-col gap-3">
													{/* <button
                                    className={`${items.complete === false ? "bg-fuchsia-800" : "bg-green-700"
                                        } text-white py-2 rounded font-semibold transition duration-300 hover:cursor-pointer`}
                                    onClick={() => handleCompleteTask(items._id)}
                                > */}
													{/* {items.complete === true ? "Complete" : "In Progress"} */}
													{/* </button> */}
												</div>
											</div>
										))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section >) : (
				<section className="text-gray-600 body-font">
					<div className="container px-5 py-24 mx-auto">
						<div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
							<h1 className="flex-grow sm:pr-16 text-5xl font-medium title-font text-gray-900">Welcome To Our Task Manager.
								<p>Please Login Your Account To Add & Manage Task</p>
							</h1>
							<button className="flex-shrink-0 text-white bg-orange-400 border-0 py-2 px-8 focus:outline-none hover:bg-orange-300 rounded text-lg mt-10 sm:mt-0" onClick={handleLogin}>Login</button>
						</div>
					</div>
				</section>)
			}
		</>

	)
}

export default Hero
