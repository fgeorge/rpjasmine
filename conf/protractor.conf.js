const ReportportalAgent = require("@reportportal/agent-js-jasmine");
const reportportalConfig = require("./reportportalConf.js");
let agent;

exports.config = {
  seleniumAddress: "http://localhost:4444/wd/hub",
  specs: ["../tests/*"],
  onPrepare() {
    agent = new ReportportalAgent(reportportalConfig);

    jasmine.getEnv().addReporter(agent.getJasmineReporter());
  },
  afterLaunch(number) {
    return agent.getExitPromise();
  },
};
