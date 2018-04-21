import React, { Component } from 'react'
import styled from 'styled-components'
import { FormGroup, FormControl, Col, Row, Button } from 'react-bootstrap'

// const ViewSubjectBox = styled.div`
//     border:1px solid lightgrey;
//     padding:10px;
// `;

export default class ViewSubjects extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<form horizontal>
					<FormGroup controlId="formAddAssignmentHead">
						<Col xs={3}>
							<FormControl controlId="formAddAssignmentSubject" type="text" placeholder="วิชา"/>
						</Col>
						<Col xs={3}>
							<FormControl controlId="formAddAssignmentDue" type="text" placeholder="กำหนดส่ง"/>
						</Col>
					</FormGroup>
					<FormGroup controlId="formAddAssignmentBody">
						<Col xs={10}>
							<FormControl controlId="formAddAssignmentDescription" type="text" placeholder="คำอธิบาย"/>
						</Col>
					</FormGroup>
					<Button type="submit">Submit</Button>
				</form>
			</div>
		)
	}
}