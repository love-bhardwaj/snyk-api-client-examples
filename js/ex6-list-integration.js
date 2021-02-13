const snykApi = require("snyk-api-client");

async function listIntegrationFromOrg() {
  const Org = snykApi.Org;
  const Integration = snykApi.Integration;

  try {
    const res1 = await Org.listUserOrgs();
    const orgId = res1.response.orgs[0].id;
    const res2 = await Integration.listIntegrations({ orgId });
    console.log("Res: ", res2);
  } catch (error) {
    console.error(error);
  }
}

listIntegrationFromOrg();
