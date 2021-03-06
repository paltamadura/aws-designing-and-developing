const AWS = require("aws-sdk");

AWS.config.update({ region: "us-east-1" });

const apiG = new AWS.APIGateway();
const apiId = "tth1ftk7x5";

createDeployment(apiId, "prod").then((data) => console.log(data));

function createDeployment(apiId, stageName) {
  const params = {
    restApiId: apiId,
    stageName,
  };

  return new Promise((resolve, reject) => {
    apiG.createDeployment(params, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
