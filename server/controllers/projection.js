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
      params.initialSavingsAmount = Number(params.initialSavingsAmount);
      params.monthlyDepositAmount = Number(params.monthlyDepositAmount);
      params.interestRate = Number(params.interestRate);

      let invalids = [];
      if (!params.initialSavingsAmount || isNaN(params.initialSavingsAmount)) {
        invalids.push('initialSavingsAmount');
      }
      if (!params.monthlyDepositAmount || isNaN(params.monthlyDepositAmount)) {
        invalids.push('monthlyDepositAmount');
      }
      if (!params.interestRate || isNaN(params.interestRate)) {
        invalids.push('interestRate');
      }
      if (['monthly', 'quarterly', 'yearly'].indexOf(params.interestPeriod) === -1) {
        invalids.push('interestPeriod');
      }
      if (invalids.length) {
        return Response.BadRequest(invalids).send(res);
      }

      const period = [1, 3, 12][['monthly', 'quarterly', 'yearly'].indexOf(params.interestPeriod)];
      const numPeriods = (50 * 12) / period;  // number of interest periods in 50 years
      let savings = params.initialSavingsAmount;
      let data = [];
      for (let month = 0; month <= period * numPeriods; month += period) {
        data.push({
          month,
          amount: savings
        });
        
        // apply interest to savings
        savings *= (1 + ((params.interestRate / 100) / period));

        // add on monthly deposit
        savings += (params.monthlyDepositAmount * period);
      }

      return Response.OK(data).send(res);
    }
  };
}