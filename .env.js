const production = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'production',
};

const development = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: '9000',
    Meta_WA_accessToken:'EAAKLS7yfg6gBAE8xMAbOCYpFXjTHMgFPWFbskANDWMOaldbPXYH33bkGFnDghCPkoduC5Y2KkkQfvTtgFtpwxk1lXB3XocMOSGy75dHwnRKiLuiJMdXR5C7ZCZBBPCJ4QUXknyy67YcJd5ZArfzeKBETHOV2GzgcZBwxk285v02DvW5axCE4apOECBveiAbboVSKXojJoQZDZD',
    Meta_WA_SenderPhoneNumberId: '104999835874636',
    Meta_WA_wabaId: '100620789635477',
    Meta_WA_VerifyToken: 'andi',
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
