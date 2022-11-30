import React from 'react';
import Card from 'react-bootstrap/Card';

import { PubSub, Auth } from 'aws-amplify';
import '@aws-amplify/ui/dist/style.css';
import { AWSIoTProvider } from '@aws-amplify/pubsub/lib/Providers';

import Amplify from 'aws-amplify';
import awsconfig from './../aws-exports';
Amplify.configure(awsconfig);

Amplify.addPluggable(new AWSIoTProvider({
    aws_pubsub_region: 'us-west-2',
    aws_pubsub_endpoint: 'a3jgnyy8ndfd88-ats.iot.us-west-2.amazonaws.com/mqtt',
}));