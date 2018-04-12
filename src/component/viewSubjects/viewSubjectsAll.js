import React, { Component } from 'react'
import { Table, Button, MenuItem, DropdownButton } from 'react-bootstrap'
import styled from 'styled-components'

import {MOCK_SEMS, MOCK_SUBJECTS} from './mockData.json'

const ViewSubjectBox = styled.div`
    border:1px solid lightgrey;
    padding:10px;
`;

const ViewSubjectTable = styled.div`
    width:100wh;
    max-height:100vh;
    overflow-y:scroll;
`;

const withdrawButtonText = 'ถอน'
function onWithdrawButton(subject){

}

export default class ViewSubjectsAll extends Component{
    constructor(props){
        super(props)
        var sems = MOCK_SEMS
        var subjects = MOCK_SUBJECTS
        var currSem = sems[0]
        this.state = {
            "Semesters" : sems,
            "Subjects" : subjects,
            "CurrSem" : currSem
        }
    }

    render(){
        return(
            <div>
                <h1>{this.props.nameLog} {this.props.usernameLog}</h1>
                <ViewSubjectBox>
                    <DropdownButton title={this.state.CurrSem}>
                        {this.state.Semesters.map((obj, index) => (
                            <MenuItem
                                eventKey={index}
                                onClick={() => {this.setState({"CurrSem" : obj})}}
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
                                    <th/>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.Subjects
                                .filter((item) => (item.Semester == this.state.CurrSem))
                                .map((obj, index) => (
                                    <tr>
                                        <td>{obj.SubjectID} {obj.SubjectName}</td>
                                        <td>{obj.Section}</td>
                                        <td>{obj.Time}</td>
                                        <td>{obj.Location}</td>
                                        <td>{obj.Instructor}</td>
                                        <td>{obj.Grade}</td>
                                        <td>
                                            <Button bsStyle='danger' bsSize='xsmall' onClick={onWithdrawButton}>{withdrawButtonText}</Button>
                                        </td>
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