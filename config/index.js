module.exports = {
    debug: true,
	app: {
        id: 'wx674504bb2570e1ec',
        secret: '2ceb242c729dda6d51f4062baf214a60',
        token: 'token'  
    },
    redis: {
        host: '127.0.0.1',
        port: '6379'
    },
    mq: "amqp://guest:guest@127.0.0.1:5672",
    mysql: {
        emdata_emr_account: {
            connectionLimit: 10,
            host: '192.168.9.223',
            user: 'root',
            password: '123456',
            database: 'emdata_emr_account'
        }
    },
    mongo: {
        emdataBI: "mongodb://192.168.9.223:27017/emdataBI"
    }
}