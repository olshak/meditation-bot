const puppeteer = require('puppeteer');

const delay = ms => new Promise(res => setTimeout(res, ms));

async function getPic() {
    const browser = await puppeteer.launch({headless: false});
    let testPage = undefined;
    let found = false;
    const page = await browser.newPage();
    await page.goto('https://www.dhamma.org/pl/schedules/schpallava');
    await page.waitForTimeout(1000);

    while (!found) {
        try {
            await page.reload();
            await page.waitForTimeout(10000);
            await page.click('body > div > div > div:nth-child(8) > div.course-section > table:nth-child(4) > tbody > tr:nth-child(12) > td.apply > a');
            // await page.click('body > div > div > div:nth-child(8) > div.course-section > table:nth-child(4) > tbody > tr:nth-child(13) > td.apply > a')
            found = true
        } catch {
            // do nothing
        }
    }


    await page.waitForTimeout(1000);
    await page.click('#enrolment_old_new_new');
    await page.waitForTimeout(1000);
    await page.click('#enrolment_male_female_male');
    await page.waitForTimeout(1000);
    await page.click('#initial-enrolment-form > div.text-center > input');
    for (let i = 0; i < 1000; i++) {
        console.log('\u0007');
        await delay(100);
    }
    await browser.close();
}

getPic();
