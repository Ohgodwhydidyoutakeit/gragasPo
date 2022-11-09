
import { Request, Response, NextFunction } from 'express'
import  respMock from '../../../assets/gragas-mock.json'
class GragasContoller {

    static getAll = async (request: Request, response: Response, next: NextFunction) => {
        response.json(respMock)
    }
}


export default GragasContoller