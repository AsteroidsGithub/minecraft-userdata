const fetch = require("node-fetch")
    async function GetCape(name){
     let url = `https://api.mojang.com/users/profiles/minecraft/${name}`
     let uid;
     try{
         uid = await fetch(url).then((uid) => uid.json())
     }catch (e) {
        throw new TypeError("User doesnt have cape or user not found")
     }
     let skinurl = `https://crafatar.com/capes/${uid.id}`
     return skinurl
     } 
     module.exports = GetCape