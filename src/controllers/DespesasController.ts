import { Request, Response } from 'express'
import { DespesasServices } from '../services/DespesasServices'

class DespesasController {

  async create(request: Request, response: Response) {
    let { responsavel_id, data_da_compra, local_da_compra, valor } = request.body
    const despesasServices = new DespesasServices()

    try {
        const despesas = await despesasServices.create({
        responsavel_id, data_da_compra, local_da_compra, valor
    })
    return response.json(despesas)
    } catch(err) {
    return response
    .status(400)
    .json({ message: err.message })
    }
  }

  async index(request: Request, response: Response) {
    const despesasServices = new DespesasServices()
    try {
      const despesas = await despesasServices.index()
      return response.json(despesas)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async show(request: Request, response: Response) {
    const despesasServices = new DespesasServices()
    const { id } = request.params

    try {
      const despesas = await despesasServices.show({ id })
      return response.json(despesas)
    } catch (err) {
      return response
        .status(400)
        .json({ message: 'ID de despesa não encontrado' })
    }
  }

  async delete(request: Request, response: Response) {
    const despesasServices = new DespesasServices()
    const { id } = request.params

    try {
      await despesasServices.delete({ id })
      return response.json({ message: 'ID de despesa deletado com sucesso' })
    } catch (err) {
      return response
        .status(400)
        .json({ message: 'ID de despesa não encontrado' })
    }
  }

  async update(request: Request, response: Response) {
    const { data_da_compra, local_da_compra, valor, responsavel_id } = request.body
    const { id } = request.params

    const despesasServices = new DespesasServices()

    try {
      const despesas = await despesasServices.update({ id, local_da_compra, data_da_compra, valor, responsavel_id })
      return response.json(despesas)
    } catch (err) {
      return response
        .status(400)
        .json({ message: 'ID de despesa não encontrado' })
    }
  }
}

export { DespesasController }