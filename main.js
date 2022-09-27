const Bot = require('./services/sample');

// !(async () => {

const BotUser = new Bot({
    login: 'user0',
    password: 'userpass'
})

await BotUser.login();

console.log(await BotUser.page.title)

// https://www.whatismybrowser.com/
// Don't forget to close your browser to release resources
// await fakeBrowser.shutdown();
// })();
// node --experimental-repl-await