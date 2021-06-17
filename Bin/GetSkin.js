const fetch = require("node-fetch")
    async function GetSkin(name){
     let url = `https://api.mojang.com/users/profiles/minecraft/${name}`
     let uid;
     try{
         uid = await fetch(url).then((uid) => uid.json())
     }catch (e) {
         console.log("Invaild username or user not found")
     }
     let skinurl = `https://crafatar.com/skins/${uid.id}`
     return skinurl
     } 
     module.exports = GetSkin