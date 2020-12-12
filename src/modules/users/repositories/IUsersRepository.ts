import User from '../infra/typeorm/entities/User';
import ICreateUserDTo from '../dtos/ICreateUserDTO';

export default interface IUsersRepository {
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: ICreateUserDTo): Promise<User>;
  save(user: User): Promise<User>;
}
