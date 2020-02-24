//print out each boy with a girl pair
let boys = ['Julian', 'James', 'Jack'];
let girls = ['Julia', 'Jasmine', 'Jessica']

for (let i = 0; i<boys.length; i++) {
    for (let j=0; j<girls.length; j++) {
        console.log(boys[i] + ' & ' + girls[j])
    }
}