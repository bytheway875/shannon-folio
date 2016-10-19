module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'shannon',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
