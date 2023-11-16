import r from 'rethinkdbdash';

export class RethinkDBTable {
  private tableName: string;

  constructor(tableName: string) {
    this.tableName = tableName;
  }

  private async getConnection() {
    return r({
      db: 'type-rethink-node',
      host: '192.168.20.20',
      port: 28015,
    });
  }

  async query() {
    const connection = await this.getConnection();
    return await connection.table(this.tableName);
  }

  async getAll() {
    const connection = await this.getConnection();
    return await connection.table(this.tableName).run();
  }

  async get(key: string) {
    const connection = await this.getConnection();
    return await connection.table(this.tableName).get(key).run();
  }

  async getById(id: string) {
    const connection = await this.getConnection();
    return await connection.table(this.tableName).get(id).run();
  }

  async create(data: any) {
    const connection = await this.getConnection();
    return await connection.table(this.tableName).insert(data).run();
  }

  async update(id: string, updateData: any) {
    const connection = await this.getConnection();
    return await connection.table(this.tableName).get(id).update(updateData).run();
  }

  async delete(id: string) {
    const connection = await this.getConnection();
    return await connection.table(this.tableName).get(id).delete().run();
  }
}
