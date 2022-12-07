
 const PROXY_CONFIG = {
  "/TruProxyAPI/*": {
      "target": "https://angular-exercise.trunarrative.cloud",
      "secure": true,
      "logLevel": "debug",
      
    },
};

module.exports = PROXY_CONFIG;