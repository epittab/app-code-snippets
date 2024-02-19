exports.handler = async (event, context) => {
    console.log("EVENT: \n" + JSON.stringify(event, null, 2));
    console.log("Nice to see a dev/logging deployemnt!");
    return context.logStreamName;
  };