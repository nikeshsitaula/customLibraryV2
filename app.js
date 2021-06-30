const http = new customHTTP;

//Get Users
// const users = http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data=>console.log(data))
//     .catch(err => console.log(err));


// POST method

const data = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'jdoe@gmail.com'
}

//create user
// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data=>console.log(data))
//     .catch(err => console.log(err));


//update user using put method
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//     .then(data=>console.log(data))
//     .catch(err => console.log(err));

//delete user using delete method
http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data=>console.log(data))
    .catch(err => console.log(err));


