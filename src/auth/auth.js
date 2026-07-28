import { betterAuth } from "better-auth";
import {mongodbAdapter} from "@better-auth/mongo-adapter";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI);

export const auth = betterAuth({
    database: mongodbAdapter(client.db(process.env.DATABASE_NAME)),
    emailAndPassword: {
        enabled: true,
    }
});
