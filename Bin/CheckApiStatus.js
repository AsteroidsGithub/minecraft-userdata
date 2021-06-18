const fetch = require("node-fetch")
    async function CheckApiStatus(){
     let url = `https://status.mojang.com/check`
     let uid;
     try{
         uid = await fetch(url).then((uid) => uid.json())
     }catch (e) {
         throw new TypeError("Unable to get status")
     }
     return uid
     } 
     module.exports = CheckApiStatus