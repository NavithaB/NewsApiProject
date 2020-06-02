/*-----------api key=-------96f4bf4ba8974741b75ddc6243d715c9------------*/
let SportsApi='http://newsapi.org/v2/top-headlines?country=us&apiKey=96f4bf4ba8974741b75ddc6243d715c9';

//let SportsApi= " http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=e6e33367ed964857a7d626445acda72f";

//let businessApi =" http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=96f4bf4ba8974741b75ddc6243d715c9 ";
//let healthApi =" http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=96f4bf4ba8974741b75ddc6243d715c9";
//let scienceApi =" http://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=96f4bf4ba8974741b75ddc6243d715c9";
 //let technologyApi = " http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=96f4bf4ba8974741b75ddc6243d715c9";

 /*=====Sports Section Stars here======= */

window.fetch(SportsApi)
.then((SportsData)=>{
    SportsData
    .json()
    .then((sports)=>{
        console.log(sports.articles);
        let sportsFeed=sports.articles;
        let firstSportsBlock=sports.articles;

        let sportsnewsBlockOne=firstSportsBlock[0];
        document.getElementById("sportsFirstTemplate").innerHTML=`<ul>
        <img src="${sportsnewsBlockOne.urlToImage}"/>
        <a href="${sportsnewsBlockOne.url}" target="_blank">
        <li class="text-dark">${sportsnewsBlockOne.title}</li>
        </a>
        `
        let output=[];
        for(let sport of sportsFeed){
            output+=`
            <ul class="list-group ">
            <a href="${sport.url}" target="_blank">
            <li class=" text-dark">
            ${sport.title}</li></a>
            </ul>
            `;
            document.getElementById("sportsAllTemplate").innerHTML=output;
        }
    })
    .catch((err)=>console.log(err));
})
.catch((err)=>console.log(err));

/*=====Sports Section ends here======= */

