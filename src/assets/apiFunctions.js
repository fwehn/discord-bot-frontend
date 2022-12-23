const backendUrl = 'http://localhost:3000/';
// todo never let this be public
const auth = "API_AUTH_TOKEN";

export function apiGetCall(endpoint){
    return new Promise((resolve, reject) => {
        fetch(backendUrl + endpoint, {headers: {"authorization": auth}})
            .then(response => response.status === 200 ? response.json() : reject(response))
            .then(resolve)
            .catch(reject);
    });
}

export function apiPostCall(endpoint, body){
    return new Promise((resolve, reject) => {
        fetch(backendUrl + endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': auth
            },
            body: JSON.stringify(body)
        })
            .then(response => response.status === 201 || response.status === 200 ? response.json() : reject(response))
            .then(resolve)
            .catch(reject);
    });
}

export function apiDeleteCall(endpoint, id){
    return new Promise((resolve, reject) => {
        fetch(backendUrl + endpoint + '/' + id, {
            method: 'DELETE',
            headers: {"authorization": auth}
        })
            .then(response => response.status === 200 ? response.json() : reject(response))
            .then(resolve)
            .catch(reject);
    });
}