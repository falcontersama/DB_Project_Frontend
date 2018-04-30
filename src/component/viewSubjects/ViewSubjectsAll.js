import React, { Component } from 'react'
import axios from 'axios'

import ViewSubjects from './ViewSubjects'
import { MOCK_SUBJECTS } from './MockData.json'

const COURSE_API_URL = 'http://localhost:3006/studentCourse'
const PAYMENT_API_URL = 'http://localhost:3006/paymentStatus'
const UNREGISTER_API_URL = 'http://localhost:3006/unregister'

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
        this.state = {
            // subjects: MOCK_SUBJECTS
            subjects: [],
            paymentInfo: {
                payStatus: 'wait',
                curName: '',
                degree: '',
                fullTimePrice: 0,
                partTimePrice: 0
            }
        }
        this.onWithdrawButton = this.onWithdrawButton.bind(this)
    }

    componentWillMount() {
        var username = '5208389731'
        // var username = this.props.usernameLog
        axios.get(COURSE_API_URL, {params: {studentID: username}})
            .then((response) => this.setState({subjects: response.data.data}))
            .catch((error) => console.log(error))
        axios.get(PAYMENT_API_URL, {params: {studentID: username}})
            .then((response) => this.setState({paymentInfo: response.data.data[0]}))
            // .then((response) => console.log(response))
            .catch((error) => console.log(error))
        console.log(this.props.usernameLog)
    }

    onWithdrawButton(subject) {  
        if(window.confirm("ถอนรายวิชา " + subject.subjectID + " " + subject.subjectName + "?"))
        {
            // window.alert("TODO: Withdraw Subject")
            axios.delete(UNREGISTER_API_URL, {params: {courseID: subject.subjectID, studentID: this.props.usernameLog}})
            // axios.delete(UNREGISTER_API_URL, {params: {courseID: '0000000', studentID: this.props.usernameLog}})
                .then((response) => window.alert("การถอนรายวิชา" + ('success' in response.data.data ? 'สำเร็จ' : 'ล้มเหลว')))
                .catch((error) => console.log(error))
        }
    }

    render() {
        return <ViewSubjects
                subjects={this.state.subjects}
                studentView={true}
                onWithdrawButton={this.onWithdrawButton}
                nameLog={this.props.nameLog}
                usernameLog={this.props.usernameLog}
                payStatus={this.state.paymentInfo.payStatus}
                payPrice={this.state.paymentInfo.fullTimePrice}
                />
    }
}