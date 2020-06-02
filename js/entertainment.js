let entertainmentApi =" http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=96f4bf4ba8974741b75ddc6243d715c9";

/*window.fetch(entertainmentApi)
.then((entertainmentData)=>{
    entertainmentData
    .json()
    .then((entertainment)=>{
        console.log(entertainment.articles);
        let entertainmentFeed=entertainment.articles;
        let firstEntertainmentBlock=entertainment.articles;

        let entertainmentnewsBlockOne=firstEntertainmentBlock[0];
       // document.getElementById("EntertainmentFirstTemplate").innerHTML=`<ul>
        //<img src=${entertainmentnewsBlockOne.urlToImage}"/>
        //<a href="${entertainmentnewsBlockOne.url}" target="_blank">
        //<li class="text-dark">${entertainmentnewsBlockOne.title}</li>
        //</a>
        //`
        let output=[];
        for(let entertainment of entertainmentFeed){
            output+=`
            <div class="row">
            <div class="col-md-5">
            <img src="${entertainment.url.ToImage}"/>
            </div>
            <ul class="list-group ">
            <a href="${entertainment.url}" target="_blank">
            <li class=" text-dark">
            ${entertainment.title}</li></a>
            </ul>
            `;
            document.getElementById("entertainmentAllTemplate").innerHTML=output;
        }
    })
    .catch((err)=>console.log(err));
})
.catch((err)=>console.log(err));*/
window.fetch(entertainmentApi).then((entertainmentData)=>{
    entertainmentData.json()
    .then((entertainment)=>{
        console.log(entertainment.articles);
        let entertainmentInfo=entertainment.articles;
        let output=[];
        for(let entertainment of entertainmentInfo){
            let data=new Date(entertainment.publishedAt).toDateString();
            output+=`
            <div class="row">
            <div class="col-md-10">
            <img src=${entertainment.urlToImage}" class="entertainmentImg"/>
            </div>
            <div class="col-md-2">
            <ul class="list-group">
            <a href=$(entertainment.url)" target="_blank">
            <li class="text-dark">${entertainment.title}</li></a>
            <span class="text-muted text-right">publishedAt:${data}</span>
            </ul>
            </div>
            </div>
            `;
            document.getElementById("entertainmentAllTemplate").innerHTML=output;
        }
    })
    .catch((err)=>console.log(err));
}) 
.catch((err)=>console.log(err));



