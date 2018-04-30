import React, { Component } from 'react'
import styled from 'styled-components';


const McvBox = styled.div`
    width:100wh;
    max-height:50vh;
    overflow-y:scroll;
    text-align: center
`;

export default class Mcv extends Component{
    render(){
        return(
            <McvBox>
                <h3>MCV feature is not available</h3>
            </McvBox>
        )
    }
}