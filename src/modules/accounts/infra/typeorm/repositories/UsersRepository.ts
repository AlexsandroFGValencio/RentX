import { getRepository, Repository } from "typeorm";

import { ICreateUsersDTO } from "@modules/accounts/dto/ICreateUsersDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

import { User } from "../entities/User";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    email,
    password,
    avatar,
    id,
    driver_license,
  }: ICreateUsersDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
      avatar,
      id,
      driver_license,
    });

    await this.repository.save(user);
  }

  async findbyemail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });

    return user;
  }

  async findbyid(id: string): Promise<User> {
    const user = await this.repository.findOne(id);

    return user;
  }
}

export { UsersRepository };
