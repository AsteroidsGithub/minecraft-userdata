const fetch = require("node-fetch")
const {Base64} = require("js-base64")
    
    async function GetProfile(uuid){
        let url = `https://sessionserver.mojang.com/session/minecraft/profile/${uuid}`
        let uid;
        try{
            uid = await fetch(url).then((uid) => uid.json())
        }catch (e){
            console.log("Invaild UUID or UUID doesnt exist")
        }
            const {timestamp, textures} = JSON.parse(Base64.decode(uid.properties[0].value))
            const {SKIN, CAPE} = textures
            const id = uid.id
            const name = uid.name
            return {
              id,
              name,
              timestamp,
              skin: SKIN && SKIN.url,
              cape: CAPE && CAPE.url,
              isSlim: SKIN && SKIN.metadata && SKIN.metadata.model === 'slim'
            }
    //return uid
    }
module.exports = GetProfile