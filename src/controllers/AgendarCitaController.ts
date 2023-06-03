import {Request, Response} from 'express'
import { PrismaClient } from '@prisma/client'


class citaController{

    private prismaClient:PrismaClient

    constructor(){
        this.prismaClient=new PrismaClient()
    }

    async obtenerCita(req:Request, res:Response){
        const medicos= await this.prismaClient.cita.findMany()
        res.json(medicos)
    }

}

export default citaController