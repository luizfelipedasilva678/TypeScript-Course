export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host}`);
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) return Database.database;
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db = Database.getDatabase('localhost', 'root', '123123');
const db2 = Database.getDatabase('localhost', 'root', '123123');

db.connect();

db === db2 ? console.log('Igual') : console.log('Diferente');
