const { Dependency, Org } = require("snyk-api-client");

async function listAllDependencyForOrg() {
  try {
    const res1 = await Org.listUserOrgs();
    const orgId = res1.response.orgs[2].id;
    const { response } = await Dependency.listAllDependencies(
      { orgId: orgId },
      {
        queryParams: {
          sortBy: "dependency",
          order: "desc",
          page: 1,
          perPage: 5,
        },
      }
    );
    console.log("All dependencies: ", response.results);
  } catch (error) {
    console.error(error);
  }
}

listAllDependencyForOrg();
