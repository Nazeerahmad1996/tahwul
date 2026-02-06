
export const config = {
    apiBaseUrl: import.meta.env.VITE_API_URL || '',

    isDev: import.meta.env.DEV,
    isProd: import.meta.env.PROD,

    features: {
        enableMockData: true,
    },

    ui: {
        defaultChartHeight: 180,
        gaugeRadius: 119,
    },
};

export default config;
