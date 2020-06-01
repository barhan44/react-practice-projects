import React, {Component} from "react";
import './IPAddress.css';

class IPAddress extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.ip}</h1>
                <p>(This is your ip-address...may be)</p>
            </div>
        )
    }
}

export default IPAddress;
