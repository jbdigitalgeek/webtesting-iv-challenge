const supertest = require('supertest');
const server = require('./server');

describe('server', () => {
    describe('GET /', () => {
    it('responds 200', () => {
        return supertest(server)
            .get('/')
            .expect(200);
    });
    })
})