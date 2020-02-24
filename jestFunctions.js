import { get } from 'axios';
const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    createUser: () => {
        const user = {
            firstName: 'Madsun'
        }
        user['lastName'] = 'Sonbero';
        return user;
    },
    createUserAlt: () => {
        return {
            firstName: 'Osa',
            lastName: 'Julian'
        }      

    },
    fetchUser: () => {
        get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => 'error')

    }
};


export default functions;
