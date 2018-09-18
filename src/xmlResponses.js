const respondXML = (request, response, message, id) => {
  response.ContentType = 'text/xml';

  response.write('<response>');
  response.write(`<message>${message}</message>`);
  response.write(`<id>${id}</id>`);
  response.write('</response>');
  response.end();
};

const success = (request, response) => {
  respondXML(request, response, 'This is a successful response.', '');
};

module.exports = {
  success,
};
