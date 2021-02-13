const snykApi = require("snyk-api-client");

async function listUsersBelongTo() {
  const Org = snykApi.Org;
  try {
    const res = await Org.listUserOrgs();
    console.log("Res: ", res);
  } catch (error) {
    console.error(error);
  }
}

listUsersBelongTo();
