// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar,sidebar } from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar();
document.getElementById("sidebar").innerHTML=sidebar();

let getdata = async () =>{
    let q = document.getElementById("search_input").value;
    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${q}`);
        let data = await res.json();
        let news = data.articles
        appendata(news);
        console.log(news)
    }catch(err){
        console.log(err)
    }
    
}
document.getElementById("search_input").addEventListener("keypress",getdata);

let appendata = (data) =>{
    let result = document.getElementById("results");
    result.innerHTML=""
    data.forEach (el =>{
        let div = document.createElement("div")
        div.setAttribute("class","news")

        let img = document.createElement("img");
        img.src=el.urlToImage
        let div_p = document.createElement("div")
        div_p.setAttribute("class","text")
        let title = document.createElement("h3")
        title.innerText=el.title;

        let description = document.createElement("p")
        description.innerText=el.description

        div_p.append(title,description)
        div.append(img,div_p)
        result.append(div)

    });
}