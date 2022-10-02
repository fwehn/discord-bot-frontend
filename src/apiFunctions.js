const backendUrl = 'http://localhost:3000/';

function apiGetCall(endpoint){
    return new Promise((resolve, reject) => {
        fetch(backendUrl + endpoint)
            .then(response => response.json())
            .then(resolve)
            .catch(reject);
    });
}

function apiPostCall(endpoint, body){
    console.log(body)

    return new Promise((resolve, reject) => {
        fetch(backendUrl + endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(response => response.json())
            .then(resolve)
            .catch(reject);
    });
}

module.exports = {
    apiGetCall, apiPostCall
}