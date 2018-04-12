import React, { Component } from 'react'
import {Table} from 'react-bootstrap'
import styled from 'styled-components'

const BottomLeftBox = styled.div`
    width: 35vw;
    height: 60vh;
    padding: 10px 10px 10px 10px;
    text-align: center;
`;

export default class BottomLeft extends Component {

    constructor(props){
        super(props)
        this.showMessage = this.showMessage.bind(this)
    }

    showMessage(e){
        console.log(e)
    }

    render(){
        console.log(this.props.subject)
        return(
            <BottomLeftBox>
                <div>รายชื่อวิชา</div>
                <div>
                    <Table responsive hover>
                        <thead>
                            <th><h6>รหัสวิชา</h6></th>
                            <th><h6>ชื่อวิชา</h6></th>
                        </thead>
                        <tbody>
                            {this.props.subject.map((item,i)=>
                                <tr onClick={this.showMessage}>
                                <Link>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                </Link>
                                    
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            
            </BottomLeftBox>
        )
    }
}