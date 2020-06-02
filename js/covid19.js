window.fetch("https://api.covid19api.com/summary")
.then((data)=>{
    data.json()
    .then((covid)=>{
        console.log(covid.Global);
        let Global=covid.Global;
        document.getElementById("covidBlock").innerHTML=`
        
        <div>
            <h4 class="badge badge-Danger">NewConfirmed</h4>
             <span>${Global.NewConfirmed}</span>
        </div>
        <div>
            <h4 class="badge badge-Danger">NewDeaths</h4>
            <span>${Global.NewDeaths}</span>
        </div>
        <div>
            <h4 class="badge badge-Danger">TotalConfirmed</h4>
            <span>${Global.TotalConfirmed}</span>
        </div>
        <div>
            <h4 class="badge badge-Danger">TotalDeaths</h4>
            <span>${Global.TotalDeaths}</span>
        </div>
        <div>
            <h4 class="badge badge-Danger">TotalRecovered</h4>
            <span>${Global.TotalRecovered}</span>
        </div>
        
               
        `;
        })
        .catch((err)=>console.log(err));
    })
    .catch((err)=>console.log(err));