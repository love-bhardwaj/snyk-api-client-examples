import { Org } from "snyk-api-client";

async function listOrgsUserBelongsTo() {
  try {
    const res = await Org.listUserOrgs();
    console.log("Res: ", res.response);
  } catch (error) {
    console.error(error);
  }
}

listOrgsUserBelongsTo();
