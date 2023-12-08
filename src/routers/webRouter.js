import { Router } from "express";

export const webRouter = Router()

webRouter.get ('/', (req, res) => {
    res.render ('index', {titulo: 'Preentrega II'})
})

webRouter.get('/productos', (req, res) => {
    res.render('productos')
})

webRouter.get('/carrito', (req, res) => {
    res.render('carrito')
})