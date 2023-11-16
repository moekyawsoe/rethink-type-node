import { RethinkDBTable } from '@/config/db_helper';
import { User } from '@interfaces/users.interface';

const instance = new RethinkDBTable('users');

const create = async (user: User) => {
  return instance.create(user);
};

const findOne = async (userId: string): Promise<User> => {
  return instance.getById(userId);
};

const findOneByEmail = async (email: string): Promise<User> => {
  const query = await instance.query();
  return query.get(email).run();
};

const findAll = async (): Promise<User[]> => {
  return instance.getAll();
};

const update = async (id: string, data: User): Promise<User> => {
  return instance.update(id, data);
};

const remove = async (id: string): Promise<User> => {
  return instance.delete(id);
};

export default {
  create,
  findOne,
  findAll,
  findOneByEmail,
  update,
  remove,
};
