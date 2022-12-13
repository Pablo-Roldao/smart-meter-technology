import React from "react";
import { Button, Card, Container } from "react-bootstrap";

import { Amplify, PubSub } from "aws-amplify";
import { AWSIoTProvider } from "@aws-amplify/pubsub";
import awsConfig from "./../aws-exports";

Amplify.configure(awsConfig);

Amplify.addPluggable(new AWSIoTProvider({
    aws_pubsub_region: 'us-west-2',
    aws_pubsub_endpoint: 'a3jgnyy8ndfd88-ats.iot.us-west-2.amazonaws.com'
}));

export default class SensorData extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            sensorMsg: '{"null": 0}'
        };
    }

    componentDidMount(){
        PubSub.subscribe('esp32/').subscribe({
          next: data => {
            try{
              this.setState({ sensorMsg: data.value });
              alert(data.value);
            }
            catch (error){
              console.log("Error, are you sending the correct data?");
            }
          },
          error: error => console.error(error),
          close: () => console.log('Done'),
        });
      }

    render(){

        return(
            <Container fluid className="p-3">
                <Card>
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text> 
                            { this.state.sensorMsg } { this.props.unit }
                        </Card.Text>
                        <Button onClick={this.componentDidCatch} variant="dark">Executar função</Button>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}


