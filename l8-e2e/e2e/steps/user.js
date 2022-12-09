const { Given, When, Then } = require('cucumber');
const assert = require('assert').strict
const axios = require('axios');

/******** SCENARIO #1 ********/
Given('A user of the system', function () {
  // console.log(request);
  this.context['request'] = {}
});
When('I enter {} and {}', function (username,password) {
  this.context['request'] = {"username":username, "password":password}

});

When('I send POST request to {}', async function (path) {
  // Write code here that turns the phrase above into concrete actions
  this.context['response'] = await axios.post(`${process.env.SERVICE_URL}${path}`, this.context['request']);
});
Then('I get response code {int}', async function (code) {
  assert.equal(this.context['response'].status, code);
});

/******** SCENARIO #2 ********/
Given('A ProductID {int}', async function (id) {
  this.context['id'] = id;
});

When('I send GET request to {} in get id', async function (path) {
  const response = await axios.get(`${process.env.SERVICE_URL}${path}/${this.context['id']}`);
  this.context['response'] = response;
})

Then('I receive in the get {}', async function (expectedResponse) {
  assert.deepEqual(this.context['response'].data, JSON.parse(expectedResponse));
});
/******** SCENARIO #3 ********/
Given('That all products exist', async function () {
  this.context = {};
});

When('I send GET request to {} in get all', async function (path) {
  const response = await axios.get(`${process.env.SERVICE_URL}${path}`);
  this.context['response'] = response;
})

Then('I receive {} in get all', async function (expectedResponse) {
  assert.deepEqual(this.context['response'].data, JSON.parse(expectedResponse));
});


/******** SCENARIO #4 ********/
Given('A ProductID {} exist ', async function (id) {
  this.context['id'] = id;

});

When('I send Delete request to {}', async function (path) {
  const response = await axios.delete(`${process.env.SERVICE_URL}${path}/${this.context['id']}`);
  this.context['response'] = response;
})

Then('I receive {} in the delete', async function (expectedResponse) {
  assert.deepEqual(this.context['response'].data, JSON.parse(expectedResponse));
});

/******** SCENARIO #5 ********/
Given('A ProductID {} exist in my system', async function (id) {
  this.context['id'] = id;

});
When('I update the price of the product to {int}', async function (price) {
  this.context['price'] = price;

})
When('send UPDATE request to {}', async function (path) {
  let p=this.context['price']
  const response = await axios.put(`${process.env.SERVICE_URL}${path}/${this.context['id']}`,{"price": p});
  this.context['response'] = response;
})

Then('I get response code in the update {int}', async function (code) {
  assert.equal(this.context['response'].status, code);

});
Then ('I receive response in the update {}', function( expectedResponse){
  assert.deepEqual(this.context['response'].data, JSON.parse(expectedResponse));

})

