# npm-lvckyworld-api
The official LvckyWorld-API as NPM PACKAGE <br /> <br />
[![Docs](https://img.shields.io/badge/-DOCUMENTATIONS-007396.svg?logo=Read%20the%20Docs&logoColor=white&longCache=true&style=for-the-badge)](https://https://docs.lvckyworld.net/lvckyworld-api/) [![Website](https://img.shields.io/badge/-WEBSITE-FF7139.svg?logo=Firefox%20Browser&logoColor=white&longCache=true&style=for-the-badge)](https://https://lvckyworld.net/)  [![Discord](https://img.shields.io/badge/-DISCORD-5865F2.svg?logo=Discord&logoColor=white&longCache=true&style=for-the-badge)](https://https://lvckyworld.net/discord/)
<br /><br /><br />
#### Content:
- [How to install](#Install-the-Package)
#### Functions:
- [getDcGlobalBanList()](#getDcGlobalBanList)
- [getDiscordUserInfo()](#getDiscordUserInfo)
- [getLvckyWorldTeamler()](#getLvckyWorldTeamler)
- [getSysAdmins()](#getSysAdmins)
<br/><br/><br/><br/>

## Install the Package
First you have to install the package via npm.<br />
You have to run the command: `npm install lvckyworld-api`.<br />
Then you have to import the package.

### Example
#### TypeScript
```ts
import * as api from 'lvckyworld-api';
```
#### JavaScript
```js
const api = require('lvckyworld-api')
```
Now you can use the methods.
<br/><br/><br/>
### Some possible methods:

## getDcGlobalBanList()
### Example
```ts
import * as api from 'lvckyworld-api'

api.MARINA.getDcGlobalBanList().then(response => {
  console.log(response)
}).catch(err => { console.log(err) });
```
### Response Interface
```ts
interface lwGlobalBan {
    globalbans: [
        {
            clientid: string,
            clientavatar: string,
            clientname: string,
            banreason: string,
            bancreatorid: string,
            bancreatorname: string,
            bannedOn: string,
            timestam: string,
            permis: boolean
        }
    ]
}
```
<br/><br/><br/>
## getDiscordUserInfo(discordId: string)
### Example
```ts
import * as api from 'lvckyworld-api'

api.MARINA.getDiscordUserInfo('761890770935611412').then(response => {
  console.log(response)
}).catch(err => { console.log(err) });
```
### Response Interface
```ts
interface lwDiscordInfo {
    id: string,
    username: string,
    avatar: string | null,
    avatar_decoration: string | null,
    discriminator: string,
    public_flags: number | null,
    banner: string | null,
    banner_color: string | null,
    accent_color: string | null
}
```
<br/><br/><br/>
## getLvckyWorldTeamler()
### Example
```ts
import * as api from 'lvckyworld-api'

api.MARINA.getLvckyWorldTeamler().then(response => {
  console.log(response)
}).catch(err => { console.log(err) });
```
### Response Interface
```ts
interface lwTeamler {
    teamMembers: [
        {
            clientname: string,
            clientid: string,
            roleName: string,
            roleId: string,
            highestRoleId: number,
            sortId: number
        }
    ]
}
```
<br/><br/><br/>
## getSysAdmins()
### Example
```ts
import * as api from 'lvckyworld-api'

api.MARINA.getSysAdmins().then(response => {
  console.log(response)
}).catch(err => { console.log(err) });
```
### Response Interface
```ts
interface lwSysAdmin {
    lvckyworld: [
        {
            name: string,
            clid: string,
            role: string
        }
    ]
}
```
