const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  const results = await Promise.all(
    urls.map(async (url) => {
      try {
        const response = await httpGet(url);
        const message = JSON.parse(response.body).message;
        return response.status === 200 ? { 'Arnie Quote': message } : { 'FAILURE': message };
      } catch (error) {
        return { 'FAILURE': error.message };
      }
    })
  );
  return results;
};


module.exports = {
  getArnieQuotes,
};

