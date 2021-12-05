# minecraft-users

minecraft-users is a faster, smaller and typescript compatible fork of [minecraft-userdata](https://github.com/hitontwo2/minecraft-userdata). The goal of minecraft-users is to provide a easy way to pull UUIDs, skins and capes from just a username.

## Features

-   Convert usernames to UUIDs
-   Convert UUIDs to usernames
-   Get user's capes
-   Get user's skin and head
-   Get 3D renders of user's skin and head

## Example

Example code on how to get a user's UUID

```js
const { GetUUID } = require('minecraft-users');

GetUUID('AsteroidsMC').then((UUID) => {
    console.log(UUID);
});
```

you could also use async/await, however both work

```js
const { GetUUID } = require('minecraft-users');
async () => {
    console.log(await GetUUID('AsteroidsMC'));
};
```

## Reporting

If you have any problems with this package feel free to open a issues using this link

[Report Issue here](https://github.com/asteroidsgithub/minecraft-userdata)
