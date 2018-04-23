var MQ = require('./MQ');

function MQDao(mqName) {
    this.mqName = mqName;
    this.mq = null;

    this.connect = async function () {
        if (!this.mq) {
            this.mq = new MQ();
            await this.mq.connect();
        }
    }

    this.publish = async function (data) {
        await this.connect();
        await this.mq.publish(mqName, data);
    }

    this.consumer = async function (callback) {
        var _this = this;
        await this.connect();
        await this.mq.consumer(mqName,callback);
    }
}

module.exports = MQDao;