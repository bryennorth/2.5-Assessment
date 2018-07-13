let inputData = {
    evenOdd: '1,2,3,4,5,6,7,8,9',
    object: 'age',
    name: 'James',
    palindrome: 'amanaplanacanalpanama',
    sum1: '1',
    sum2: '2',
}

let AutoAssess = {}
module.exports = {
    before: browser => {
        AutoAssess = browser.page.AutoAssess()
        AutoAssess.navigate()
    },
    after: browser => {
        browser.end()
    }, //a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z
    'evenOdd Default Input': browser => {
        AutoAssess
            .waitForElementPresent('@evenOddInput', 5000)
            .setValue('@evenOddInput', inputData.evenOdd)
            .click('@evenOddButton')
            .expect.element('@evenResults').text.to.equal('Evens: [2,4,6,8]')
        AutoAssess
            .expect.element('@oddResults').text.to.equal('Odds: [1,3,5,7,9]')
        AutoAssess
        .click('@evenOddInput')
        .clearValue('@evenOddInput')
        .setValue('@evenOddInput', ['1', '\uE003'])
        AutoAssess
        .click('@evenOddButton')
            .expect.element('@evenResults').text.to.equal('Evens: [null]')
        AutoAssess
            .expect.element('@oddResults').text.to.equal('Odds: []')
    },
    'object Default Input': browser => {
        AutoAssess
            .waitForElementPresent('@objectInput', 5000)
            .setValue('@objectInput', inputData.object)
            .click('@objectButton')
            .expect.element('@objectResults').text.to.equal('Filtered: [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" } ]')
        AutoAssess
            .clearValue('@objectInput')
            .setValue('@objectInput', ['1', '\uE003'])
            .click('@objectButton')
            .expect.element('@objectResults').text.to.equal('Filtered: []')
    },
    'name Default Input': browser => {
        AutoAssess
            .waitForElementPresent('@nameInput', 5000)
            .setValue('@nameInput', inputData.name)
            .click('@nameButton')
            .expect.element('@nameResults').text.to.equal('Filtered Names: [ "James" ]')
            AutoAssess
            .clearValue('@nameInput')
            .setValue('@nameInput', ['1', '\uE003'])
            .click('@nameButton')
            .verify.containsText('@nameResults', 'Filtered Names: []')
    },
    'palindrome Default Input': browser => {
        AutoAssess
            .waitForElementPresent('@palindromeInput', 5000)
            .setValue('@palindromeInput', inputData.palindrome)
            .click('@palindromeButton')
            .expect.element('@palindromeResults').text.to.equal('Palindrome: true')
            .clearValue('@palindromeInput')
            .setValue('@palindromeInput', ['1', '\uE003'])
            .verify.containsText('@palindromeInput', 'Palindrome: true')
    },
    'sum Default Input': browser => {
        AutoAssess
            .waitForElementPresent('@evenOddInput', 5000)
            .setValue('@sumInput1', inputData.sum1)
            .setValue('@sumInput2', inputData.sum2)
            .click('@sumButton')
            .expect.element('@sumResults').text.to.equal('Sum: 3')
            .clearValue('@sumInput1')
            .clearValue('@sumInput2')
            .setValue('@sumInput1', ['1', '\uE003'])
            .setValue('@sumInput2', ['1', '\uE003'])
            .verify.containsText()
    }
}