import { Org } from "snyk-api-client";

async function getUserOrgs() {
  try {
    const userOrgs = (await Org.listUserOrgs({ apiToken: "your-api-token" }))
      .response.orgs;
    console.log("User orgs: ", userOrgs);
  } catch (error) {
    console.error(error);
  }
}

getUserOrgs();
