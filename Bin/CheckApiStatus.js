const fetch = require("node-fetch")
    async function CheckApiStatus(name){
     let url = `https://status.mojang.com/check`
     let uid;
     try{
         uid = await fetch(url).then((uid) => uid.json())
     }catch (e) {
         console.log("Invaild username or user not found")
     }
     return uid
     } 
     module.exports = CheckApiStatus