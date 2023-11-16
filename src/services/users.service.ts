import { hash } from 'bcrypt';
import { Service } from 'typedi';
import { HttpException } from '@exceptions/httpException';
import { User } from '@interfaces/users.interface';
import UserModel from '@models/users.model';
import { generate } from 'shortid';

@Service()
export class UserService {
  public async findAllUser(): Promise<User[]> {
    const users: User[] = await UserModel.findAll();
    return users;
  }

  public async findUserById(userId: string): Promise<User> {
    const findUser: User = await UserModel.findOne(userId);
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    return findUser;
  }

  public async createUser(userData: User): Promise<User> {
    const findUser: User = await UserModel.findOneByEmail(userData.email);
    if (findUser) throw new HttpException(409, `This email ${userData.email} already exists`);

    const hashedPassword = await hash(userData.password, 10);
    const payload: User = {
      id: generate(),
      email: userData.email,
      password: hashedPassword,
    };
    const createUserData = await UserModel.create(payload);
    return createUserData;
  }

  public async updateUser(userId: string, userData: User): Promise<User> {
    const findUser: User = await UserModel.findOne(userId);
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    userData.password = await hash(userData.password, 10);
    const updateUserData = await UserModel.update(userId, userData);
    return updateUserData;
  }

  public async deleteUser(userId: string): Promise<User> {
    const findUser: User = await UserModel.findOne(userId);
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    const deleteUserData = await UserModel.remove(findUser.id);
    return deleteUserData;
  }
}
