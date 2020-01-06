const request = require('supertest');
const expect = require('expect');

let app = require('./server').app;

describe('Server', () => {
    describe('GET /', () => {
        it('should return Hello world! response', (done) => {
            request(app)
                .get('/')
                .expect(200)
                // .expect({
                //     error: 'Page not found.'
                // })
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found.'
                    });
                })
                .end(done)
        });
    });

    describe('GET /users', () => {
        it('should return my user object', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Mike',
                        age: 26
                    });
                })
                .end(done);
        });
    });
});


