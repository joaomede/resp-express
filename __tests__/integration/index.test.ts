import respExpress from "../../src/index";
import { Router, response } from 'express'
const router = Router()


test('return error message', () => {
  router.get('/', () => {
    const resp = respExpress.returnErrorMessage(response, 'teste')
    expect(resp).toBe({})
  })
})

test('return error object', () => {
  router.get('/', () => {
    const resp = respExpress.returnErrorObject(response, {error: 'teste'})
    expect(resp).toBe(response)
  })
})


test('return sucess message ', () => {
  router.get('/', () => {
    const resp = respExpress.returnSucessMessage(response, 'teste')
    expect(resp).toBe(response)
  })
})

test('return sucess object ', () => {
  router.get('/', () => {
    const resp = respExpress.returnSucessObject(response, {error: 'teste'})
    expect(resp).toBe(response)
  })
})

test('return error code and message', () => {
  router.get('/', () => {
    const resp = respExpress.returnErrorCode(response, 200, 'teste')
    expect(resp).toBe(response)
  })
})


