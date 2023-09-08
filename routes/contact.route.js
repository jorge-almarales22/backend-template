import {Router} from 'express'
import { getEmail, pong } from '../controllers/contact.controller.js'

export const contactRoutes = Router()

contactRoutes.post('/', getEmail)
contactRoutes.get('/ping', pong)
