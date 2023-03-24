// https://api.github.com/users/devkapilbansal
let data=["gitkrishnaa","anirudhAtole","saurav-bhagat"]


async function loader(){
console.log("hello");
for(let i=0;i<data.length;i++){

  const Response= await axios({
    method: 'get',
    url: `https://api.github.com/users/${data[i]}`,
    // responseType: 'stream'
  })
console.log(Response.data);
 const display_html_div=document.getElementById("display")

 const main_div=document.createElement("div");
 main_div.style.border="2px solid purple"
 display_html_div.appendChild(main_div);
 main_div.style.margin="50px"
 main_div.style.padding="50px"


 const div1=document.createElement("h3");
 div1.innerText=Response.data.login
 main_div.appendChild(div1)


 const  repo=document.createElement("p");
 repo.innerHTML="total-repo "+Response.data.public_repos
 main_div.appendChild(repo)







 const img1=document.createElement("img");
 img1.setAttribute("src",Response.data.avatar_url)
 img1.style.width="100px"

 main_div.appendChild(img1)

 const  github_link=document.createElement("a");
 github_link.setAttribute("href",Response.data.html_url)
//  github_link.innerText="Github page";
main_div.appendChild(github_link);

 const  button=document.createElement("button");
 button.innerText="github"
 github_link.appendChild(button)
 

}





// const Response= await axios({
//      method: 'get',
//      url: ' https://api.github.com/users/saurav-bhagat/repos?page=1/createdat',
//      // responseType: 'stream'
//    })
//    console.log(Response.data)
  
}
loader()





























// axios({
//   method: 'get',
//   url: ' https://api.github.com/users/saurav-bhagat/repos?page=1/createdat',
//   // responseType: 'stream'
// })
// .then(json => console.log(json.data))
// axios({
//   method: 'get',
//   url: ' https://api.github.com/users/saurav-bhagat/repos?page=2',
//   // responseType: 'stream'
// })
// .then(json => console.log(json.data))
// .then(()=>{
//   axios({
//     method: 'get',
//     url: ' https://api.github.com/users/saurav-bhagat/repos?page=3',
//     // responseType: 'stream'
//   })
//   .then(json => console.log(json.data))
// })


//   fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))