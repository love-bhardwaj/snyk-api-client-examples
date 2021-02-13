import { ClientConfig, General } from "snyk-api-client";

async function main() {
  // Don't need to do it, if already export env variable
  const apiToken = process.env.SNYK_API_TOKEN;
  ClientConfig.set({ apiToken });

  try {
    const res = await General.getDocs();
    console.log(res);
  } catch (error) {
    console.error(error);
  }
}

main();
