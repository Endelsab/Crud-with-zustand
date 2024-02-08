import React, { useState } from "react";
import { useStore } from "zustand";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Update = () => {
	const [student, setStudent] = useState({
		Firstname: "",
		Lastname: "",
		Program: "",
	});
	

	const handleChange = (e) => {
		setStudent({ ...student, [e.target.name]: e.target.value });
	};

	const location = useLocation();

	const studentId = location.pathname.split("/")[2];
	const navigate = useNavigate();

	//Update Student
	// const upateStudent = useStore((state)=> state.upateStudent)

	const update = async () => {
		try {
			await axios.put(
				"http://localhost:9000/student/edit/" + studentId,
				student,
			);
			//upateStudent(studentId,student)

			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div className="flex items-center justify-center h-screen text-center">
				<div className=" w-[430px] h-[400px]  border rounded-md   border-purple-500 ">
					<h1 className="text-purple-500 text-2xl mt-10 font-semibold">
						Update the Student
					</h1>
					<div className="flex flex-col gap-7 mt-8 justify-center items-center ">
						<input
							className="bg-transparent border border-purple-500 p-2 w-56   hover:w-96 duration-300 rounded-md outline-none  focus:w-96 text-white "
							type="text"
							onChange={handleChange}
							name="Firstname"
						/>
						<input
							className="bg-transparent border focus:w-96  hover:w-96 outline-none duration-300 text-white border-purple-500 p-2 w-56 rounded-md "
							type="text"
							onChange={handleChange}
							name="Lastname"
						/>
						<input
							className="bg-transparent outline-none border  hover:w-96 focus:w-96 duration-300 text-white border-purple-500 p-2 w-56 rounded-md "
							type="text"
							onChange={handleChange}
							name="Program"
						/>
						<button
							onClick={update}
							className="bg-purple-500 hover:bg-pink-600 hover:scale-125  duration-200 rounded-md w-56 p-1 font-mono text-white">
							Save
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Update;
