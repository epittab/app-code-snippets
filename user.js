import { getClient } from "./client";

const pk = (value = "") => {
    return `USER#${value}`;
}

const sk = (value = "") => {
    return `USER#${value}`;
}


export const createUser = async (user = {}) => {
    let client = getClient();

    let data = {
        "PK": {"S": pk(user.name)},
        "SK": {"S": sk(user.team)},
        "name": {"S": user.name},
        "age": {"N": user.age},
        "favoriteTeam": {"S": user.team},
    };

    const params = {
        TableName: "app-db",
        Item: data
    };

    client.putItems(params, (e, d) => {
        if (e) {
            console.error(e);
        } else {
            console.log("This was returned from ddb");
            console.log(d);
        }
    })

}