const fetch = require("node-fetch")
    async function GetData(name){
     let url = `https://api.mojang.com/users/profiles/minecraft/${name}`
     let uid;
     try{
         uid = await fetch(url).then((uid) => uid.json())
     }catch (e) {
        throw new TypeError("User not found or unable to find data")
     }
     return uid;
     } 
     module.exports = GetData