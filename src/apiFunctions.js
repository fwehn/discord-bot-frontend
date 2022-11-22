const backendUrl = 'http://localhost:3000/';

function apiGetCall(endpoint){
    return new Promise((resolve, reject) => {
        fetch(backendUrl + endpoint)
            .then(response => response.status === 200 ? response.json() : reject(response))
            .then(resolve)
            .catch(reject);
    });
}


function apiPostCall(endpoint, body){
    return new Promise((resolve, reject) => {
        fetch(backendUrl + endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(response => response.status === 201 ? response.json() : reject(response))
            .then(resolve)
            .catch(reject);
    });
}

function apiDeleteCall(endpoint, id){
    return new Promise((resolve, reject) => {
        fetch(backendUrl + endpoint + '/' + id, {
            method: 'DELETE'
        })
            .then(response => response.status === 200 ? response.json() : reject(response))
            .then(resolve)
            .catch(reject);
    });
}

module.exports = {
    apiGetCall, apiPostCall, apiDeleteCall
}