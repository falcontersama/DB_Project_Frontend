import React, { Component } from 'react'
import axios from 'axios'

import ViewSubjects from './ViewSubjects'
import { MOCK_SUBJECTS } from './MockData.json'

const API_URL = 'http://localhost:3006/studentCourse'

function getSemester(subject) {
    return subject.year + '/' + subject.semester;
}

function loadSubjects(subjects) {
    var sems = [...new Set(subjects.map((obj, idx) => getSemester(obj)))].sort((a, b) => (a === b ? 0 : a < b ? 1 : -1))
    var latestSem = sems[0]
    return {
        semesters: sems,
        subjects: subjects,
        currSem: latestSem,
        latestSem: latestSem
    }
}

export default class ViewSubjectsAll extends Component {
    constructor(props) {
        super(props)
        var username = '5208389731'
        // var username = this.props.usernameLog
        // axios.get(API_URL, {params: {studentID: username}})
        //     .then((response) => this.setState({subjects: response.data.data}))
        //     .catch((error) => console.log(error))
        this.state = {
            subjects: MOCK_SUBJECTS
        }
    }

    render() {
        return <ViewSubjects subjects={this.state.subjects} canWithdraw={true} nameLog={this.props.nameLog} usernameLog={this.props.usernameLog}/>
    }
}