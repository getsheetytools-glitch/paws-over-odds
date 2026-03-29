module.exports = function() {
  return {
    // Set PLAUSIBLE_DOMAIN in your Netlify/GitHub env vars
    // e.g. PLAUSIBLE_DOMAIN=pawsbeyondodds.com
    // Leave unset locally — analytics won't load in dev
    domain: process.env.PLAUSIBLE_DOMAIN || ""
  };
};
