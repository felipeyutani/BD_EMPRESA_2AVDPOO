import { getCustomRepository } from 'typeorm'
import { ResponsaveisRepository } from '../repositories/ResponsaveisRepository'

interface IResponsaveisCreate {
  nome_do_responsavel: string;
  telefone: string;
}

class ResponsaveisServices {

  async create({ nome_do_responsavel, telefone }: IResponsaveisCreate) {
    const responsaveisRepository = getCustomRepository(ResponsaveisRepository)

    const responsaveis = responsaveisRepository.create({
        nome_do_responsavel,
        telefone
    })

    await responsaveisRepository.save(responsaveis)

    return responsaveis;

  }

  async index() {
    const responsaveisRepository = getCustomRepository(ResponsaveisRepository)

    const responsaveis = await responsaveisRepository.find()

    return responsaveis;
  }
}

export { ResponsaveisServices }
