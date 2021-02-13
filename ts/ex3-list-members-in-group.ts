import { Group } from "snyk-api-client";

async function main() {
  try {
    const res = await Group.listMembersInGroup({ groupId: "my-snyk-group-id" });
  } catch (error) {
    console.error(error);
  }
}

main();
