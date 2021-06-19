const fetch = require("node-fetch")
    async function GetSkinRenderedHead(name){
     let url = `https://api.mojang.com/users/profiles/minecraft/${name}`
     let uid;
     try{
         uid = await fetch(url).then((uid) => uid.json())
     }catch (e) {
         console.log("Invaild username or user not found")
     }
     let skinurl = `https://crafatar.com/renders/head/${uid.id}`
     return skinurl
     } 
     module.exports = GetSkinRenderedHead