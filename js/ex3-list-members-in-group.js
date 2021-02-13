const snykApi = require("snyk-api-client");

async function main() {
  try {
    const res = await snykApi.Group.listMembersInGroup({
      groupId: "my-group-id",
    });
    console.log(res);
  } catch (error) {
    console.error(error);
  }
}
