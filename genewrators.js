//install and import bluebird

import { coroutine as co } from 'bluebird';
/*
 //learn more on generators
// we use generators in promises to avoid callback hell

const getRandomUser = n => {
    const fetchRandomUser = fetch(`https://randomuser.me/api/?results=${n}`);
    console.log(fetchRandomUser);
    fetchRandomUser.then(data => {
        data.json().then(randomUsers => {
            randomUsers.result.forEach(user => {
                const { gender, email } = user;
                console.log(`${gender} ${email}`);
            })
        })
    });
}

getRandomUser(23);
 */

const getRandomUsers = co(function* (n) {
    const fetchRandomUser = yield fetch(`https://randomuser.me/api/?results=${n}`);
    const data = yield fetchRandomUser.json();
    return data;
});

getRandomUser(9).then(randomUsers => {
    randomUsers.result.forEach(user => {
        const { gender, email } = user;
        console.log(`${gender} ${email}`);
    });
}).catch(err => console.log(err));

//async await

async function logName(name) {
    //we can yield promises using await
    const transformName = new Promise((resolve, reject) => {
        setTimeout(() => resolve(name.toUpperCase()), 2000);
    });
    const result = await transformName;
    console.log(result);
    //it returns a promise
    console.log(name);
    return result;
}

logName('antonio').then(result => {
    console.log('result from async' + res);
});

//generators to await
/**
 * const getRandomUser = n => {
    const fetchRandomUser = fetch(`https://randomuser.me/api/?results=${n}`);
    console.log(fetchRandomUser);
    fetchRandomUser.then(data => {
        data.json().then(randomUsers => {
            randomUsers.result.forEach(user => {
                const { gender, email } = user;
                console.log(`${gender} ${email}`);
            })
        })
    });
}

getRandomUser(23);
 */

const getRandomUsers = async n => {
    try {
        const fetchRandomUser = await
            fetch(`https://randomuser.me/api/?results=${n}`);
        const data = await fetchRandomUser.json();
        data.forEach(user => {
            const { gender, email } = user;
            console.log(`${gender} ${email}`);
        });
        return data;
    } catch (error) {
        console.log(error);;
    }
};

getRandomUser(9);

let x = function () {
    console.log("i am called from inside a function");
};

let y = function (callback) {
    console.log("do something here");
    callback();
};

y(x);
let p = new Promise((resolve, reject) => {
    let x = 2 + 2;
    if (x == 4) {
        resolve('done')
    } else {
        reject('error'); //we can also pass anything we want
    }
});
p.then(message => {
    console.log("this is a message" + message);
}).catch(error => console.log(error));

function* car() {
    const numb2 = yield 2;
    const numb3 = yield 3;
    const numb4 = yield 4;
    const numb5 = yield 5;
};

const getNumber = function* () {
    yield 2;
    yield "hello";
    yield true;
    yield { name: "anna" };
    return 'i am done'
};

const numberGen = getNumber();
console.log(numberGen.next().value);
console.log(numberGen.next().value);
console.log(numberGen.next().value);
console.log(numberGen.next().value);
console.log(numberGen.next().value);

