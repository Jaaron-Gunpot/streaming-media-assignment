const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const mediaHandler = require('./mediaResponses.js');
const { url } = require('inspector');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {
    '/': htmlHandler.getIndex,
    '/party.mp4': mediaHandler.getParty,
};

const onRequest = (request, response) => {
  console.log(request.url);
  //if the url is defined in the urlStruct object,it goes there. If not, it goes to the index page
    if (urlStruct[request.url]) {
        urlStruct[request.url](request, response);
    } else {
        urlStruct['/'](request, response);
    }
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on 127.0.0.1: ${port}`);
});
