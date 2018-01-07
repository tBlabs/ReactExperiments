// import { Chrome } from 'navalia';
const { Chrome } = require('navalia');

test('test', ()=>
{
    
    const chrome = new Chrome();
    
    chrome
        .goto('http://localhost:8080/login')
        .type('input', 'dupa')
        .click('.buy-now')
        .end()
        .then((responses) =>
        {
            console.log(responses); // ['https://www.amazon.com/', true, true, true]
        });

})