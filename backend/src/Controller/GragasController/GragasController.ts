
import { Request, Response, NextFunction } from 'express'
import * as respMock from '../../../assets/gragas-mock.json'
class GragasContoller {

    static getAll = async (request: Request, response: Response, next: NextFunction) => {
        console.log(respMock)
        response.status(200).send({respMock})
    }
}


export default GragasContoller