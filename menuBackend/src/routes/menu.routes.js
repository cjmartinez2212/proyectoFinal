import { Router } from 'express'

const router = Router()


//importacion de controladores
import * as menuController from '../controllers/menu.controller'

//crear un menu
router.post('/', menuController.crearMenu)
//listar el menu
router.get('/', menuController.listarMenu)
//listar por bebidas
router.get('/bebidas', menuController.listarBebidas)
//listar aperitivo
router.get('/aperitivos', menuController.listarAperitivos)
// listar postres
router.get('/postres', menuController.listarPostres)
// listar entradas
router.get('/platoFuerte', menuController.listarPF)
//Actualizar platillo
router.put('/:platilloId',menuController.actualizarPlatillo)
//eliminar un platillo
router.delete('/:platilloId', menuController.eliminarPlatilo)

//exportar todo lo que usa router - exportar rutas para usarlas en app.js
export default router