function setup() {
    var ul = document.getElementsByTagName('ul')[0];
    var lis = document.querySelectorAll('ul li');
    for (var i = 0; i < lis.length; i++) {
        lis[i].addEventListener('click', function (e) {

            ul.remove(e.target);
            ul.insertBefore(e.target, ul.children[0]);
        });
    }
}

// Example case. 



setup();

document.getElementById("container").getElementsByTagName("li")[1].click();

function Employee(givenName, familyName) {
    this.givenName = givenName;
    this.familyName = familyName;
}

const employee1 = new Employee('Osa', 'Julian');
const employee2 = Employee('Osaretin', 'Magnus');

console.log(employee1);
console.log(employee2);

console.log(givenName, familyName);
console.log(global.givenName);

document.getElementsByTagName('ul')[0].insertBefore()