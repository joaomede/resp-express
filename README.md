# Resp Express

[![CI](https://travis-ci.com/joaomede/resp-express.svg?branch=master)](https://travis-ci.com/joaomede/resp-express)
![CI](https://github.com/joaomede/resp-express/workflows/CI/badge.svg?branch=master)
[![codecov](https://codecov.io/gh/joaomede/resp-express/branch/master/graph/badge.svg)](https://codecov.io/gh/joaomede/resp-express)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![npm](https://img.shields.io/npm/v/resp-express)
![npm bundle size (version)](https://img.shields.io/bundlephobia/min/resp-express/1.0.2)
![GitHub repo size](https://img.shields.io/github/repo-size/joaomede/resp-express)

### Install

```sh
npm install resp-express

or

yarn add resp-express
```

How to imports

```javascript
import resp from "resp-express";

or;

const resp = require("resp-express");
```

How to use

```javascript
app.get("/", function(req, res) {
  resp.returnSucessMessage(res, "Sucess !!");
});
// return object code 200 and object {ok: "Sucess !!"}

app.get("/", function(req, res) {
  resp.returnSucessObject(res, { text: "Sucess !!" });
});
/* return object code 200 and object 
{text: "Sucess !!"} 
*/

app.get("/", function(req, res) {
  resp.returnErrorMessage(res, "Error !!");
});
// return object code 200 and object {ok: "Error !!"}

app.get("/", function(req, res) {
  resp.returnErrorObject(res, { text: "Error !!" });
});
/* return object code 200 and object 
{text: "Error !!"} 
*/
```
