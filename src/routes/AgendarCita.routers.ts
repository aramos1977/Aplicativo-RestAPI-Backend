import { Router, Request, Response } from 'express'
import citaController from '../controllers/citaController'

class cita.Router{

    router:Router
    citaController: citaController

    constructor(){

        this.router=Router()
        this.citaController= new citaController()
        this.routes()
    }

    private Router():void{

        this.router.get('/cita',
            (req:Request, res:Response)=> {
                this.citaController.obtenerCita(req,res)
            }        
        )
    }

}

export default new cita.routers().router