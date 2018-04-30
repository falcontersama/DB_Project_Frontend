import React, { Component } from 'react'
import { Table, Button } from 'react-bootstrap'
import styled from 'styled-components'
import axios from 'axios'

import ViewSubjects from '../viewSubjects/ViewSubjects'

import { MOCK_STUDENTS } from './MockData.json'
import { MOCK_SUBJECTS } from '../viewSubjects/MockData.json'

const STUDENTS_API_URL = 'http://localhost:3006/allStudents'
const COURSE_API_URL = 'http://localhost:3006/studentCourse'

const ViewStudentBox = styled.div`
    border:1px solid lightgrey;
    padding:10px;
    width:100wh;
    max-height:50vh;
`;

const ViewStudentTable = styled.div`
    width:100wh;
    max-height:35vh;
    overflow-y:scroll;
`;

export default class TeacherViewStudentsAll extends Component {
	constructor(props) {
		super(props)
		this.state = { students: [], selectedStudent: null, subjects: [] }
		this.selectStudent = this.selectStudent.bind(this)
	}

	selectStudent(student) {
		this.setState({selectedStudent: student})
		axios.get(COURSE_API_URL, {params: {studentID: student.studentID}})
			.then((response) => this.setState({subjects: response.data.data}))
			.catch((error) => console.log(error))
	}

	componentWillMount() {
		axios.get(STUDENTS_API_URL, {params: {teacherID: this.props.usernameLog}})
			.then((response) => this.setState({students: response.data.data}))
			.catch((error) => console.log(error))
	}

	render() {
		return (
			<div>
				<ViewStudentBox>
					<h1>รายชื่อของนิสิตในสังกัด</h1>
					<ViewStudentTable>
						<Table bordered condensed hover responsive>
							<thead>
								<tr>
									<th>รหัส</th>
									<th>ชื่อนิสิต</th>
								</tr>
							</thead>
							<tbody>
								{this.state.students.map((x, idx) => <tr key={idx}>
									<td>{x.studentID}</td>
									<td><Button bsStyle='link' onClick={() => {this.selectStudent(x)}}>{x.studentName}</Button></td>
								</tr>)}
							</tbody>
						</Table>
					</ViewStudentTable>
				</ViewStudentBox>
				{this.state.selectedStudent !== null && 
					<ViewStudentBox>
						<ViewSubjects
							subjects={this.state.subjects}
							nameLog={this.state.selectedStudent.studentID}
							usernameLog={this.state.selectedStudent.studentName}/>
					</ViewStudentBox>}
			</div>
		)
	}
}