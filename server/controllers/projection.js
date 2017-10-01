const Response = require('../utils/response.js');

module.exports = function ProjectionController(req, res, next) {
  const dummyData = [{
    month: 1,
    amount: Math.floor(Math.random() * 1000)
  },{
    month: 2,
    amount: Math.floor(Math.random() * 1000)
  },{
    month: 3,
    amount: Math.floor(Math.random() * 1000)
  },{
    month: 4,
    amount: Math.floor(Math.random() * 1000)
  }];

  return {
    calculateMonthlyProjectionData: (params) => {
      return Response.OK(dummyData).send(res);
    }
  };
}