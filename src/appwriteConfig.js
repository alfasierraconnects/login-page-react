import { Client, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6618321c5945387954ef");

export const account = new Account(client);

export default client;
