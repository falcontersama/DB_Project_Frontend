import React, { Component } from 'react'
import { Table, 
    DropdownButton, 
    MenuItem, 
    Button, 
    SplitButton, 
    Modal, 
    ButtonToolbar, 
    ButtonGroup,
    ToggleButton,
    ToggleButtonGroup } from 'react-bootstrap'
import styled from 'styled-components'

const TableBox = styled.div`
    margin : auto;
    width : 50vw;
    min-width : 200px;
    padding-top : 10px
`;

export default class Recordgrade extends Component{
    constructor(props){
        super(props)
        this.state = {
            show : false,
            selectID : "",
            selectGrade : "",
            selectdata : {
                name : "subject1",
                student : [
                    {
                        name : "eiei",
                        grade : "A",
                    },
                    {
                        name : "eiei2",
                        grade : "B+"
                    }
                    
                ],
            },
            data : [
                {
                    name : "subject1",
                    student : [
                        {
                            name : "eiei",
                            grade : "A",
                        },
                        {
                            name : "eiei2",
                            grade : "B+"
                        }
                        
                    ],
                },
                {
                    name : "subject2",
                    student : [
                        {
                            name : "eiei",
                            grade : "A",
                        },
                        {
                            name : "eiei23",
                            grade : "B+"
                        }
                        
                    ],
                },
                {
                    name : "subject3",
                    student : [
                        {
                            name : "eiei3",
                            grade : "C+",
                        },
                        {
                            name : "eiei2",
                            grade : "B+"
                        }
                        
                    ],
                }
            ]
        }
        this.changeStateDropDown = this.changeStateDropDown.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleShow = this.handleShow.bind(this)
            
    }

    changeStateDropDown(item){
        this.setState({selectdata:item})
    }

    handleClose() {
        this.setState({ show: false });
    }
    
    handleShow(id) {
        this.setState({ selectID: id ,show: true });
    }

    changeGrade(e){
        let grade = e.target.value

    }

    render(){
        return(
            <div>
                <div>
                <SplitButton bsStyle="primary" id={`dropdown-basic`} title={this.state.selectdata.name} style={{minWidth:"150px"}}>
                    {this.state.data.map((item,i)=>
                        
                      (  
                        <MenuItem style={{minWidth:"170px"}} key={i} active={this.state.selectdata.name == item.name ? true:false} onClick={()=>this.changeStateDropDown(item)}>
                            {item.name}
                        </MenuItem> 
                            
                      )
                    )}
                </SplitButton>
                <Button className="btn pull-right" bsStyle="success">Export to CSV</Button>
                </div>
                <TableBox>
                    <Table responsive hover>
                        <thead>
                            <tr>
                                <th style={{textAlign:"center"}}><h6>รหัสนิสิต</h6></th>
                                <th style={{textAlign:"center"}}><h6>เกรด</h6></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.selectdata.student.map((item,i)=>
                                <tr key={i}>

                                    <td style={{textAlign:"center"}}>{item.name}</td>
                                    <td style={{textAlign:"center"}} onClick={()=>this.handleShow(item.name)}>{item.grade}</td>
                                    <Modal show={this.state.show} onHide={this.handleClose} >
                                    <Modal.Header closeButton>
                                        <Modal.Title>Submit grade</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <h4>กำหนดเกรดของนิสิต {this.state.selectID}</h4>
                                            <ButtonToolbar>
                                                <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                                    <ToggleButton value={1}>A</ToggleButton>
                                                    <ToggleButton value={2}>B+</ToggleButton>
                                                    <ToggleButton value={3}>B</ToggleButton>
                                                    <ToggleButton value={4}>C+</ToggleButton>
                                                    <ToggleButton value={5}>C</ToggleButton>
                                                    <ToggleButton value={6}>D+</ToggleButton>
                                                    <ToggleButton value={7}>D</ToggleButton>
                                                    <ToggleButton value={8}>F</ToggleButton>
                                                </ToggleButtonGroup>
                                            </ButtonToolbar>
                                            <div style={{padding:"10px"}}>
                                                <Button bsStyle="success" >Submit</Button>
                                                
                                                <Button bsStyle="danger" onClick={this.handleClose}>Cancel</Button>
                                            </div>

                                        </Modal.Body>
                                    </Modal>
                                
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </TableBox>
            </div>
        )
    }
}