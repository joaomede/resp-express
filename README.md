# Resp Express

[![Build Status](https://travis-ci.com/joaomede/resp-express.svg?branch=master)](https://travis-ci.com/joaomede/resp-express)

### A lib to facilitate express responses

Install

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
