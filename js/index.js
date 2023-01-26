const nunjucks = require( '../build/node_modules/nunjucks' ) ;

// import "../scss/style.scss";
// import nunjucks from "../templates/index.njk";
// import nunjucks from "./nunjucks";

// import templates from '../templates/index.njk'
// import exports from 'main.js'


nunjucks.configure({ autoescape: true });
nunjucks.renderString('Hello {{ username }}', { username: 'James' });

let api_url = 'http://localhost:1337/api/blogs/';

async function getapi (url) {

    const response = await fetch(url)

    // const promise = Promise.resolve(response)

    // console.log(promise)

    let data = response.json();

    console.log(data.data['0'].attributes.Title)

    // for (let i of data) {
        
    //     // console.log(i)

    // }

}

// getapi(api_url)

// console.log(response
    
    
// let response = fetch(api_url)
//     .then((response) => {
//         return response.json()
//     });

let response = fetch(api_url)

.then( (response) => {
    return response.json()
})
.then( (data) => { 
        // console.log(data.data[0].attributes.Title);
        // console.log(data);
        return data
    }
);

let handleResponse = () => {

    let dataLoop = []

    response.then((data) => {

        var guff = data.data
        // console.log(guff + 'guffff')

        for (let i of guff) {
            // console.log(JSON.stringify(i))
            // console.log(i.attributes.Title)
            dataLoop.push(i.attributes)
            
        }
        console.log(dataLoop)

        return dataLoop

        // document.body.innerHTML = nunjucks( () => {

        //     for (let item of dataLoop) {
        //         return item
        //     }
        // })

    })

    
}

    handleResponse()

    // console.log(dataLoop)

    var env = nunjucks.configure(['hello'])
    console.log(env)
    env.addGlobal('getContext', function() { 
        return this.ctx;
    })

    // console.log(response)
    // let userToken

    // userToken.then(function(response) {
    //     console.log(response) // "Some User token"
    // })
    

    


//     var template = nunjucks.compile('Hello {{ username }}');
// template.render({ username: 'James' });