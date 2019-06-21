const supertest = require('supertest');
const server = require('./server');

describe('server', () => {
    describe('GET /', () => {
        it('responds 200', () => {
            return supertest(server)
                .get('/')
                .expect(200)
                .expect('Content-Type', /json/i);
        });
        it('responds { api: "up" }', async () => {
            await supertest(server)
              .get('/')
              .then(res => {
                expect(res.body).toEqual({ api: 'up' });
              });
          });
        
    });
    describe('get /cars', () => {
        it('responds 200', () => {
            return supertest(server)
                .get('/cars')
                .expect(200)
                .expect('Content-Type', /json/i);
        })
    })
})