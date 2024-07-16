// pages/api/invoice.js
require('dotenv').config({ path: '.env.local' });

// ... rest of the code

import {
  AccountTokenAuthProvider,
  LightsparkClient,
} from '@lightsparkdev/lightspark-sdk';

const apiTokenClientId = process.env.API_TOKEN_CLIENT_ID;
const apiTokenClientSecret = process.env.API_TOKEN_CLIENT_SECRET;

const authProvider = new AccountTokenAuthProvider(
  apiTokenClientId,
  apiTokenClientSecret
);
const client = new LightsparkClient(authProvider);

// Use the client to interact with the Lightspark API
// For example, to create an invoice:
const invoice = await client.invoices.create({
  // Invoice data
});
