const fetch = require("node-fetch")
    async function GetSkinRenderedHead(name){
     let url = `https://api.mojang.com/users/profiles/minecraft/${name}`
     let uid;
     try{
         uid = await fetch(url).then((uid) => uid.json())
     }catch (e) {
        throw new TypeError("User not found or cant find skin")
     }
     let skinurl = `https://crafatar.com/renders/head/${uid.id}`
     return skinurl
     } 
     module.exports = GetSkinRenderedHead