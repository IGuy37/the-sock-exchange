export async function get(url='https://httpbin.org/get'){
    return await fetch(url)
    .then(response => response.json())
    .catch((error) => console.error('Error:', error));
}

export default async function post(data, url="https://httpbin.org/post"){
    if(!data) 
        data = JSON.stringify({'Id': 123, 'Name': 'J Doe'});
    else if (typeof data !== "string"){
        data = JSON.stringify(data);
    }
    return await fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
        //'Access-Control-Allow-Origin': url
    },
    body: data
    }).then(response => response.json())
    .catch((error) => console.error('Error:', error));
}

export async function put(data, url="https://httpbin.org/put"){
    if(!data) 
        data = JSON.stringify({'Id': 123, 'Name': 'J Doe'});
    else if (typeof data !== "string"){
        data = JSON.stringify(data);
    }
    return await fetch(url, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: data
    }).then(response => response.json())
    .catch((error) => console.error('Error:', error));
}

export async function del(url='https://httpbin.org/delete'){
    return await fetch(url, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .catch((error) => console.error('Error:', error));
}