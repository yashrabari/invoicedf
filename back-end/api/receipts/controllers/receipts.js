const { parseMultipartData, sanitizeEntity } = require('strapi-utils');
var fs = require('fs');
var path = require('path')
var pdf = require('html-pdf');


'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {

    async create(ctx) {

        var li;


        for (let index = 0; index < 50; index++) {
            li += `<h1>Hello</h1>`
        }


        const html = `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        
        <body>
            ${li}
        </body>
        
        </html>`




        let entity;
        if (ctx.is('multipart')) {
            const { data, files } = parseMultipartData(ctx);
            entity = await strapi.services.receipts.create(data, { files });
        } else {
            console.log('====================================');
            console.log(ctx.request.body);
            console.log('====================================');
            var options = { format: 'A4' };
            pdf.create(html, options).toFile((path.join(__dirname, '../../../public/bills/businesscard.pdf')), function (err, res) {
                if (err) return console.log(err);
                console.log(res); // { filename: '/app/businesscard.pdf' }
            });

            entity = await strapi.services.receipts.create(ctx.request.body);
        }
        return sanitizeEntity(entity, { model: strapi.models.receipts });
    },

};
