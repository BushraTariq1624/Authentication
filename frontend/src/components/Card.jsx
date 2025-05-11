import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faTrash } from "@fortawesome/free-solid-svg-icons";
// import { handleError, handleSuccess } from "../../utils/utils";
// const apiUrl = import.meta.env.VITE_REACT_APP_BACKEND_API_BASEURL;

const Card = () => {
    const [Data, setData] = useState({ tasks: [] });
    const userId= localStorage.getItem("userId")

    const headersGet = {
        // userId: localStorage.getItem("userId"),
        userId,
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    useEffect(() => {
        //  const token = localStorage.getItem("token")
        const fetch = async () => {
            // console.log("Headers being sent: ", headers); // ADD THIS
            try{
                const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/Addtask/getalltasks/${userId}`, {
                headers: headersGet,
            });
            console.log(response.data);
            setData(response.data.user);
            }catch(error){
                console.error("Error:", error);
            }
        };
        fetch();
    }, []);
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {Data &&
                    Data.tasks &&
                    Data.tasks.map((items, i) => (
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
                                    {items.title}
                                </h3>
                                <p className="text-gray-600">{items.description}</p>
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
        </>
    )
}

export default Card