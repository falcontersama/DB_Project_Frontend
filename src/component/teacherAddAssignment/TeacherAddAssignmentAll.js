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
		this.state = {
			subject: '',
			dueDate: '',
			description: ''
		}
		this.submitProcess = this.submitProcess.bind(this)
	}

	submitProcess() {
		window.alert("TODO: Submit\nSubject: " + this.state.subject + "\nDue Date: " + this.state.dueDate + "\nDescription: " + this.state.description)
	}

	render() {
		return (
			<div>
				<form horizontal>
					<FormGroup>
						<Col xs={3}>
							<FormControl
								type="text"
								placeholder="วิชา"
								value={this.state.subject}
								onChange={(e) => this.setState({subject: e.target.value})}/>
						</Col>
						<Col xs={3}>
							<FormControl
								type="text"
								placeholder="กำหนดส่ง"
								value={this.state.dueDate}
								onChange={(e) => this.setState({dueDate: e.target.value})}/>
						</Col>
					</FormGroup>
					<FormGroup>
						<Col xs={10}>
							<FormControl
								type="text"
								placeholder="คำอธิบาย"
								value={this.state.description}
								onChange={(e) => this.setState({description: e.target.value})}/>
						</Col>
					</FormGroup>
					<Button type="submit" onClick={this.submitProcess}>Submit</Button>
				</form>
			</div>
		)
	}
}