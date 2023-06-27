//Made By 💖 Just1N INC.
const { AoiClient, LoadCommands } = require("aoi.js");
const { AoiVoice, PlayerEvents, PluginName, Cacher, Filter } = require("@akarui/aoi.music");
const Gamedig = require('gamedig');
//Main.js
const bot = new AoiClient({
    token: "token-giriniz.",
    prefix: ["!"],
    intents: ["MessageContent", "Guilds", "GuildMessages", "GuildVoiceStates", "GuildMessageReactions", "GuildInvites", "GuildEmojisAndStickers", "GuildBans", "GuildWebhooks", "GuildMembers", "GuildPresences", "GuildMessageTyping"],
    events: ["onMessage", "onInteractionCreate", "onMessageDelete", "onMessageUpdate", "onMessageDeleteBulk", "onReactionRemove", "onReactionRemoveAll", "onInviteCreate", "onInviteDelete", "onGuildJoin", "onGuildLeave", "onGuildUpdate", "onGuildUnavailable", "onRoleCreate", "onRoleUpdate", "onRoleDelete", "onChannelCreate", "onChannelUpdate", "onChannelDelete", "onChannelPinsUpdate", "onStageInstanceCreate", "onStageInstanceUpdate", "onStageInstanceDelete", "onThreadCreate", "onThreadUpdate", "onThreadDelete", "onThreadListSync", "onThreadMemberUpdate", "onThreadMembersUpdate", "onEmojiCreate", "onEmojiDelete", "onEmojiUpdate", "onStickerCreate", "onStickerDelete", "onStickerUpdate", "onBanAdd", "onBanRemove", "onVoiceStateUpdate", "onWebhookUpdate", "onJoin", "onLeave", "onMemberUpdate", "onMemberAvailable", "onMembersChunk", "onPresenceUpdate", "onTypingStart", "onUserUpdate"],
    database: {
        type: "aoi.db",
        db: require("aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
});
//Game.query Host Kısmına Minecraft Sunucunuzu Giriniz o Zaten Kendi Kendine Açılacaktır. Made By 💖 Just1N INC.
Gamedig.query({
    type: 'minecraft',
    host: 'mc.example.com',
    bots: 'players',
    connect: 'ip:port',
    ping: '12'
}).then((state) => {
    console.log(state);
}).catch((error) => {
    console.log("Sunucu Kapalı");
});
//Made By 💖 Just1N INC.
bot.status({
    text: "Discord Botçularla Beraber Savaşıyor...",
    type: "PLAYİNG",
    time: 12
});
//Made By 💖 Just1N INC.
const { Util } = require("aoi.js");
const { setup } = require("aoi.parser");
setup(Util);
//Made By 💖 Just1N INC.
const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./Minecraft Botu (DBB)/Komutlar/");
//Made By 💖 Just1N INC.
