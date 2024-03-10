import { createUser } from "./ddb/user";

exports.handler = async (event, context) => {
    console.log("Starting invocation");

    if (event["action"] === "create") {
      console.log("Creating user");
      let user = event["user"]
      createUser(user);
    }
    

    return context.logStreamName;
  };