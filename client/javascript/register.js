async function post(data, url){
    if (typeof data !== "string"){
        data = JSON.stringify(data);
    }
    const result = await fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
        //'Access-Control-Allow-Origin': url
    },
    body: data
    }).then(response => response.json())
    .catch((error) => console.error('Error:', error));
    console.log(result)
    return result;
}

async function register(name, email){
    console.log(email);
    const data = {
        name: name,
        email: email
    };
    const url = "https://ecs.the-sock-exchange.com/api/register";
    //const getResponse = await fetch(url);
    const response = await post(data, url);
    console.log(response)
    if(response.message === "success"){
        alert("Successfully registered! :)");
    } else {
        alert("The registration was unsucessful. Please try again.");
    }
}

document.getElementById('registerButton').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    register(name, email);
});