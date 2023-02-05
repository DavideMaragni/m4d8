let requestURL = './prodotti.json';

//controllo
// let request = new XMLHttpRequest();
// request.open('GET',requestURL);
// request.responseType = 'json';
// request.send();
// request.onload = function(){
//     const prodotti = request.response;
//     console.log(prodotti);

// }

//fine controllo

const getProducts1 = async (url)=>{

    try{
        const data2 = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
            method: 'POST',
             body:
             {
                "username": "davide2396@gmail.com",
                "password" : 1234,
             },
             headers: {
             "Content-Type" : "application/json; charset=UFT-8"
         },
        });
        return await data2.json();}

        catch(error) {
            console.log(error);
        }
}