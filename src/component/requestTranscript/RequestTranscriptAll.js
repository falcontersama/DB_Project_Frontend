import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Table } from 'react-bootstrap'

const COURSE_API_URL = 'http://localhost:3006/studentCourse'

const TranscriptBox = styled.div`
    border:2px solid black;
		padding:20px;
		margin:50px;
		overflow-y:scroll;
		max-height:80vh;
`;

function getSemester(subject) {
	return subject.year + '/' + subject.semester;
}

function parseSemester(sem) {
	var a = sem.split('/')
	return 'Semester ' + a[1] + ', Year ' + a[0]
}

function getSemesterList(courses) {
	return [...new Set(courses.map((obj, idx) => getSemester(obj)))].sort((a, b) => (a === b ? 0 : a > b ? 1 : -1))
}

// const gradeToScore = {'A': 4.0, 'B+': 3.5, 'B': 3.0, 'C+': 2.5, 'C': 2.0, 'D+': 1.5, 'D': 1.0, 'F': 0.0}
function semSummary(courses) {
	var CA = 0, CG = 0, GP = 0
	courses.forEach(x => {
		var cr = parseInt(x.credits), gr = parseFloat(x.grade)
		CA += cr
		// CG += (x.grade in gradeToScore) ? parseInt(x.credits) : 0
		// GP += (x.grade in gradeToScore) ? gradeToScore[x.grade] : 0
		CG += !isNaN(gr) ? cr : 0
		GP += !isNaN(gr) ? gr * cr : 0
	})
	return [CA, CG, GP]
}

function separateSems(courses) {
	var sems = getSemesterList(courses)
	var _semList = {}
	sems.forEach(x => _semList[x] = [])
	courses.forEach(x => _semList[getSemester(x)].push(x))
	var semList = sems.map((x, idx) => ({
		sem: x,
		courses: _semList[x]
	}))
	var CAX = 0, CGX = 0, GPX = 0
	semList.forEach(x => {
		var [CA, CG, GP] = semSummary(x.courses)
		CAX += CA
		CGX += CG
		GPX += GP
		x.CA = CA
		x.CG = CG
		x.GPA = GP / CG
		x.CAX = CAX
		x.CGX = CGX
		x.GPX = GPX
		x.GPAX = GPX / CGX
	})
	return semList
}

export default class RequestTranscriptAll extends Component {
	constructor(props) {
			super(props)
			this.state = {
				courses: []
			}
	}

	componentWillMount() {
		axios.get(COURSE_API_URL, {params: {studentID: this.props.usernameLog}})
			.then((response) => this.setState({courses: separateSems(response.data.data)}))
			.catch((error) => console.log(error))
	}

	render() {
			return <div>
				<h1>{this.props.nameLog} {this.props.usernameLog}</h1>
				<TranscriptBox>
					<Table bordered condensed responsive>
						<thead>
							<tr>
								<th>COURSE NO</th>
								<th>ABBREVIATED NAME</th>
								<th>CREDIT</th>
								<th>GRADE</th>
							</tr>
						</thead>
						<tbody>
							{this.state.courses.map(
							(sem, semidx) => 
								[<tr key={semidx}><td colSpan={4} style={{textAlign:'center'}}><h4>{parseSemester(sem.sem)}</h4></td></tr>].concat(sem.courses.map(
									(x, idx) => <tr key={idx}>
										<td>{x.subjectID}</td>
										<td>{x.subjectName}</td>
										<td>{x.credits}</td>
										<td>{x.grade}</td>
									</tr>
								))
								.concat([
									<tr><td colSpan={4}>
										<Table condensed>
											<thead>
												<tr>
													<th>CA</th>
													<th>CG</th>
													<th>GPA</th>
													<th>CAX</th>
													<th>CGX</th>
													<th>GPAX</th>
													<th>GPX</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>{sem.CA}</td>
													<td>{sem.CG}</td>
													<td>{sem.GPA.toFixed(2)}</td>
													<td>{sem.CAX}</td>
													<td>{sem.CGX}</td>
													<td>{sem.GPAX.toFixed(2)}</td>
													<td>{sem.GPX.toFixed(2)}</td>
												</tr>
											</tbody>
										</Table>
									</td></tr>
								])
							)}
						</tbody>
					</Table>
				</TranscriptBox>
				
			</div>
	}
}