const express = require('express');
var app = express();
const {default:AdminBro} = require('admin-bro');
const options = require('./admin.options');
const buildAdminRouter = require('./admin.router');
const port = 3000

const run = async () => {
  const admin = new AdminBro(options);
  const router = buildAdminRouter(admin);
  app.use(adminBro.options.rootPath, router);
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });
};

module.exports = run;