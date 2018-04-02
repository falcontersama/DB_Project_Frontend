import React, { Component } from 'react'
import {Col} from 'react-bootstrap'
import Schedule from './Schedule'
import Mcv from './Mcv'
import News from './News'

export default class Startpage extends Component{
    render(){
        return(
            <div>
                <div>
                    <Schedule />
                </div>
                <div>
                    <Col sm={5}>
                        <Mcv />
                    </Col>
                    <Col sm={5}>
                        <News />
                    </Col>
                </div>
            </div>
        )
    }
}