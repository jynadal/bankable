const { LightsparkClient } = require("@lightsparkdev/lightspark-sdk");

const encodedInvoice = await LightsparkClient.createInvoice({
  amount: {value: 100, unit: CurrencuUnit.SATOSHI},
  memo: "SVOD July",
  customerId: "XXXXXXX",
  type: InvoiceType.AMP,
});

const invoiceDetails = await LightsparkClient.decodeInvoice(encodedInvoice);
console.log(invoiceDetails)