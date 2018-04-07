import React, { Component } from 'react'
import {Table} from 'react-bootstrap'
import styled from 'styled-components';

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
        for(j=timePassed; j<row[i].Start; j++) {
            s.push(<td/>);
        }
        s.push(<td colSpan={row[i].Duration.toString()}>{row[i].Subject}</td>);
        timePassed = row[i].Start + row[i].Duration;
    }
    for(j=timePassed; j<24; j++) {
        s.push(<td/>);
    }
    return s;
}
// function makeRow(row) {
//     // console.log(row);
//     var s = "";
//     var timePassed = 0;
//     for(var i = 0; i < row.length; i++) {
//         // console.log(row[i]);
//         s += "<td/>".repeat(row[i].Start - timePassed);
//         s += "<td colSpan=\"" + row[i].Duration.toString() + "\">" + row[i].Subject + "</td>";
//         timePassed = row[i].Start + row[i].Duration;
//     }
//     return s;
// }

export default class Schedule extends Component{

    constructor(props){
        super(props)
        this.state = {
            data: {
                "Monday" : [
                    {"Start" : 0, "Duration" : 6, "Subject" : "Calculus"},
                    {"Start" : 12, "Duration" : 6, "Subject" : "Physics"}
                ],
                "Tuesday" : [
                    {"Start" : 2, "Duration" : 4, "Subject" : "Calculus"},
                    {"Start" : 12, "Duration" : 4, "Subject" : "Physics"}
                ],
                "Wednesday" : [
                    {"Start" : 4, "Duration" : 4, "Subject" : "Calculus"},
                    {"Start" : 14, "Duration" : 4, "Subject" : "Physics"}
                ],
                "Thursday" : [
                    {"Start" : 1, "Duration" : 3, "Subject" : "Calculus"},
                    {"Start" : 4, "Duration" : 3, "Subject" : "Physics"}
                ],
                "Friday" : [
                    {"Start" : 2, "Duration" : 4, "Subject" : "Calculus"},
                    {"Start" : 12, "Duration" : 4, "Subject" : "Physics"}
                ]
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
                        <th>7:00</th>
                        <th>7:30</th>
                        <th>8:00</th>
                        <th>8:30</th>
                        <th>9:00</th>
                        <th>9:30</th>
                        <th>10:00</th>
                        <th>10:30</th>
                        <th>11:00</th>
                        <th>11:30</th>
                        <th>12:00</th>
                        <th>12:30</th>
                        <th>13:00</th>
                        <th>13:30</th>
                        <th>14:00</th>
                        <th>14:30</th>
                        <th>15:00</th>
                        <th>15:30</th>
                        <th>16:00</th>
                        <th>16:30</th>
                        <th>17:00</th>
                        <th>17:30</th>
                        <th>18:00</th>
                        <th>18:30</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th>จันทร์</th>
                        {makeRow(this.state.data["Monday"])}
                        </tr>
                        <tr>
                        <th>อังคาร</th>
                        {makeRow(this.state.data["Tuesday"])}
                        </tr>
                        <tr>
                        <th>พุธ</th>
                        {makeRow(this.state.data["Wednesday"])}
                        </tr>
                        <tr>
                        <th>พฤหัส</th>
                        {makeRow(this.state.data["Thursday"])}
                        </tr>
                        <tr>
                        <th>ศุกร์</th>
                        {makeRow(this.state.data["Friday"])}
                        </tr>
                    </tbody>
                    {/* <thead>
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
                        <td colSpan="2">@twitter</td>
                        </tr>
                    </tbody> */}
                </Table>
            </ScheduleBox>
        )
    }
}