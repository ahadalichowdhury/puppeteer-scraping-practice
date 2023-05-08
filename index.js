const puppeteer = require('puppeteer')

const url = "https://books.toscrape.com/";

async function main(){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url);

    const bookData = await page.evaluate((url)=>{
        const bookPods = Array.from (document.querySelectorAll(".product_pod"));
        const data = bookPods.map((book)=>({
            title: book.querySelector("h3 a").innerText.trim(),
            price: book.querySelector(".product_price .price_color").innerText.trim(),
            imgSrc: url + book.querySelector("img").getAttribute("src"),
        }))

        return data;
    }, url)

    console.log(bookData);


    await browser.close();

}

main()