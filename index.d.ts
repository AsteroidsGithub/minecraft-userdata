/**
 * Converts a name to a UUID.
 *
 * @param name The name to convert.
 * @returns The UUID of the player.
 * @example GetUUID('Asteroids').then((uuid) => {
 *              console.log(`AsteroidsMC's UUID is ${uuid}`);
 *          });
 */
export function GetUUID(name: string): Promise<string>;

/**
 * Converts a UUID to a name.
 *
 * @param uuid The UUID to convert.
 * @returns The name of the player.
 * @example GetName('987111ae0b1947e689e9db260e7ab860').then((name) => {
 *              console.log(`987111ae0b1947e689e9db260e7ab860 is ${name}`);
 *          });
 */
export function GetName(uuid: string): Promise<string>;

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
export function GetProfile(name: string): Promise<{
    timestamp: number;
    uuid: string;
    username: string;
    skin: string;
    cape: string | 'No Cape Found';
    isSlim: boolean;
}>;

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
export function GetSkin(name: string): Promise<string>;

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
export function GetSkinRenderedBody(name: string): Promise<string>;

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
export function GetSkinRenderedHead(name: string): Promise<string>;

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
export function GetCape(name: string): Promise<string>;

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
export function GetAvatar(name: string): Promise<string>;

/**
 * Returns the username and uuid of a player.
 *
 * @param {string} name The name of the Minecraft player
 * @returns {{ username: string, uuid: string}} The username and uuid of the player
 * @example GetData('AsteroidsMC').then((data) => {
 *              console.log(data.uuid);
 *          });
 */
export function GetData(name: string): Promise<{
    username: string;
    uuid: string;
}>;
