import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

let client = null;

export const getClient = () => {
    if (client) return client;
    client = new DynamoDBClient({region: "us-east-1"});
    return client;
};

const pk = (value = "") => `USER#${value}`;

const sk = (value = "") => `USER#${value}`; 

const createUser = async (user = {}) => {
    let client = getClient();

    let data = {
        "PK": {"S": pk(user.name)},
        "SK": {"S": sk(user.team)},
        "name": {"S": user.name},
        "age": {"N": user.age},
        "favoriteTeam": {"S": user.team},
    };

    console.log("calling ddb...")
    console.log(data)


    const params = {
        TableName: "app-db",
        Item: data
    };

    await client.send(new PutItemCommand(params))

    console.log("finished.")
}


export const handler = async (event, context) => {
  console.log("Starting invocation");

  if (event["action"] === "create") {
    console.log("Creating user");
    let user = event["user"]
    await createUser(user);
  }
  

  return context.logStreamName;
};