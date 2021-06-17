const fetch = require("node-fetch")
    async function GetSkinRenderedBody(name){
     let url = `https://api.mojang.com/users/profiles/minecraft/${name}`
     let uid;
     try{
         uid = await fetch(url).then((uid) => uid.json())
     }catch (e) {
         console.log("Invaild username or user not found")
     }
     let skinurl = `https://crafatar.com/renders/body/${uid.id}`
     return skinurl
     } 
     module.exports = GetSkinRenderedBody