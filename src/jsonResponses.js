const respondJSON = (request, response, status, object) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  response.writeHead(status, headers);
  response.write(JSON.stringify(object));
  response.end();
};

const respondJSONMeta = (request, response, status) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  response.writeHead(status, headers);
  response.end();
};

const getInfo = (request, response) => {
  const responseJSON = {
    message: 'this is a successful response',
  };

  respondJSON(request, response, 200, responseJSON);
};
/*
const getInfoMeta = (request, response) => respondJSONMeta(request, response, 200);
*/
const notFound = (request, response) => {
  const responseJSON = {
    message: 'The page you are looking for was not found.',
    id: 'notFound',
  };

  respondJSON(request, response, 404, responseJSON);
};

const notFoundMeta = (request, response) => {
  respondJSONMeta(request, response, 404);
};

const badReq = (request, response) => {
  const responseJSON = {
    message: 'Missing valid query parameter set to true.',
    id: 'badRequest',
  };

  respondJSON(request, response, 400, responseJSON);
};

const unAuthorized = (request, response) => {
  const responseJSON = {
    message: 'Missing loggedIn query parameter set to yes.',
    id: 'unauthorized',
  };

  respondJSON(request, response, 401, responseJSON);
};

const forBid = (request, response) => {
  const responseJSON = {
    message: 'You do not have access to this content.',
    id: 'forbidden',
  };

  respondJSON(request, response, 403, responseJSON);
};

const inTern = (request, response) => {
  const responseJSON = {
    message: 'Internal Server Error. Something went wrong',
    id: 'internalError',
  };

  respondJSON(request, response, 500, responseJSON);
};

const notImp = (request, response) => {
  const responseJSON = {
    message: 'A get request for this page has not been implemented yet. Check again later for updated content.',
    id: 'notImplemented',
  };

  respondJSON(request, response, 501, responseJSON);
};

module.exports = {
  notFound,
  notFoundMeta,
  getInfo,
  badReq,
  unAuthorized,
  forBid,
  inTern,
  notImp,
};
