import React from 'react';
import Card from 'react-bootstrap/Card';

import { PubSub } from "aws-amplify";
import { AWSIoTProvider } from '@aws-amplify/pubsub/lib/Providers';

import { Amplify } from 'aws-amplify';
import awsconfig from './../aws-exports';
Amplify.configure(awsconfig);

Amplify.addPluggable(new AWSIoTProvider({
    aws_pubsub_region: 'us-west-2',
    aws_pubsub_endpoint: 'a3jgnyy8ndfd88-ats.iot.us-west-2.amazonaws.com/mqtt',
}));
class Sensors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sensorMsg: '{"null": 0}'
        };
    }

    componentDidMount() {
        PubSub.subscribe('myTopic').subscribe({
            next: data => {
                try {
                    this.setState({ sensorMsg: data.value });
                }
                catch (error) {
                    console.log("Error, are you sending the correct data?");
                }
            },
            error: error => console.error(error),
            close: () => console.log('Done'),
        });
    }

    render() {
        const { sensorMsg } = this.state;
        let sensorData = sensorMsg[this.props.name];

        return (
            <div className="Sensor">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>
                            {sensorData} {this.props.unit}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <style jsx>{
                    `
                .Sensor {
                        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                        transition: 0.3s;
                    }
                    
                    .Sensor:hover {
                        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
                    }
                    `
                }
                </style>
            </div>
        )
    }
}

export default Sensors;