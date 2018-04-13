import React, { Component } from 'react'
import { Table, Button } from 'react-bootstrap'

import { MOCK_DOCS } from './MockData.json'

export default class RequestDocsAll extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "docs": MOCK_DOCS
        }
        this.onPreviewButton = this.onPreviewButton.bind(this)
        this.onRequestButton = this.onRequestButton.bind(this)
    }

    onPreviewButton(subject) {
        
    }

    onRequestButton(subject) {
        
    }

    render() {
        return (
            <div>
                <h1>{this.props.nameLog} {this.props.usernameLog}</h1>
                <Table bordered condensed hover responsive>
                    <thead>
                        <tr>
                            <th colspan='2'><h4>รายการเอกสาร</h4></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.docs.map((obj, idx) => <tr>
                            <td>{obj.code}</td><td>{obj.nameTH}<br/>{obj.nameEN}</td>
                            <td><Button bsStyle='default' onclick={this.onPreviewButton}>ดูตัวอย่าง</Button></td>
                            <td><Button bsStyle='primary' onclick={this.onRequestButton}>ขอเอกสาร</Button></td>
                        </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}
