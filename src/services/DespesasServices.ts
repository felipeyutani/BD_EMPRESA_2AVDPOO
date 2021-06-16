import { getCustomRepository } from 'typeorm'
import { DespesasRepository } from '../repositories/DespesasRepository'

interface IDespesasCreate {
  data_da_compra: string;
  local_da_compra: string;
  valor: number;
  responsavel_id: string;
}

interface IDespesasShow {
  id: string
}

interface IDespesasUpdate {
  id: string;
  data_da_compra: string;
  local_da_compra: string;
  valor: number;
  responsavel_id: string;
}

class DespesasServices {
  async create({ 
      data_da_compra, local_da_compra, valor,
      responsavel_id }: IDespesasCreate) {
    const despesasRepository = getCustomRepository(DespesasRepository)

    const despesas = despesasRepository.create({
        data_da_compra,
        local_da_compra,
        valor,
        responsavel_id,
    })

    await despesasRepository.save(despesas)

    return despesas
  }

  async index() {
    const despesasRepository = getCustomRepository(DespesasRepository)

    const despesas = await despesasRepository.find({
      relations: ['responsaveis']
    })

    return despesas
  }

  async show({ id }: IDespesasShow) {
    const despesasRepository = getCustomRepository(DespesasRepository)

    const despesas = await despesasRepository.findOne(id, {
      relations: ['responsaveis']
    })

    if (!despesas) {
      throw new Error('ID de despesa não encontrado!')
    }

    return despesas
  }

  async delete({ id }: IDespesasShow) {
    const despesasRepository = getCustomRepository(DespesasRepository)

    const despesas = await despesasRepository.findOne({ id })

    if (!despesas) {
      throw new Error('ID de despesa não encontrado!')
    }

    return await despesasRepository.delete({ id })
  }

  async update({ id, data_da_compra, local_da_compra, valor, responsavel_id }: IDespesasUpdate) {
    const despesasRepository = getCustomRepository(DespesasRepository)

    let despesas = await despesasRepository.findOne({ id })

    if (!despesas) {
      throw new Error('ID de despesa não encontrado!')
    }

    await despesasRepository.update(
      id, {
        data_da_compra,
        local_da_compra,
        valor,
        responsavel_id
    })

    despesas = await despesasRepository.findOne({ id })

    return despesas
  }
}

export { DespesasServices }