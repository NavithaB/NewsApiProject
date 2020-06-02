//es7(ecma2017)onwards async and await(ontop of promises)
//instead of then and catch we use async and await 
let url="https://api.github.com/users";
let findGitUsers=async()=>{
    //window.fetch(url).then(data=>{
      //  data.json().then().catch()
    //}).catch()
    let data=await window.fetch(url);
    let response=await data.json();
    console.log(response);
}
findGitUsers();
