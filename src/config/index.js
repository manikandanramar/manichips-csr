var icons = require('./icons');
var assets = require('./assets');
var texts = require('./texts');
var api = require('./api');

module.exports = {
    title: "manichips",
    trackingId: "UA-165848911-1",
    head: {
        description: "",
    },
    icons,
    assets,
    texts,
    api,
    footer: [
        { name: "Privacy Policy", to: "/policy" },
        { name: "Terms & Conditions", to: "/terms" },
        { name: "FAQ", to: "/faq" }
    ],
    social: [
        { name: "Facebook", to: "https://facebook.com/manichipsindia" },
        { name: "Instagram", to: "https://instagram.com/manichips" },
        { name: "Youtube", to: "https://youtube.com/channel/UCEuNpHqJ96KEJ6tGTCBOJjA" },
        { name: "Twitter", to: "https://twitter.com/manichips" },
        { name: "LinkedIn", to: "https://linkedin.com/company/manichips" },
        // { name: "TikTok", to: "https://www.tiktok.com/@manichipsindia" }
    ],
    copyright: "© manichips 2020, All Rights Reserved",
    address: "TC 22/327-1, Santhi Bhavan, Attukal, Manacaud.P.O, Thiruvananthapuram, India - 695009",
    phone: "+91 7736342880",
    mail: "support@manichips.com",
    fssai: "FSSAI 21320133000011",
    listingImages: [
        "https://firebasestorage.googleapis.com/v0/b/manichips-server.appspot.com/o/Listing%2F1%20pack-front.webp?alt=media&token=b130bd53-da10-461c-bf82-4128b70424e6",
        "https://firebasestorage.googleapis.com/v0/b/manichips-server.appspot.com/o/Listing%2F2%20pack-back.webp?alt=media&token=b0d73c19-d523-4f56-b456-1726dce8fa3a",
        "https://firebasestorage.googleapis.com/v0/b/manichips-server.appspot.com/o/Listing%2F3%20Banana.jpg?alt=media&token=73f3fb60-9e42-4c71-83a4-45b2579debc6",
        "https://firebasestorage.googleapis.com/v0/b/manichips-server.appspot.com/o/Listing%2F4%20coconut-oil.jpg?alt=media&token=a0d70589-ce89-4d12-8617-cde04aff429b"
    ],
    channelList: [
        {
            name: "Amazon",
            link: "https://amzn.to/3kAsNMD",
            logo: "https://firebasestorage.googleapis.com/v0/b/manichips-server.appspot.com/o/amazon.svg?alt=media&token=f92e727f-d920-45f0-83e1-2762883a81db",
            key: 'ac',
            feedback: "https://www.amazon.in/review/create-review/?ie=UTF8&channel=glance-detail&asin=B0886MJ6J7"
        },
        {
            name: "Flipkart",
            link: "https://www.flipkart.com/search?q=manichips&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&augment=false",
            logo: "https://firebasestorage.googleapis.com/v0/b/manichips-server.appspot.com/o/flipkart.svg?alt=media&token=949536dc-7387-49f5-a73e-2d124eb5cb4e",
            key: 'fc',
            feedback: "https://www.flipkart.com/manichips-kerala-s-organic-banana-chips/write-review/itm4d3b708ffde53?pid=CHPFPY8JF5FCPH2X"
        }
    ],
    routes: [
        {
            name: "Home",
            path: "/",
            oName: "Manichips home"
        },
        {
            name: "Product",
            path: "/product",
            oName: "Buy Banana Chips"
        },
        {
            name: "Policy",
            path: "/policy",
            oName: "Privacy Policy"
        },
        {
            name: "Terms",
            path: "/terms",
            oName: "Terms and Conditions"
        },
        {
            name: "FAQ",
            path: "/faq",
            oName: "Frequently Asked Questions"
        }
    ]
};