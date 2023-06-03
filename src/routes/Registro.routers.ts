import { Router, Response, Request } from 'express'
import FormularioController from '../controllers/FormularioController'

class formulario.routers{

    router:Router
    miformularioController:formularioController

    constructor(){
        this.router=Router()
        this.miformularioController= new formularioController()
        this.routes()
    }

    private routes(){
        this.router.get(
            '/formulario/:formulario',
            (req:Request, res:Response)=>{
                this.miformularioController.obtenerDefinicion(req,res)
            }
        )
    }
}

export default new formulario.routers().router

