const http = require('http');
const url = require('url');

const htmlHandler = require('./htmlResponses.js');
const jsonHandler = require('./jsonResponses');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  const parsedUrl = url.parse(request.url);

  switch (request.method) {
    case 'GET':
      if (parsedUrl.pathname === '/') {
        htmlHandler.getIndex(request, response);
      } else if (parsedUrl.pathname === '/style.css') {
        htmlHandler.getCSS(request, response);
      } else if (parsedUrl.pathname === '/success') {
        jsonHandler.getInfo(request, response);
      } else if (parsedUrl.pathname === '/badRequest') {
        jsonHandler.badReq(request, response);
      } else if (parsedUrl.pathname === '/unauthorized') {
        jsonHandler.unAuthorized(request, response);
      } else if (parsedUrl.pathname === '/forbidden') {
        jsonHandler.forBid(request, response);
      } else if (parsedUrl.pathname === '/internal') {
        jsonHandler.inTern(request, response);
      } else if (parsedUrl.pathname === '/notImplemented') {
        jsonHandler.notImp(request, response);
      } else {
        jsonHandler.notFound(request, response);
      }
      break;
    default:
      jsonHandler.notFound(request, response);
  }
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);
