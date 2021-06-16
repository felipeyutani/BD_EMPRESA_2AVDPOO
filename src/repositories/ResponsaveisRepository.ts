import { Repository, EntityRepository } from 'typeorm'
import { Responsaveis } from '../entities/Responsaveis'

@EntityRepository(Responsaveis)
class ResponsaveisRepository extends Repository<Responsaveis> {

}

export { ResponsaveisRepository }

