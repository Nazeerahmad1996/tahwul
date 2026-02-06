
export const badgeColorClasses = {
    green: 'bg-badge-green',
    yellow: 'bg-badge-yellow',
    orange: 'bg-badge-orange',
    red: 'bg-badge-red',
    gray: 'bg-badge-gray',
    blue: 'bg-badge-blue',
    darkblue: 'bg-badge-darkblue',
};

// Status legend color class mappings
export const statusLegendClasses = {
    notStarted: 'bg-badge-gray',
    inProgress: 'bg-badge-yellow',
    completed: 'bg-badge-green',
    partialUpload: 'bg-badge-darkblue',
    fullUpload: 'bg-badge-blue',
    delayed: 'bg-badge-red',
};

// Gradient configurations (need inline styles)
export const gradients = {
    chartBar: 'linear-gradient(180deg, #0078D7 0%, rgba(0, 120, 215, 0) 100%)',
    progressBar: 'linear-gradient(90deg, #1EA54E 0%, #439F57 100%)',
};

// Font families (if needed outside Tailwind)
export const fonts = {
    cairo: "'Cairo', sans-serif",
    ibmPlex: "'IBM Plex Sans Arabic', sans-serif",
};

// Shared colors for JS usage (charts, inline styles)
export const colors = {
    primary: '#1D3557', // Navy
    success: '#1EA54E', // Green
    warning: '#E7912E', // Orange
    danger: '#DB1F26',  // Red
    border: '#E0E8ED',  // Light Gray Blue
    background: '#F5F8FB', // Very Light Blue
    white: '#FFFFFF',
};

export default {
    badgeColorClasses,
    statusLegendClasses,
    gradients,
    fonts,
    colors,
};
