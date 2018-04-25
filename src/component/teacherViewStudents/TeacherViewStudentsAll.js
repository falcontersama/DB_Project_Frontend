import React, { Component } from 'react'
import { Table, Button } from 'react-bootstrap'
import styled from 'styled-components'
import axios from 'axios'

import ViewSubjects from '../viewSubjects/ViewSubjects'

import { MOCK_STUDENTS } from './MockData.json'
import { MOCK_SUBJECTS } from '../viewSubjects/MockData.json'

const API_URL = 'http://localhost:3006/studentCourse'

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
		this.state = { students: MOCK_STUDENTS, selectedStudent: null, subjects: MOCK_SUBJECTS }
		this.selectStudent = this.selectStudent.bind(this)
	}

	selectStudent() {
		this.setState({selectedStudent: x})
		axios.get(API_URL, {params: {studentID: username}})
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
								{this.state.students.map((x, idx) => <tr>
									<td>{x.studentID}</td>
									<td><Button bsStyle='link' onClick={() => {this.selectStudent()}}>{x.studentName}</Button></td>
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