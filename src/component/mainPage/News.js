import React, { Component } from 'react'

const NewsBox = styled.div`
    width:100wh;
    max-height:50vh;
    overflow-y:scroll;
`;

export default class News extends Component{
    constructor(props){
        super(props)
        this.state = {
            inform : {
                
            }
        }
    }

    render(){
        return(
            <div>
                
            </div>
        )
    }
}