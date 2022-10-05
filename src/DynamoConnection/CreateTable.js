import { CreateTableCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "./ddbClient";

export const params = {
    AttributeDefinitions: [
        {
            AttributeName: "Season", //ATTRIBUTE_NAME_1
            AttributeType: "N", //ATTRIBUTE_TYPE
        },
        {
            AttributeName: "Episode", //ATTRIBUTE_NAME_2
            AttributeType: "N", //ATTRIBUTE_TYPE
        },
    ],
    KeySchema: [
        {
            AttributeName: "Season", //ATTRIBUTE_NAME_1
            KeyType: "HASH",
        },
        {
            AttributeName: "Episode", //ATTRIBUTE_NAME_2
            KeyType: "RANGE",
        },
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
    },
    TableName: "TEST_TABLE", //TABLE_NAME
    StreamSpecification: {
        StreamEnabled: false,
    },
};

export const run = async () => {
    try {
        const data = await ddbClient.send(new CreateTableCommand(params));
        console.log("TABLE CREATED: ", data);
        return data;
    } catch (err) {
        console.log("ERROR: ", err);
    }
};

run();