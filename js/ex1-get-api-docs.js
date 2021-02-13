const snykApi = require("snyk-api-client");

async function main() {
  const General = snykApi.General;

  try {
    const res = await General.getDocs();
    console.log("API response: ", res.response);
    console.log("HTTP status of request: ", res.httpCode);
    console.log("Request error if any: ", res.error);
    console.log("Snyk request ID: ", res.snykRequestId);
  } catch (error) {
    console.error(error);
  }
}

main();
