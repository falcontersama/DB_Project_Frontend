import React, { Component } from 'react'
import styled from 'styled-components';


const NewsBox = styled.div`
    width:100wh;
    max-height:50vh;
    overflow-y:scroll;
`;

export default class News extends Component{
    constructor(props){
        super(props)
        this.state = {
            inform : [
                {
                    name: "ประกาศรับสมัคร",
                    detail: "รับสมัคร ป โท"
                },
                {
                    name: "วันสุดท้ายของการถอน",
                    detail: "ถอนสุดท้ายวันศุกร์นี้"
                },
                {
                    name: "ประกาศโปรเจค DB",
                    detail: "lulllllll"
                }
            ]
        }
    }

    render(){
        return(
            <NewsBox>
                <h3>News feature is not available (Mock data)</h3>
                <ul>
                    {this.state.inform.map((obj,index)=>{
                        return(
                            <li key={index}>{obj.name}</li>
                        )
                    })}
                </ul>
            </NewsBox>
        )
    }
}