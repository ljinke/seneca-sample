process.env.AMQP_URL = 'amqp://guest:administrator@localhost:5672/'
const seneca = require('seneca');
const senecaTransport = require('seneca-amqp-transport');
const senecaPromise = require('seneca-promise')

const routes = require('./route')

seneca.use(senecaPromise).use(senecaTransport);

seneca.ready(() => {
    routes(seneca)
});

seneca.listen({
    type: 'amqp',
    pin: ['action:get_time', 'level:*', 'proc:status'],
    name: 'seneca.multi-task.queue',
    url: process.env.AMQP_URL
  });