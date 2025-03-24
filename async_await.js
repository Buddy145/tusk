//async and await:
async function fetchdata() {
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const result=await response.json();
        console.log("data fectched:",result)
    }
    catch(error)
    {
        console.log("error fetched")
    }
}
fetchdata()