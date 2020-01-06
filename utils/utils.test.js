const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
    it('should add two numbers', () => {
        var res = utils.add(33, 11);
    
        expect(res).toBe(44).toBeA('number');
    });
    
    it('should square a number', () => {
        var res = utils.square(2);
    
        expect(res).toBe(4).toBeA('number');
    });

    describe('Async Functions', () => {
        it('should async add two numbers', (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done();
            })
        });

        it('should async square a number', (done) => {
            var res = utils.asyncSquare(3, (square) => {
                expect(square).toBe(9).toBeA('number');
                done();
            });
        });
    });
});

it('should verify first and last name are set', () => {
    let userObj = utils.setName(({
        age: 21,
        location: 'Pakistan'
    }), 'Talha Iqbal');

    expect(userObj).toInclude({firstName: 'Talha', lastName: 'Iqbal'});
});

// it('should accept some values', () => {
//     // expect(12).toNotBe(11);
//     // expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
//     // expect([2, 3, 4]).toExclude(4);
//     expect(
//     {
//         name: 'Talha',
//         age: 25,
//         location: 'Pakistan'
//     }
//     )
//     .toInclude(
//         {
//             age:25
//         }
//     )
// });