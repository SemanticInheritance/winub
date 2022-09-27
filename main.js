const YoutubeBot = require('./sites/youtube');

// !(async () => {

const YoutubeUser = new YoutubeBot({
    login: 'user0',
    password: 'userpass'
})

await YoutubeUser.login();

console.log(await YoutubeUser.page.title)

// https://www.whatismybrowser.com/
// Don't forget to close your browser to release resources
// await fakeBrowser.shutdown();
// })();