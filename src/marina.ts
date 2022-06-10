import * as fetch from 'node-fetch';

/**
 * THE INSTANCE OF THE MARINA API
 * @author LvckyWorld | LvckyAPI - Iven Schlenther
 */
export class MARINA {
    /**
     * Get a JSON-LIST of all LvckyWorld System Admins
     * @returns LvckyWorld - System Admins
     */
    public static getSysAdmins(): Promise<lwSysAdmin> {
        return new Promise((resolve, reject) => {
            fetch.default("https://api.lvckyworld.net:61619/lvckyworldMember", {
                "method": "GET",
                "headers": {}
            })
                .then(response => {
                    resolve(response.json() as unknown as lwSysAdmin);
                })
                .catch(err => {
                    reject(err);
                });
        })
    }


    /**
     * Get a JSON-LIST of all dcGlobalBans
     * @returns LvckyWorld dcGlobalBanList
     */
    public static getDcGlobalBanList(): Promise<lwGlobalBan> {
        return new Promise((resolve, reject) => {
            fetch.default("https://api.lvckyworld.net:61619/dcGlobalBanList", {
                "method": "GET",
                "headers": {}
            })
                .then(response => {
                    resolve(response.json() as unknown as lwGlobalBan);
                })
                .catch(err => {
                    reject(err);
                });
        })
    }



    /**
     * Get a JSON-LIST of all LvckyWorld Teamler
     * @returns LvckyWorld teamList
     */
    public static getLvckyWorldTeamler(): Promise<lwTeamler> {
        return new Promise((resolve, reject) => {
            fetch.default("https://api.lvckyworld.net:61619/lvckyworldTeam", {
                "method": "GET",
                "headers": {}
            })
                .then(response => {
                    resolve(response.json() as unknown as lwTeamler);
                })
                .catch(err => {
                    reject(err);
                });
        })
    }


    /**
     * Get the UserInfo of a Discorduser by DiscordId
     * @param discordId string DiscordId
     * @returns 
     */
    public static getDiscordUserInfo(discordId: string): Promise<lwDiscordInfo> {
        return new Promise((resolve, reject) => {
            fetch.default("https://api.lvckyworld.net:61619/getuserinfo/" + discordId, {
                "method": "GET",
                "headers": {}
            })
                .then(response => {
                    resolve(response.json() as unknown as lwDiscordInfo);
                })
                .catch(err => {
                    reject(err);
                });
        })
    }
}


interface lwSysAdmin {
    lvckyworld: [
        {
            name: string,
            clid: string,
            role: string
        }
    ]
}

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