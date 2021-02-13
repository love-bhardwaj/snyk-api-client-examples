const snykApi = require("snyk-api-client");

async function main() {
  const User = snykApi.User;

  try {
    const res = await User.getMyDetails();
    console.log("My details: ", res.response);
  } catch (error) {
    console.error(error);
  }
}

main();
