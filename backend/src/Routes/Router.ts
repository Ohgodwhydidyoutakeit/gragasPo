import { Router } from 'express'
import GragasContoller from '../Controller/GragasController/GragasController';

const MainRoute = Router();


MainRoute.get('/v1/getAll',GragasContoller.getAll)


export default MainRoute