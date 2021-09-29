var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./index.html', 'utf8');

console.log('====================================');
console.log(html);
console.log('====================================');


var options = { format: 'A4' };

pdf.create(html, options).toFile('./businesscard.pdf', function (err, res) {
    if (err) return console.log(err);
    console.log(res); // { filename: '/app/businesscard.pdf' }
});

const DateToday = new Date(Date.now())
const BillingDate = DateToday.getDate() + "/" + (DateToday.getMonth() + 1) + "/" + DateToday.getFullYear()
const DueDate = (DateToday.getDate() + 50) + "/" + (DateToday.getMonth() + 1) + "/" + DateToday.getFullYear()




// const niceInvoice = require("nice-invoice");

// const invoiceDetail = {
//     shipping: {
//         name: "Micheal",
//         address: "1234 Main Street",
//         city: "Dubai",
//         state: "Dubai",
//         country: "UAE",
//         postal_code: 94111
//     },
//     items: [
//         {
//             item: "Chair",
//             description: "Wooden chair",
//             quantity: 1,
//             price: 50.00,
//             tax: "10%"
//         },
//         {
//             item: "Watch",
//             description: "Wall watch for office",
//             quantity: 2,
//             price: 30.00,
//             tax: "10%"
//         },
//         {
//             item: "Water Glass Set",
//             description: "Water glass set for office",
//             quantity: 1,
//             price: 35.00,
//             tax: ""
//         }, {
//             item: "Chair",
//             description: "Wooden chair",
//             quantity: 1,
//             price: 50.00,
//             tax: "10%"
//         },
//         {
//             item: "Watch",
//             description: "Wall watch for office",
//             quantity: 2,
//             price: 30.00,
//             tax: "10%"
//         },
//         {
//             item: "Water Glass Set",
//             description: "Water glass set for office",
//             quantity: 1,
//             price: 35.00,
//             tax: ""
//         }, {
//             item: "Chair",
//             description: "Wooden chair",
//             quantity: 1,
//             price: 50.00,
//             tax: "10%"
//         },
//         {
//             item: "Watch",
//             description: "Wall watch for office",
//             quantity: 2,
//             price: 30.00,
//             tax: "10%"
//         },
//         {
//             item: "Water Glass Set",
//             description: "Water glass set for office",
//             quantity: 1,
//             price: 35.00,
//             tax: ""
//         }
//     ],
//     subtotal: 156,
//     total: 156,
//     order_number: 1234222,
//     header: {
//         company_name: "Nice Invoice",
//         company_logo: "logo.png",
//         company_address: "Nice Invoice. 123 William Street 1th Floor New York, NY 123456",
//         chalan_number: 56
//     },
//     footer: {
//         text: "This is footer - you can add any text here"
//     },
//     currency_symbol: "$",
//     date: {
//         billing_date: BillingDate,
//         due_date: DueDate,
//     }
// };

// niceInvoice(invoiceDetail, 'your-invoice-name.pdf');