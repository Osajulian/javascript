import { add, isNull, createUser, fetchUser } from './jestFunctions';

// Matchers
// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
//toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

// toBe
test('adds 2 + 2 equals 4', () => {
    expect(add(2, 2)).toBe(4);
});

// Not
test('adds 2 + 2 to NOT equal 5', () => {
    expect(add(2, 2)).not.toBe(5);
});

// toBeNull
test('expects isNull to return null', () => {
    expect(isNull()).toBeNull();
});

// toEqual (use for objects and arrays)
test('createUser returns Madsun Sonbero object', () => {
    expect(createUser()).toEqual({firstName: 'Madsun', lastName: 'Sonbero'});
});
// The above fails because yoBe is for testing primitive types (strings, number). In JavaScript comparing
// objects or arrays requires taking inbto consideration that they are reference types thus 2 objects might have
// the same values but they are not equal because they might be addressed in different memory locations, so you
// should use toEqual matcher instead.

// Less than and greater than

test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
});
// As in the above test, the logic or function can be in another file, it can be in the actual test 
// itself as above - jest is very flexible. Note that we don't need to pass a function to expect, any value 
// will suffice.

// Less than or equal
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex
test('There should not be an I in team', () => {
    expect('team').not.toMatch(/I/);
});

// arrays
test('Fay should be in usernames', () => {
    const usernames = ['Fay', 'Emma', 'Christine', 'Danielle', 'Gabrielle'];
    expect(usernames).toContain('Fay');
});

// Working with async data
// You should use expect.assertions(1) and include the number of assertions (1) in this case when working 
// with a promise. expect.assertions() verifies that a certain number of assertions are
// called, which in this case is 1. This is used when testing asynchronous code in order to make sure that the
// assertions in our callbacks or in this case a .then of a promiseactually get called.
// Alsoyou should return the promise,if you omit the return statement,the test will complete before the fetch is completed.

test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1);
return fetchUser().then(data => {
expect(data.name).toEqual('Leanne Graham');
    });
});
