import React, { Component } from 'react'
import {Table} from 'react-bootstrap'
import styled from 'styled-components';

const ScheduleBox = styled.div`
    width:100wh;
    max-height:50vh;
    overflow-y:scroll;
`;

export default class Schedule extends Component{

    constructor(props){
        super(props)
        this.state = {
            data: {
                "Monday" : {
                    "Calculus" : [0,1,1,0,0,0,0,0,0,0,0,0],
                    "Physics" : [0,0,0,0,0,0,1,1,0,0,0,0]
                },
                "Tuesday" : {
                    "Calculus" : [0,1,1,0,0,0,0,0,0,0,0,0],
                    "Physics" : [0,0,0,0,0,0,1,1,0,0,0,0]
                },
                "Wednesday" : {
                    "Calculus" : [0,1,1,0,0,0,0,0,0,0,0,0],
                    "Physics" : [0,0,0,0,0,0,1,1,0,0,0,0]
                },
                "Thrusday" : {
                    "Calculus" : [0,1,1,0,0,0,0,0,0,0,0,0],
                    "Physics" : [0,0,0,0,0,0,1,1,0,0,0,0]
                },
                "Friday" : {
                    "Calculus" : [0,1,1,0,0,0,0,0,0,0,0,0],
                    "Physics" : [0,0,0,0,0,0,1,1,0,0,0,0]
                }
            }           
        }
    }

    render(){
        return(
            <ScheduleBox>
                <Table bordered condensed hover responsive>
                    <thead>
                        <tr>
                        <th>วัน/เวลา</th>
                        <th>7-8</th>
                        <th>8-9</th>
                        <th>9-10</th>
                        <th>10-11</th>
                        <th>11-12</th>
                        <th>12-13</th>
                        <th>13-14</th>
                        <th>14-15</th>
                        <th>15-16</th>
                        <th>16-17</th>
                        <th>17-18</th>
                        <th>18-19</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr>
                        <td>จันทร์</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <td>อังคาร</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>พุธ</td>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                        <tr>
                        <td>พฤหัส</td>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                        <tr>
                        <td>ศุกร์</td>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </ScheduleBox>
        )
    }
}