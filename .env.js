const production = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'production',
};

const development = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: '9000',
    Meta_WA_accessToken:'EAAKGUD3eZA28BADAJOmO6L19TmZAIEUpdFGHEGHX5sQ3kk4LDQLlnyh607rKSr0x2SAOPJS0kXOUZAhRDIPPGs4vcXQCo2DnfSJMnnIzFW7vaw8EuL7A0HjGZBwE8VwjRnBNam0ARLmfyOCEh1',
    Meta_WA_SenderPhoneNumberId: '113362588047543',
    Meta_WA_wabaId: '102432872486730',
    Meta_WA_VerifyToken: 'YouCanSetYourOwnToken',
};

const fallback = {
    ...process.env,
    NODE_ENV: undefined,
};

module.exports = (environment) => {
    console.log(`Execution environment selected is: "${environment}"`);
    if (environment === 'production') {
        return production;
    } else if (environment === 'development') {
        return development;
    } else {
        return fallback;
    }
};
