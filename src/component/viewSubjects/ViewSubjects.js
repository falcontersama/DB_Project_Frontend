import React, { Component } from 'react'
import styled from 'styled-components'
import { Table, Button, MenuItem, DropdownButton } from 'react-bootstrap'

const withdrawButtonText = 'ถอน'

const ViewSubjectBox = styled.div`
    border:1px solid lightgrey;
    padding:10px;
`;

const ViewSubjectTable = styled.div`
    width:100wh;
    max-height:100vh;
    overflow-y:scroll;
`;

function getSemester(subject) {
	return subject.year + '/' + subject.semester;
}

function onWithdrawButton(subject) {  
	if(window.confirm("ถอนรายวิชา " + subject.subjectID + " " + subject.subjectName + "?"))
	{
			window.alert("TODO: Withdraw Subject")
	}
}

function getNewSemesterInfo(subjects) {
	var semesters = [...new Set(subjects.map((obj, idx) => getSemester(obj)))].sort((a, b) => (a === b ? 0 : a < b ? 1 : -1))
	return [semesters, semesters[0]]
}

export default class ViewSubjects extends Component {
	constructor(props) {
		super(props)
		var [semesters, latestSem] = getNewSemesterInfo(props.subjects)
		this.state = {
			semesters: semesters,
			latestSem: latestSem,
			currentSem: latestSem
		}
	}

	componentWillReceiveProps(newProps) {
		var [semesters, latestSem] = getNewSemesterInfo(newProps.subjects)
		this.setState({
			semesters: semesters,
			latestSem: latestSem,
			currentSem: latestSem
		})
		console.log(newProps.subjects)
	}

	render() {
		return (
			<div>
				<h1>{this.props.nameLog} {this.props.usernameLog}</h1>
				<h3>
					{this.props.payStatus === 'paid'
						? <span style={{backgroundColor:'limegreen', color:'white'}}>จ่ายแล้ว</span>
						: <span style={{backgroundColor:'red', color:'white'}}>ยังไม่จ่าย</span>} <span>{this.props.payPrice}</span>
				</h3>
				<ViewSubjectBox>
					<DropdownButton title={this.state.currentSem} id='semesterDropdown'>
						{this.state.semesters.map((obj, index) => (
							<MenuItem
								key={index}
								eventKey={index}
								onClick={() => { this.setState({ currentSem: obj }) }}
							>
								{obj}
							</MenuItem>
						))}
					</DropdownButton>
					<ViewSubjectTable>
						<Table bordered condensed hover responsive>
							<thead>
								<tr>
									<th>วิชา</th>
									<th>ตอนเรียน</th>
									<th>เวลาเรียน</th>
									<th>สถานที่</th>
									<th>อาจารย์ผู้สอน</th>
									<th>ผลการเรียน</th>
									{this.props.studentView && <th/>}
								</tr>
							</thead>
							<tbody>
								{this.props.subjects
									.filter((item) => (getSemester(item) === this.state.currentSem))
									.map((obj, index) => (
										<tr key={obj.subjectID}>
											<td>{obj.subjectID} {obj.subjectName}</td>
											<td>{obj.sec}</td>
											<td>{obj.time.map((x, idx) => <span key={idx}>{x.day} {x.time}<br /></span>)}</td>
											<td>{obj.time.map((x, idx) => <span key={idx}>{x.roomID} {x.buildingID}<br /></span>)}</td>
											<td>{obj.teacher.map((x, idx) => <span key={idx}>{x}<br /></span>)}</td>
											<td>{obj.grade}</td>
											{
												this.props.studentView &&
												<td>
													<Button
														bsStyle='danger'
														bsSize='xsmall'
														onClick={() => this.onWithdrawButton(obj)}
														disabled={this.state.currentSem !== this.state.latestSem}
													>
														{withdrawButtonText}
													</Button>
												</td>
											}
										</tr>
									))}
							</tbody>
						</Table>
					</ViewSubjectTable>
				</ViewSubjectBox>
			</div>
		)
	}
}

ViewSubjects.defaultProps = {
	studentView: false
}