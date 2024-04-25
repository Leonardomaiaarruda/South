import { Router } from "express";
import {body, validationResult } from 'express-validator';
import * as Pages from '../controller/controllerPage.js'

const routes = Router();


routes.get('/', Pages.home)

routes.post('/enviado', Pages.form)

export default routes;