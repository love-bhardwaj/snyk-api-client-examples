const { License, Org } = require("snyk-api-client");

async function listAllLicenses() {
  try {
    const res1 = await Org.listUserOrgs();
    const orgId = res1.response.orgs[2].id;
    const { response } = await License.listAllLicenses(
      { orgId },
      {
        requestBody: {
          filters: {
            languages: ["node", "java"],
          },
        },
        queryParams: {
          order: "asc",
        },
      }
    );
    console.log("Licenses: ", response.results);
  } catch (error) {
    console.error(error);
  }
}

listAllLicenses();
