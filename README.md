# # Doc2PDF_API!
![enter image description here](https://heroku-badge.herokuapp.com/?app=doc2pdf-api)  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

   
Hi! the main motive behind building this api is to **convert any document into pdf** and make it available for free to all and currently it is development phase and ~~have more bugs than featur~~e but i will try to make it better and working. 

Live demo: https://doc2pdf-api.herokuapp.com/
## Libraries Used:
```
"html-pdf-node": "^1.0.7"
"mammoth": "^1.4.17"
```
## How It Works?

 **Doc >> HTML by using [Mammoth](https://github.com/mwilliamson/mammoth.js#readme) >> PDF by using [Html-pdf-node library](https://github.com/mrafiqk/html-pdf-node#readme)**
## Install

### Clone the repo
```
https://github.com/shivamkapasia0/Doc2PDF_API.git
```
### Install npm packages

    npm install

## Run the app locally

    npm start
    
# REST API:

## Get list of services

### Home Page
`GET /`
	
	
	http://localhost:5000
	https://doc2pdf-api.herokuapp.com
	
### Request
#### List of Services Available
`GET /service/`

    curl -i -H 'Accept: application/json' http://localhost:5000/service/
    curl -i -H 'Accept: application/json' https://doc2pdf-api.herokuapp.com/service

### Request PDF
`GET /service/convert/`	
```
http://localhost:5000/service/convert
https://doc2pdf-api.herokuapp.com/service/convert
```
#### Request Body(JSON):
```
{
"mimeType": ".doc",
"base64":"your base64 here.."
}
```
### Response Body(JSON):
```
{
"status" : "Success",
"base64" : "Converted PDF base64 will be here"
}
```


### Example code:
```
var data = JSON.stringify({
  "mimeType": ".doc",
  "base64": "Docxbase64here"
});

var xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://doc2pdf-api.herokuapp.com/service/convert");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(data);
```


##  Progress

Currently it is in development phase as it doesn't have many features as well as error handling of data to be improved and ~~it has more bugs than features~~😂😂. so your contribution will be appreciated🙏.


## License

MIT

**Free Software, Hell Yeah!**

