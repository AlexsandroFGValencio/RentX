import { ICreateUsersDTO } from "../dto/ICreateUsersDTO";
import { User } from "../entities/User";

interface IUsersRepository {
  create(data: ICreateUsersDTO): Promise<void>;
  findbyemail(email: string): Promise<User>;
  findbyid(id: string): Promise<User>;
}

export { IUsersRepository };
