import { Router, Request, Response } from 'express'
import especialidadController from '../controllers/especialidadController'

class especialidad.routers{

    router:Router
    especialidadController: especialidadController

    constructor(){

        this.router=Router()
        this.especialidadController= new especialidadController()
        this.routes()
    }

    private routes():void{

        this.router.get('/especialidad',
            (req:Request, res:Response)=> {
                this.especialidadController.obtenerEspecialidad(req,res)
            }        
        )
    }

}

export default new especialidad.routers().router
