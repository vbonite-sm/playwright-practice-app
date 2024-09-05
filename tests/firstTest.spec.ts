import { test } from '@playwright/test';

test.beforeAll(async ({page}) => {

})

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:4200/');
})


// test.afterEach(async({page}) => {

// })

// test.afterAll(async({page}) => {

// })

test.describe('suite 1', () => {
    test.beforeEach(async ({page}) => {
        await page.getByText('Forms').click();
    })

    test('navigate to form layout page', async ({page}) => {
        await page.getByText('Form Layout').click();
    })
    
    test('navigate to datepicker page', async ({page}) => {
        await page.getByText('Datepicker').click();
    })
})

test.describe('suite 2', () => {
    test.beforeEach(async ({page}) => {
        await page.getByRole('link', {name: 'Charts', exact: true}).click();
    })

    test('navigate to chart page', async ({page}) => {
        await page.getByText('Echarts').click();
    })
})

// test.describe('test suite 1', () => {
//     test('the first test', () => {

//     })

//     test('the first test', () => {

//     })

//     test('the first test', () => {

//     })  
// })

// test.describe('test suite 1', () => {
//     test('the first test', () => {

//     })

//     test('the first test', () => {

//     })

//     test('the first test', () => {

//     })  
// })