import { Response } from 'express'

/**
 * @name RespExpress
 * @description Contains methods with encapsulated returns to facilitate expressed responses.
 */
class RespExpress {
  /**
   * @description Return sucess: code 200 and message sucess.
   * @param res Response Express Interface
   * @param message Error Message
   */
  public returnSucessMessage (res: Response, message: string): Response {
    return res.status(200).json({ ok: message })
  }

  /**
   * @description Return sucess: code 200 and object
   * @param res Response Express Interface
   * @param object Object to return
   */
  public returnSucessObject (res: Response, object: object): Response {
    return res.status(200).json(object)
  }

  /**
   * @description Return error: code 400 and message error
   * @param res Response Express Interface
   * @param message Error Message
   */
  public returnErrorMessage (res: Response, message: string): Response {
    return res.status(400).json({ error: message })
  }

  /**
   * @description Return error: code 400 and object
   * @param res Response Express Interface
   * @param object Object to return
   */
  public returnErrorObject (res: Response, object: object): Response {
    return res.status(400).json(object)
  }

  /**
   * @description Return Object: code and object
   * @param res Response Express Interface
   * @param code HTTP Code
   * @param object Object to return
   */
  public returnObjectWithCode (res: Response, code: number, object: object): Response {
    return res.status(code).json(object)
  }

  /**
   *
   * @description Return error: code informed and message
   * @param res Response Express Interface
   * @param code HTTP Error Code
   * @param message Error Message
   */
  public returnErrorCode (res: Response, code: number, message: string): Response {
    return res.status(code).json({ error: message })
  }

  /**
   * @description Return Sucess: code informed and message
   * @param res Response Express Interface
   * @param code HTTP Sucess Code
   * @param message Sucess Message
   */
  public returnSucessCode (res: Response, code: number, message: string): Response {
    return res.status(code).json({ ok: message })
  }
}

export default new RespExpress()
