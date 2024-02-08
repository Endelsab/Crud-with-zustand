import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../stores/useStore";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

const List = () => {
	const studentList = useStore((state) => state.studentList);
	const fetchStudent = useStore((state) => state.fetchStudent);

	useEffect(() => {
		const fetch = async () => {
			try {
				await axios.get(fetchStudent());
			} catch (error) {
				console.log(error);
			}
		};
		fetch();
	}, []);

	//delete Data
	const deleteStudent = useStore((state) => state.deleteStudent);

	const remove = async (id) => {
		window.location.reload();
		try {
			await axios.delete("http://localhost:9000/student/" + id);
			deleteStudent(id);
		} catch (error) {
			console.log(error);
		}
	};

	const upateStudent = useStore((state)=> state.upateStudent)
    const edit = (studentID,updatedStudent) =>{
		upateStudent(studentID,updatedStudent)
	}
	return (
		<>
			<div className=" flex justify-center   p-5 m-5">
				<div className="border overflow-x-auto  border-purple-600 w-[800px] h-[500px] mt-10 justify-center items-center ">
					<h1 className="text-purple-500 text-2xl font-bold pt-2 ml-2  ">
						Student list
					</h1>

					<div>
						<div className="flex text-end justify-end mr-3  ">
							<button className="text-black font-semibold hover:scale-110 bg-green-600 p-1 rounded ">
								{" "}
								<Link to="/Add">Add student</Link>
							</button>
						</div>

						<div className=" mt-2 text-center ">
							<table className="border  shadow-2xl min-w-full  border-collapse  border-gray-600">
								<thead className="text-purple-500 border   border-purple-600 font-extrabold ">
									<tr className=" p-[50px]">
										<th className=" p-3">Firstname</th>
										<th className=" p-3">Lastname</th>
										<th className=" p-3">Program</th>
										<th className=" p-3">Action</th>
									</tr>
								</thead>

								<tbody className="border  border-gray-600 ">
									{studentList.map((student, index) => (
										<tr
											key={index}
											className=" border border-purple-600 p-3 text-cyan-500 hover:bg-purple-900 hover:text-purple-200 transition duration-400 ease-in-out ">
											<td>{student.Firstname}</td>
											<td>{student.Lastname}</td>
											<td>{student.Program}</td>
											<td>
												<button onClick={()=> edit(student.dbID,student)} className="text-yellow-500 hover:scale-150">
													<Link to={`/Update/${student.dbID}`}>
														<FaEdit />
													</Link>
												</button>
												<button
													onClick={() => remove(student.dbID)}
													className="ml-3 text-red-500 hover:scale-150">
													<FaTrashCan />
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default List;
