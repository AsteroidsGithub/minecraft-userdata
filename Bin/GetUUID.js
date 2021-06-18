const fetch = require("node-fetch")
    async function GetUUID(name){
     let url = `https://api.mojang.com/users/profiles/minecraft/${name}`
     let uid;
     try{
         uid = await fetch(url).then((uid) => uid.json())
     }catch (e) {
        throw new TypeError("User not found")
     }
     return uid.id;
     } 
     module.exports = GetUUID