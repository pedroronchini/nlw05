import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";


class UsersService {
  async create(email: string) {
    const usersRepository = getCustomRepository(UsersRepository)
    // Verificar se o usuário existe

    const userExists = await usersRepository.findOne({
      email
    });

    // Se existir, retornar usuário
    if(userExists) {
      return userExists;
    }

    // Se não existir, salvar no banco de dados
    const user = usersRepository.create({
      email
    });

    await usersRepository.save(user);
    
    return user;
    
  }
};

export { UsersService };
