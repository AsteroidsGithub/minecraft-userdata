const fetch = require("node-fetch");
    async function GetAvatar(name){
     let url = `https://api.mojang.com/users/profiles/minecraft/${name}`
     let uid;
     try{
         uid = await fetch(url).then((uid) => uid.json())
     }catch (e) {
        throw new TypeError("User not found or cant find avatar")
     }
     let skinurl = `https://crafatar.com/avatar/${uid.id}`
     return skinurl
     } 
     module.exports = GetAvatar