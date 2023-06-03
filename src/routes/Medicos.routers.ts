import { Router, Request, Response } from 'express'
import medicoController from '../controllers/medicoController'

class medico.routers{

    router:Router
    medicoController: medicoController

    constructor(){

        this.router=Router()
        this.medicoController= new medicoController()
        this.routes()
    }

    private routes():void{

        this.router.get('/medicos',
            (req:Request, res:Response)=> {
                this.medicoController.obtenerMedicos(req,res)
            }        
        )
    }

}

export default new medico.routers().router
