const {FakeBrowser} = require('fakebrowser');
const puppeteer = require('puppeteer');


function Youtube(args) {
    this.init = ({ login, password }) => {
        this.login_email = login;
        this.login_password = password;

        this.browser; this.page;
    };

    this.startBrowser = async () => {
        // const DD = require('../node_modules/fakebrowser/device-hub-demo/iPhone.json');

        const builder = new FakeBrowser.Builder()
        // .deviceDescriptor(DD)
        .vanillaLaunchOptions({
        // .displayUserActionLayer(true)
            headless: false,
            // executablePath: '/opt/google/chrome/google-chrome'
        })
        // .proxy({
        //     // socks5://ip:port
        //     // http://ip:port
        //     // https://ip:port
            // proxy: 'http://lte.hypeproxy.host:7270',
        //     // exportIP: '213.183.32.155',
        // })
        .userDataDir(`./browserdata/user__${this.login_email.replace("@" ,"-")}`);
    
        this.browser = await builder.launch();
        this.page = await this.browser.vanillaBrowser.newPage();

    };
    this.fstartBrowser = async () => {
        // const DD = require('../node_modules/fakebrowser/device-hub-demo/iPhone.json');

        this.browser = await puppeteer.launch({headless: false});
        this.page = await this.browser.newPage();

    };
    this.login = async () => {
        if (!this.page) await this.startBrowser();

        // await this.page.setBypassCSP(true);
        await this.page.goto('https://stockx.com/nike-air-force-1-low-white-2018-w');

    };
    // await YoutubeUser.browser.shutdown()
    this.init(args);
}
// YoutubeUser.page.goto('https://www.whatismybrowser.com/');
// YoutubeUser.browser.close()

module.exports = Youtube;
