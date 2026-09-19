function createCard(title,cName,views,monthsOld,duration,thumbnail){
    let viewstr
    if(views<1000000){
         viewstr = views/1000 + "k";

    }
    else if(views>1000000){
         viewstr = views/1000000 +"M";
    }
    else{
        viewstr = views/1000 +"k";
    }

let html =`<div class="card">
<div class="image">
<img src="${thumbnail}" alt="">
<div class="capsule"></div>

</div>
<div class="text">
<h1>${title}</h1>
<p>${cName} . ${viewstr} views . ${monthsOld}months ago </p>
</div>`
document.querySelector(".container").innerHTML= document.querySelector(".container").innerHTML +html
 }

createCard("JavaScript Exercise 13 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #77" , "CodeWithHarry ",727000, "31:23","https://i.ytimg.com/vi/UzYRQURh_pY/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCuvVlRNxvKcLMpdtUybkODOxsbjw")