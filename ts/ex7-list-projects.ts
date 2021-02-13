import { Project, Org } from "snyk-api-client";

async function listProjectsForOrg() {
  try {
    const res1 = await Org.listUserOrgs();
    const orgId = res1.response.orgs[0].id;
    const res = await Project.getAllProjects({ orgId });
    console.log("Projects: ", res.response.projects);
  } catch (error) {
    console.error(error);
  }
}

listProjectsForOrg();
