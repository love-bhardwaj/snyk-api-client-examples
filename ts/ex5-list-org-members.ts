import { Org } from "snyk-api-client";

async function listOrgMembers() {
  try {
    const res1 = await Org.listUserOrgs();
    const orgId = res1.response.orgs[0].id;
    const res2 = await Org.listMembers({ orgId });
    console.log("Response: ", res2);
  } catch (error) {
    console.error(error);
  }
}

listOrgMembers();
