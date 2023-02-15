
/*non funziona la call*/

/*const getProducts = async(url)=>{

    try{
        const data = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
            headers: {
                           "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RkM2Y2Y2M0MWI1NDAwMTVlNjAzODciLCJpYXQiOjE2NzU0NDUzMTEsImV4cCI6MTY3NjY1NDkxMX0.Rj0vUWYCOyU-vS9NmkunVEZy68M_ZxzW9hG2Xb4hHCo",
                           "Content-Type" : "application/json",
                        },
                    method: 'GET'
            });
        return await data.json();}

        catch(error) {
            console.log(error);
        }
}*/

//CALL THE API
const getRequest = async (url) => {
    console.log('func.async.getRequest -> start');
    try {
        const data = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RkM2Y2Y2M0MWI1NDAwMTVlNjAzODciLCJpYXQiOjE2NzU0NDUzMTEsImV4cCI6MTY3NjY1NDkxMX0.Rj0vUWYCOyU-vS9NmkunVEZy68M_ZxzW9hG2Xb4hHCo",
            }
        });

        return await data.json();
    }
    catch (error) {
        console.log(error);
    }
}

//POST FUNCTION
const postRequest = async (formData, url) => {
    try{
        const data = await fetch(url, {
            method: 'POST', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RkM2Y2Y2M0MWI1NDAwMTVlNjAzODciLCJpYXQiOjE2NzU0NDUzMTEsImV4cCI6MTY3NjY1NDkxMX0.Rj0vUWYCOyU-vS9NmkunVEZy68M_ZxzW9hG2Xb4hHCo",
            }, 
            body: JSON.stringify(formData),
        })

        return await data.json();
    }
    catch(error){
        console.log(error);
    }
}

//PATCH FUNCTION
const putRequest = async (formData, prodID, url) => {
    try{
        const data = await fetch(`${url}${prodID}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RkM2Y2Y2M0MWI1NDAwMTVlNjAzODciLCJpYXQiOjE2NzU0NDUzMTEsImV4cCI6MTY3NjY1NDkxMX0.Rj0vUWYCOyU-vS9NmkunVEZy68M_ZxzW9hG2Xb4hHCo",
            }, 
            body: JSON.stringify(formData),
        })
    }
    catch(error){
        console.log(error)
    }
}

//DELETE FUNCTION
const deleteRequest = async (prodID, url) => {
    try{
        const data = await fetch(`${url}${prodID}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RkM2Y2Y2M0MWI1NDAwMTVlNjAzODciLCJpYXQiOjE2NzU0NDUzMTEsImV4cCI6MTY3NjY1NDkxMX0.Rj0vUWYCOyU-vS9NmkunVEZy68M_ZxzW9hG2Xb4hHCo",
            }, 
        })
    }
    catch(error){
        console.log(error)
    }
}

/* 
.then(response => console.log(responde))

call the api seconda versione
let option = {
    headers: {
           "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RkM2Y2Y2M0MWI1NDAwMTVlNjAzODciLCJpYXQiOjE2NzU0NDUzMTEsImV4cCI6MTY3NjY1NDkxMX0.Rj0vUWYCOyU-vS9NmkunVEZy68M_ZxzW9hG2Xb4hHCo",
           "Content-Type" : "application/json",
        },
    method: 'GET'
}

let option1 = {
    method: 'POST',
    body: JSON.stringify({
        userId: 1,
        title: "Fix my bugs",
        completed: false
      }),
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RkM2Y2Y2M0MWI1NDAwMTVlNjAzODciLCJpYXQiOjE2NzU0NDUzMTEsImV4cCI6MTY3NjY1NDkxMX0.Rj0vUWYCOyU-vS9NmkunVEZy68M_ZxzW9hG2Xb4hHCo",
        "Content-Type" : "application/json",
         },
}

function fetchEc(){
    fetch("https://striveschool-api.herokuapp.com/api/product/",option).then(res=>res.json()).then(res=>{
        console.log(res.id)
    }).catch(err=>{})
}
fetchEc()

function fetchEc2(){
    fetch("https://striveschool-api.herokuapp.com/api/product/", option1
      )
        .then((response) => response.json())
        .then((json) => console.log(json));
}
fetchEc2()*/

//call funzionante
let requestURL2 = '.prodotti.json';
let request = new XMLHttpRequest();
request.open('GET',requestURL);
request.responseType = 'json';
request.send();

request.onload = function(){
const prodotti = request.response;
console.log(prodotti);

}

// create element
const createEl = (type, attribute, ...children)=>{
    const element = document.createElement(type)
    Object.keys(attribute).forEach((key)=>{
        element.setAttribute(key, attributes[kay])
    })
    children.forEach((child)=>{
        typeof child === "string"
        ? element.appenChild(document.createTextNode(child)): element.appenChild(child)
    })
    return element
}

// 
const create = (data, place) => {
    const ecomers = createElement('div', { class: 'row g-3 mb-4' }, 
        createElement('div', {class: 'col-4 px-4'}, 
            createElement('img', {src: `${data.immagine}`}, )
        ),   
        createElement('a', {class: 'add-cart-btn', href: '#'}, 'Aggiungi al carrello'),
    );

    place.appendChild(ecomers);
}
