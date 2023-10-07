module.exports = {
    runtime: 'experimental-edge',
    buildDir: '.next',
    deployment: {
      hooks: {
        afterDeploy: async () => {
          // Post-deployment tasks
        },
      },
    },
  };
  