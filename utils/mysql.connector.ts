import { createPool, Pool} from 'mysql';


const MY_SQL_DB_HOST = '127.0.0.1'
const MY_SQL_DB_USER = 'root'
const MY_SQL_DB_PASSWORD = ""
const MY_SQL_DB_PORT = 3306
const MY_SQL_DB_DATABASE = 'bookshelf'
const MY_SQL_DB_CONNECTION_LIMIT = 4


let pool: Pool;

/**
 * generates pool connection to be used throughout the app
 */
export const init = () => {
  try {
    pool = createPool({
      connectionLimit: MY_SQL_DB_CONNECTION_LIMIT,
      host: MY_SQL_DB_HOST,
      user: MY_SQL_DB_USER,
      password: MY_SQL_DB_PASSWORD,
      database: MY_SQL_DB_DATABASE,
    });

    console.debug('MySql Adapter Pool generated successfully');
  } catch (error) {
    console.error('[mysql.connector][init][Error]: ', error);
    throw new Error('failed to initialized pool');
  }
};

/**
 * executes SQL queries in MySQL db
 *
 * @param {string} query - provide a valid SQL query
 * @param {string[] | Object} params - provide the parameterized values used
 * in the query
 */
export const execute = <T>(query: string, params: string[] | Object): Promise<T> => {
  try {
    if (!pool) throw new Error('Pool was not created. Ensure pool is created when running the app.');

    return new Promise<T>((resolve, reject) => {
      pool.query(query, params, (error, results) => {
        if (error) reject(error);
        else resolve(results);
      });
    });

  } catch (error) {
    console.error('[mysql.connector][execute][Error]: ', error);
    throw new Error('failed to execute MySQL query');
  }
}