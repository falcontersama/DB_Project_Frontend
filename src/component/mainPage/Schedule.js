import React, { Component } from 'react'
import {Table} from 'react-bootstrap'
import styled from 'styled-components'
import axios from 'axios'

const SCHEDULE_API_URL = 'http://localhost:3006/studentSchedule'

const ScheduleBox = styled.div`
    width:100wh;
    max-height:50vh;
    overflow-y:scroll;
`;

// Assumes schedule has no overlaps
function makeRow(row) {
    var s = [];
    var timePassed = 0;
    var i, j;
    for(i = 0; i < row.length; i++) {
        for(j=timePassed; j<row[i].start; j++) {
            s.push(<td/>);
        }
        s.push(<td colSpan={row[i].dur.toString()}>
            {row[i].courseID} ({row[i].sec})<br/>
            {row[i].courseName}<br/>
            {row[i].buildingID} ({row[i].roomID})
        </td>);
        timePassed = row[i].start + row[i].dur;
    }
    for(j=timePassed; j<24; j++) {
        s.push(<td/>);
    }
    return s;
}

function parseTime(str) {
    let a = str.split(':')
    return parseInt(a[0]*2 + a[1]/30)
}

const DAYS = [
    {EN: 'MON', TH: 'จันทร์'},
    {EN: 'TUE', TH: 'อังคาร'},
    {EN: 'WED', TH: 'พุธ'},
    {EN: 'THU', TH: 'พฤหัส'},
    {EN: 'FRI', TH: 'ศุกร์'}
]

function processSchedule(subjectList) {
    var schedule = {}
    DAYS.forEach(x => schedule[x.EN] = [])
    subjectList.forEach(element => {
        var temp = {
            courseID: element.courseID,
            courseName: element.courseName,
            sec: element.sec,
            buildingID: element.buildingID,
            roomID: element.roomID,
            start: parseTime(element.startTime) - 14,
            dur: parseTime(element.duration)
        }
        schedule[element.day].push(temp)
    })
    DAYS.forEach(x => schedule[x.EN].sort((a, b) => a.start-b.start))
    return schedule
}

export default class Schedule extends Component{

    constructor(props){
        super(props)
        let data = {}
        DAYS.forEach(x => data[x.EN] = [])
        this.state = {
            data: data
        }
    }

    componentWillMount() {
        axios.get(SCHEDULE_API_URL, {params: {studentID: this.props.usernameLog}})
            .then((response) => this.setState({data: processSchedule(response.data.data)}))
            .catch((error) => console.log(error))
    }

    render(){
        return(
            <ScheduleBox>
                <Table bordered condensed hover responsive>
                    <thead>
                        <tr>
                        <th>วัน/เวลา</th>
                        {Array.from({length: 12}, (x,i) => i+7).map((x, idx) => <th colSpan='2'>{x}-{x+1}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {DAYS.map((x, idx) => <tr>
                            <th>{x.TH}</th>
                            {makeRow(this.state.data[x.EN])}
                        </tr>)}
                    </tbody>
                </Table>
            </ScheduleBox>
        )
    }
}