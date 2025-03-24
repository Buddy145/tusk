// let base_url="https://example.com"
// let name="Alice"
// let age=49
// let renew_url=`${base_url}?name=${name}&age=${age}`;

// console.log(renew_url)
let baseUrl = "https://example.com";
let params = new URLSearchParams();
params.append('name', 'Alice');
params.append('age', 25);

let url = `${baseUrl}?${params}`;

console.log(url); 
