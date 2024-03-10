import { DynamoDB } from "@aws-sdk/client-dynamodb";

let client = null;

export const getClient = () => {
    if (client) return client;
    client = new DynamoDB({region: "us-east-1"});
    return client;
};