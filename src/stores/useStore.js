import { create } from "zustand";

export const useStore = create((set) => ({
	studentList: [],

	fetchStudent: async () => {
		const response = await fetch("http://localhost:9000/student");
		const result = await response.json();
		set(() => ({ studentList: result }));
	},

	addStudent: (student) => set((state) => ({ ...state.studentList, student })),

	deleteStudent: (student) =>
		set((state) => ({
			studentList: state.studentList.filter(
				(students) => students.dbID !== student,
			),
		})),

	upateStudent: (studentId, updatedStudent) =>
		set((state) => ({
			studentList: state.studentList.map((student) =>
				student.dbID === studentId
					? { ...student, ...updatedStudent }
					: student,
			),
		})),
}));
