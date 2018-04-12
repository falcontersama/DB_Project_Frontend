import React, { Component } from 'react'
import { Col } from 'react-bootstrap' 

const StudentBox = styled.div`
    width: 40vw;
    height: 40vh;
    padding: 10px 10px 10px 10px;
`;

const StudentDetail = (
    <div>
        <div>
            <h4>รหัส</h4>{'  '}<h4>{this.props.usernameLog}</h4>
        </div>
        <div>
            <h4>ชื่อ</h4>{'  '}<h4>{this.props.usernameLog}</h4>
        </div>
        <div>
            <Checkbox><h4>Gened</h4></Checkbox>
        </div>
    </div>
)



export default class Registration extends Component{
    render(){
        return(
            <StudentBox>
                <Col>
                    <div>
                        
                    </div>
                </Col>
                <Col>
                </Col>
            </StudentBox>
        )
    }
}