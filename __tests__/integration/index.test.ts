import respExpress from "../../src/index";
import * as App from "express";
import { Router } from "express";
import axios from "axios";
import * as http from "http";

let server: http.Server;
const fetch = axios.create({
  baseURL: "http://localhost:8080",
});

const toString = (obj: object) => {
  return JSON.stringify(obj);
};

beforeAll(() => {
  const port = 8080;
  const express = App();
  const router = Router();
  express.use(App.json());

  router.get("/api/returnSucessMessage/", (req, res) => {
    respExpress.returnSucessMessage(res, "Ok Message");
  });

  router.get("/api/returnSucessObject/", (req, res) => {
    respExpress.returnSucessObject(res, { valor: "this test" });
  });

  router.get("/api/returnErrorMessage/", (req, res) => {
    try {
      throw new Error("Ohhh Error 400!!!");
    } catch (error) {
      respExpress.returnErrorMessage(res, error.message);
    }
  });

  router.get("/api/returnErrorObject/", (req, res) => {
    try {
      throw new Error("Ohhh Error 400!!!");
    } catch (error) {
      respExpress.returnErrorObject(res, { custoKey: error.message });
    }
  });

  router.get("/api/returnObjectWithCode/", (req, res) => {
    respExpress.returnObjectWithCode(res, 201, {
      custoKey: "content to return",
    });
  });

  router.get("/api/returnErrorCode/", (req, res) => {
    try {
      throw new Error("Ohh no!, error 404");
    } catch (error) {
      respExpress.returnErrorCode(res, 404, "Ohh no!, error 404");
    }
  });

  router.get("/api/returnSucessCode/", (req, res) => {
    respExpress.returnSucessCode(res, 202, 'hey, ok, hey ok this call was a success');
  });

  express.use(router);

  server = http.createServer(express);
  server.listen(port);
});

describe("Init", () => {
  test("Return sucess: code 200 and message sucess", async (done) => {
    try {
      const response = await fetch.get("/api/returnSucessMessage");
      expect(response.status).toBe(200);
      expect(response.data.ok).toBe("Ok Message");
      done();
    } catch (error) {
      done(error);
    }
  });

  test("Return sucess: code 200 and object", async (done) => {
    try {
      const response = await fetch.get("/api/returnSucessObject");
      expect(response.status).toBe(200);
      expect(toString(response.data)).toBe(toString({ valor: "this test" }));
      done();
    } catch (error) {
      done(error);
    }
  });

  test("Return error: code 400 and message error", async (done) => {
    try {
      const response = await fetch.get("/api/returnErrorMessage");
    } catch (error) {
      expect(error.response.status).toBe(400);
      expect(error.response.data.error).toBe("Ohhh Error 400!!!");
      done();
    }
  });

  test("Return error: code 400 and object", async (done) => {
    try {
      const response = await fetch.get("/api/returnErrorObject");
    } catch (error) {
      expect(error.response.status).toBe(400);
      expect(toString(error.response.data)).toBe(
        toString({ custoKey: "Ohhh Error 400!!!" })
      );
      done();
    }
  });

  test("Return Object: code and object", async (done) => {
    try {
      const response = await fetch.get("/api/returnObjectWithCode");
      expect(response.status).toBe(201);
      expect(toString(response.data)).toBe(
        toString({ custoKey: "content to return" })
      );
      done();
    } catch (error) {
      done(error);
    }
  });

  test("Return error: code informed and message", async (done) => {
    try {
      const response = await fetch.get("/api/returnErrorCode");
    } catch (error) {
      expect(error.response.status).toBe(404);
      expect(error.response.data.error).toBe("Ohh no!, error 404");
      done();
    }
  });

  test("Return Sucess: code informed and message", async (done) => {
    try {
      const response = await fetch.get("/api/returnSucessCode");
      expect(response.status).toBe(202);
      expect(response.data.ok).toBe("hey, ok, hey ok this call was a success");
      done();
    } catch (error) {
      done(error);
    }
  });
});

afterAll(() => {
  server.close();
});
