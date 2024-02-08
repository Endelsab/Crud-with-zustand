import React, { useState } from "react";
import { useStore } from "../stores/useStore";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
	
	const [student, setStudent] = useState({
		Firstname: "",
		Lastname: "",
		Program: "",
	});

	const handleChange = (e) => {
		setStudent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	
	//Add Data
	const navigate = useNavigate();
	const addStudent = useStore((state) => state.addStudent);

	const add = async (e) => {
		e.preventDefault();
		try {
			await axios.post("http://localhost:9000/studentadd", student);
			addStudent(student);
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="flex items-center justify-center h-screen text-center">
			<div className=" w-[430px] h-[400px]  border rounded-md   border-purple-500 ">
				<h1 className="text-purple-500 text-2xl mt-10 font-semibold">
					Add new student
				</h1>
				<div className="flex flex-col gap-7 mt-8 justify-center items-center ">
					<input
						className="bg-transparent border border-purple-500 p-2 w-56 duration-300 rounded-md outline-none  focus:w-96 text-white hover:w-96 "
						type="text"
						placeholder="Firstname"
						name="Firstname"
						onChange={handleChange}
					/>
					<input
						className="bg-transparent border focus:w-96  hover:w-96 outline-none duration-300 text-white border-purple-500 p-2 w-56 rounded-md "
						type="text"
						placeholder="Lastname"
						name="Lastname"
						onChange={handleChange}
					/>
					<input
						className="bg-transparent outline-none  hover:w-96 border focus:w-96 duration-300 text-white border-purple-500 p-2 w-56 rounded-md "
						type="text"
						placeholder="Program"
						name="Program"
						onChange={handleChange}
					/>
					<button
						onClick={add}
						className="bg-purple-500 hover:bg-pink-600 hover:scale-125  duration-200 rounded-md w-56 p-1 font-mono text-white">
						Add
					</button>
				</div>
			</div>
		</div>
	);
};

export default Add;
