import { Integration, Org } from "snyk-api-client";

async function listIntegrationForOrg() {
  try {
    const res1 = await Org.listUserOrgs();
    const orgId = res1.response.orgs[0].id;
    const res2 = await Integration.listIntegrations({ orgId });
    console.log("Res: ", res2);
  } catch (error) {
    console.error(error);
  }
}

listIntegrationForOrg();
