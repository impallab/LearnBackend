require("dotenv").config();
const express= require("express");
const app=express();
const port=3000;
let user="Pallab";

const githubData={
    "login": "impallab",
    "id": 116993164,
    "node_id": "U_kgDOBvksjA",
    "avatar_url": "https://avatars.githubusercontent.com/u/116993164?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/impallab",
    "html_url": "https://github.com/impallab",
    "followers_url": "https://api.github.com/users/impallab/followers",
    "following_url": "https://api.github.com/users/impallab/following{/other_user}",
    "gists_url": "https://api.github.com/users/impallab/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/impallab/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/impallab/subscriptions",
    "organizations_url": "https://api.github.com/users/impallab/orgs",
    "repos_url": "https://api.github.com/users/impallab/repos",
    "events_url": "https://api.github.com/users/impallab/events{/privacy}",
    "received_events_url": "https://api.github.com/users/impallab/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Pallab Dandapat",
    "company": null,
    "blog": "https://pallab-portfolio.netlify.app/",
    "location": "Ramkrishnapur, Barasat, 700124",
    "email": null,
    "hireable": null,
    "bio": "Final-year MCA student | Web Developer|🛠️ HTML | CSS | JavaScript | Java | PHP\r\nPassionate about crafting digital experiences and solving coding challenges.",
    "twitter_username": null,
    "public_repos": 4,
    "public_gists": 0,
    "followers": 0,
    "following": 1,
    "created_at": "2022-10-30T04:49:59Z",
    "updated_at": "2023-12-01T19:17:15Z"
  }
  

app.get('/',(req,res)=>{
    res.send("Hello World !");
})

app.get("/user",(req,res)=>{
    res.send(`Welcome ${user} `);
})

app.get("/login",(req,res)=>{
    res.send("<h2>Register Yourself </h2><a href=https://google.com>Google</a>")
})

app.get("/github",(req,res)=>{
    res.json(githubData)
})
app.listen(process.env.PORT,()=>{
    console.log(`App listening on port ${port}`)
})