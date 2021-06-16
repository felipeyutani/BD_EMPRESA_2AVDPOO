import { Request, response, Response } from 'express'
import { ResponsaveisServices } from '../services/ResponsaveisServices'

class ResponsaveisController {

  async create(request: Request, response: Response) {
    const { nome_do_responsavel, telefone } = request.body

    const responsaveisServices = new ResponsaveisServices()

    try {
      const responsaveis = await responsaveisServices.create({ nome_do_responsavel, telefone })
      return response.json(responsaveis)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async index(request: Request, response: Response) {
    const responsaveisServices = new ResponsaveisServices()

    try {
      const responsaveis = await responsaveisServices.index()
      return response.json(responsaveis)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }
}

export { ResponsaveisController }