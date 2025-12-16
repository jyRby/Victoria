import path from "path";
import { Sequelize, DataTypes } from "sequelize";
import config from "../config";

module.exports = (toplevelDir, toplevelBasename) => {
    const sequelizeParams = {
        logging: config.verbose ? console.log : false,
        define: {
            freezeTableName: true,
        },
    };
    let sequelize;
    if (config.isProduction) {
        sequelizeParams.dialect = 'postgres';
        sequelizeParams.dialectOptions = {    
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
    };
    sequelize = new Sequelize(config.databaseUrl, sequelizeParams);
    } else {
        sequelizeParams.dialect = 'sqlite';
        let storage;
        if (process.env.NODE_ENV === 'test' || toplevelDir === undefined) {
            storage = ':memory:';
        } else {
            if (toplevelBasename === undefined) {
                toplevelBasename = 'db.sqlite3';
            }
            storage = path.join(toplevelDir, toplevelBasename);
        }
        sequelizeParams.storage = storage;
        sequelize = new Sequelize(sequelizeParams);
    }

    return sequelize;
}