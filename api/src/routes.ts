import { Router, Request, Response } from 'express';

import { register, login } from './controllers/UserController';

import cors from 'cors'

const routes = Router();

routes.use(cors());

routes.get('/', (request: Request, response: Response) => {
    return response.json({ message: "PRONTO CARALHOOOOO !" })
});

//autênticação
routes.post('/register', register); //
routes.post('/login', login); //


export default routes;