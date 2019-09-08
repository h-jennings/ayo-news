/* eslint-disable prefer-destructuring */
const axios = require('axios');

const APIKey = process.env.API_KEY;

exports.handler = function getTopNewsFn(event, context, callback) {
  const getTopNewsStories = () => {
    axios({
      url: 'https://newsapi.org/v2/top-headlines?sources=the-new-york-times',
      headers: {
        'x-api-key': APIKey,
      },
    })
      .then((jsonData) => {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(jsonData.data.articles),
        });
      })
      .catch(err => console.error(err));
  };
  getTopNewsStories();
};
