import { Router, Response, Request } from 'express'
import pacienteController from '../controllers/pacienteController'


class paciente.routers{

    router:Router
    pacienteController:pacienteController

    constructor(){

        this.router= Router()
        this.pacienteController= new pacienteController()
        this.routes()

    }

    private routes():void{
        this.router.get(
			'/pacientes',
            (req:Request, res:Response)=>{
                this.pacienteController.obtenerPacientes(req,res)
            }
		)

		this.router.post(
			'/crear_paciente',
            (req:Request, res:Response)=>{
                this.pacienteController.crearPaciente(req, res)
            }			
		)
    }
}

export default new paciente.routers().router
