/* eslint-disable no-mixed-spaces-and-tabs */
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger.conf';
import express,{Application, Request, Response} from 'express';

import cita.routers from './routes/cita.routers';
import paciente.routers from './routes/paciente.routers';
import medico.routers from './routes/medico.routers';
import especialidad.routers from './routes/especialidad.routers';
import formulario.routers from './routes/formulario.routers';

import cors from 'cors';

/**
 * Clase principal de la API. Define las rutas de la API
 * 
 * @author Alexander Ramos
 * @description Clase inicial de ejemplo para manejar rutas y documentación
 */
class App{

	//Atributos
	public app:Application
	private server:any
	

	/**
     * Método constructor de la clase
     * 
     * @author Alexander Ramos
     */
	constructor(){

		/**
         * Express es la biblioteca para definir API en el ecosistema de Node.js
         */
		this.app=express()

		this.app.use(express.json())
		this.app.use(
			'/api-docs',
			swaggerUi.serve,
			swaggerUi.setup(swaggerSpec)
		)
		this.app.use(cors())
		this.routes()
	}

	/**
	 * Definir y agregar las rutas de la API con express
	 */
	private routes():void{
        this.app.use('/', paciente.routers)
		this.app.use('/', medico.routers)
		this.app.use('/', cita.routers)
		this.app.use('/', especialidad.routers)
		this.app.use('/', formulario.routers)
		
	}

	public start():void{

		this.server=this.app.listen(
			3000,
			()=>{console.log('El servidor está escuchando en el puerto 3000')}
		)
	}

	public close():void{
		this.server.close()
	}

}

export default App