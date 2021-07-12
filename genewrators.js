//install and import bluebird

import {coroutine as co} from 'bluebird';
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

const getRandomUsers = co(function* (n){
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

async function logName(name){
    //we can yield promises using await
    const transformName = new Promise((resolve, reject)=>{
setTimeout(()=>resolve(name.toUpperCase()),2000);
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

const getRandomUsers = async n =>{
    try {
        const fetchRandomUser = await 
        fetch(`https://randomuser.me/api/?results=${n}`);
        const data = await fetchRandomUser.json();
        data.forEach(user => {
            const { gender, email } = user;
            console.log(`${gender} ${email}`);
        });
        return data;
    }catch (error){
        console.log(error);;
    }  
};

getRandomUser(9);