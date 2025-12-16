import dotenv from 'dotenv';

dotenv.config();

module.exports = {
    apiPath: '/api-victoria',
    databaseUrl: process.env.URI_DB_DEV || '',
    isProduction: process.env.NODE_ENV === 'production',
    secret: process.env.NODE_ENV === 'production' ? process.env.SECRET : 'secret',
    port: process.env.PORT || 3000,
}