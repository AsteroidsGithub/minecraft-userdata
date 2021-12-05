const fetch = require('node-fetch');
const { Base64 } = require('js-base64');

/**
 * Converts a name to a UUID.
 *
 * @param name The name to convert.
 * @returns The UUID of the player.
 * @example GetUUID('Asteroids').then((uuid) => {
 *              console.log(`AsteroidsMC's UUID is ${uuid}`);
 *          });
 */
async function GetUUID(name) {
    return await fetch(`https://api.mojang.com/users/profiles/minecraft/${name}`)
        .then((res) => res.json())
        .then((uid) => uid.id)
        .catch(() => {
            throw new TypeError('User not found');
        });
}

/**
 * Converts a UUID to a name.
 *
 * @param uuid The UUID to convert.
 * @returns The name of the player.
 * @example GetName('987111ae0b1947e689e9db260e7ab860').then((name) => {
 *              console.log(`987111ae0b1947e689e9db260e7ab860 is ${name}`);
 *          });
 */
async function GetName(uuid) {
    return await fetch(`https://sessionserver.mojang.com/session/minecraft/profile/${uuid}`)
        .then((res) => res.json())
        .then((data) => data.name)
        .catch(() => {
            throw new TypeError('User not found');
        });
}

/**
 * Takes a Minecraft username and returns all the data mojang has about it,
 * the returned object will contain a account creation date, uuid, username,
 * their skin, cape and if their skin is slim.
 *
 * @param {string} name The name of the Minecraft player
 * @returns {{
 *   timestamp: number;
 *   uuid: string;
 *   username: string;
 *   skin: string;
 *   cape: string | 'No Cape Found';
 *   isSlim: boolean;
 *   }} An object containing all the data mojang has about the player
 * @example GetProfile('AsteroidsMC').then((profile) => {
 *              console.log(`${profile.username}'s skin is ${profile.skin}`);
 *          });
 */
async function GetProfile(name) {
    return await fetch(`https://api.mojang.com/users/profiles/minecraft/${name}`)
        .then((res) => res.json())
        .then((uuid) => {
            await fetch(`https://sessionserver.mojang.com/session/minecraft/profile/${uuid.id}`)
                .then((result) => result.json())
                .then((profile) => {
                    const { timestamp, textures } = JSON.parse(Base64.decode(profile.properties[0].value));
                    const { SKIN, CAPE } = textures;

                    return {
                        timestamp,
                        uuid: profile.id,
                        username: profile.name,
                        skin: SKIN && SKIN.url,
                        cape: (CAPE && CAPE.url) || 'No cape found',
                        isSlim: (SKIN && SKIN.metadata && SKIN.metadata.model === 'slim') || false,
                    };
                })
                .catch(() => {
                    throw new TypeError('Profile not found or user not found');
                });
        })
        .catch(() => {
            throw new TypeError('Invaild username');
        });
}

/**
 * Takes a Minecraft username and returns the URL of the player's skin,
 * returned URL will contain a png of the skin in 2D.
 *
 * @param {string} name The name of the Minecraft player
 * @returns {string} A Url to the skin of the player
 * @example GetSkin('AsteroidsMC').then((skin) => {
 *              console.log(skin);
 *          });
 */
async function GetSkin(name) {
    return `https://crafatar.com/skins/${await fetch(`https://api.mojang.com/users/profiles/minecraft/${name}`)
        .then((res) => res.json())
        .then((uid) => uid.id)
        .catch(() => {
            throw new TypeError('User not found');
        })}`;
}

/**
 * Takes a Minecraft username and returns a URL to a render of the player's skin,
 * returned URL will contain a png of the render.
 *
 * @param {string} name The name of the Minecraft player
 * @returns {string} A Url to the render of the player's skin
 * @example GetSkinRenderedBody('AsteroidsMC').then((render) => {
 *              console.log(render);
 *          });
 */
async function GetSkinRenderedBody(name) {
    return `https://crafatar.com/renders/body/${await fetch(`https://api.mojang.com/users/profiles/minecraft/${name}`)
        .then((res) => res.json())
        .then((uid) => uid.id)
        .catch(() => {
            throw new TypeError('User not found');
        })}`;
}

/**
 * Takes a Minecraft username and returns a URL to a render of the player's head,
 * returned URL will contain a png of the render.
 *
 * @param {string} name The name of the Minecraft player
 * @returns {string} A Url to the render of the player's head
 * @example GetSkinRenderedHead('AsteroidsMC').then((render) => {
 *              console.log(render);
 *          });
 */
async function GetSkinRenderedHead(name) {
    return `https://crafatar.com/renders/head/${await fetch(`https://api.mojang.com/users/profiles/minecraft/${name}`)
        .then((res) => res.json())
        .then((uid) => uid.id)
        .catch(() => {
            throw new TypeError('User not found');
        })}`;
}

/**
 * Takes a Minecraft username and returns the URL of the player's current cape,
 * returned URL will contain a png of the cape.
 *
 * @param {string} name The name of the Minecraft player
 * @returns {string} A Url to the cape of the player
 * @example GetCape('AsteroidsMC').then((cape) => {
 *              console.log(cape);
 *          });
 */
async function GetCape(name) {
    return `https://crafatar.com/capes/${await fetch(`https://api.mojang.com/users/profiles/minecraft/${name}`)
        .then((res) => res.json())
        .then((uid) => uid.id)
        .catch(() => {
            throw new TypeError('User not found');
        })}`;
}

/**
 * Takes a Minecraft username and returns the URL of the player's avatar,
 * returned URL will contain a png of the skins head in 2D.
 *
 * @param {string} name The name of the Minecraft player
 * @returns {string} A Url to the avatar of the player
 * @example GetAvatar('AsteroidsMC').then((avatar) => {
 *              console.log(avatar);
 *          });
 */
async function GetAvatar(name) {
    return `https://crafatar.com/avatars/${await fetch(`https://api.mojang.com/users/profiles/minecraft/${name}`)
        .then((res) => res.json())
        .then((uid) => uid.id)
        .catch(() => {
            throw new TypeError('User not found');
        })}`;
}

/**
 * Returns the username and uuid of a player.
 *
 * @param {string} name The name of the Minecraft player
 * @returns {{ username: string, uuid: string}} The username and uuid of the player
 * @example GetData('AsteroidsMC').then((data) => {
 *              console.log(data.uuid);
 *          });
 */
async function GetData(name) {
    return await fetch(`https://api.mojang.com/users/profiles/minecraft/${name}`)
        .then((res) => res.json())
        .then((uid) => {
            return {
                username: uid.name,
                uuid: uid.id,
            };
        })
        .catch(() => {
            throw new TypeError('User not found');
        });
}

module.exports = {
    GetUUID,
    GetName,
    GetProfile,
    GetSkin,
    GetSkinRenderedBody,
    GetSkinRenderedHead,
    GetCape,
    GetAvatar,
    GetData,
};
