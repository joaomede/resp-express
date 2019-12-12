import { Response } from 'express'

/**
 * @name VerifyAndReturns
 * @description Contains methods with encapsulated returns to facilitate expressed responses.
 */
class VerifyAndReturns {
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
}

export default new VerifyAndReturns()
