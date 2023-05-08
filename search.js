const puppeteer = require('puppeteer')


const url = "https://www.ebay.com/";
async function main(){
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(url)

    await page.waitForSelector("#gh-ac");

    await page.type("#gh-ac", "iphone 12 pro max");

    await page.click("#gh-btn");

    await page.waitForSelector("span.s-item__price");
    console.log(await page.$$eval("span.s-item__price", (prices)=>{
        return prices.map((price)=>({
            price: price.innerText.trim()
        }))
    }))






  





   
}

main()