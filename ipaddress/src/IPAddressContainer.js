import React, {Component} from 'react';
import IPAddress from "./IPAddress";

let xhr;

class IPAddressContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id_address: ''
        };

        this.processRequest = this.processRequest.bind(this);
    }

    componentDidMount() {
        xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://ip-api.com/json/?fields=query', true);
        xhr.send();

        xhr.addEventListener('readystatechange',
            this.processRequest, false);
    }

    processRequest() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            console.log(response);

            this.setState({
                ip_address: response.query
            });
        }
    }

    render() {
        return (
            <IPAddress ip={this.state.ip_address} />
        )
    }
}

export default IPAddressContainer;
