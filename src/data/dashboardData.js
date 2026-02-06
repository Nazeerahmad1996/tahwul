
export const timelineData = [
    { date: 'Mar 17', label: 'Kickoff Workshop', status: 'completed' },
    { date: 'March 18', label: 'Data Collection', status: 'completed' },
    { date: 'May 8', label: 'Initial Phase', status: 'in-progress' },
    { date: 'May 9-July 12', label: 'Verification', status: 'pending' },
    { date: 'July 13', label: 'Completion Reviews', status: 'pending' },
    { date: 'August 21', label: 'Cycle Conclusion', status: 'pending' },
];

export const statisticsData = [
    { value: '78.65%', label: 'Overall Progress', icon: 'trophy', color: 'brand-red' },
    { value: '95', label: 'Total Criteria', icon: 'clipboard', color: 'brand-red' },
    { value: '52', label: 'Completed Criteria', icon: 'check', color: 'brand-red' },
    { value: '386', label: 'Evidence Documents', icon: 'file', color: 'brand-red' },
    { value: '302', label: 'Evidence (Completed)', icon: 'refresh', color: 'brand-red' },
    { value: '258', label: 'Uploaded To DGA', icon: 'upload', color: 'brand-red' },
];

export const perspectivesData = [
    {
        name: 'Strategy And Planning',
        percentage: 97.78,
        color: '#1e3a5f',
        subItems: [
            { name: 'Digital Transformation', items: [1, 2, 3] },
            // { name: 'Digital Governance', items: [1, 2, 3] },
            // { name: 'Enterprise Architecture', items: [3, 4] },
        ]
    },
    {
        name: 'Organization And Culture',
        percentage: 70.83,
        color: '#1e3a5f',
        subItems: [
            { name: 'Digital Culture And Environment', items: [1, 2, 3] },
            { name: 'Leadership Development', items: [1, 4] },
            { name: 'Skills & Capacity Building', items: [1, 2, 3] },
        ]
    },
    {
        name: 'Operations And Execution',
        percentage: 80.00,
        color: '#f59e0b',
        subItems: [
            { name: 'Business Processes', items: [1, 2] },
            { name: 'Business Continuity', items: [1, 2] },
        ]
    },
    {
        name: 'Business Continuity',
        percentage: 90.59,
        color: '#1e3a5f',
        subItems: [
            { name: 'Risk Management', items: [1, 2, 3] },
            { name: 'Business Continuity', items: [2, 3, 4, 5, 6, 7] },
        ]
    },
    {
        name: 'Information Technology',
        percentage: 75.00,
        color: '#f59e0b',
        subItems: [
            { name: 'Support Systems', items: [1, 2, 3] },
            { name: 'IT Infrastructure', items: [1, 2, 3, 4, 5, 6] },
            { name: 'Cloud Infrastructure', items: [1, 2, 3] },
        ]
    },
    {
        name: 'Comprehensive Governance',
        percentage: 64.44,
        color: '#1e3a5f',
        subItems: [
            { name: 'Governance Platforms', items: [1, 2] },
            { name: 'Digital Channels', items: [3, 4] },
        ]
    },
    {
        name: 'Channels And Services',
        percentage: 100,
        color: '#10b981',
        subItems: [
            { name: 'Service Quality', items: [1, 2] },
            { name: 'Digital Channels', items: [1, 2] },
        ]
    },
    {
        name: 'Beneficiary Centralization',
        percentage: 60.00,
        color: '#ef4444',
        subItems: [
            { name: 'User Engagement', items: [1, 2, 3, 4] },
            { name: 'User Relationship', items: [1, 2, 3] },
            { name: 'User Experience', items: [1, 2, 3, 4, 5] },
        ]
    },
    {
        name: 'Government Data',
        percentage: 87.50,
        color: '#1e3a5f',
        subItems: [
            { name: 'Data Governance', items: [1, 2, 3] },
            { name: 'Data Usage & Availability', items: [1, 2, 3] },
            { name: 'Open Data', items: [1, 2, 3] },
        ]
    },
    {
        name: 'Research And Innovation',
        percentage: 17.65,
        color: '#ef4444',
        subItems: [
            { name: 'Innovation', items: [1, 2] },
            { name: 'Creative Solutions', items: [3, 4] },
        ]
    },
];

export const topPerformers = [
    { name: 'Ahmed Al-Ali', role: 'Strategy Perspective', percentage: 96, avatar: 'AA' },
    { name: 'Sarah Al-Khaled', role: 'Beneficiary Perspective', percentage: 94, avatar: 'SA' },
    { name: 'Mohammad Al-Mansour', role: 'IT Perspective', percentage: 92, avatar: 'MA' },
];

export const recentActivities = [
    {
        type: 'document',
        title: 'Document "Strategy_Review.Pdf"',
        description: 'Was Uploaded By Ahmed Khaled',
        time: '5 Mins Ago',
        color: '#ef4444'
    },
    {
        type: 'task',
        title: 'Task "Review Compliance Files"',
        description: 'Was Assigned To Mona Hamed',
        time: '20 Mins Ago',
        color: '#ef4444'
    },
    {
        type: 'criterion',
        title: 'New Criterion "5.3 Digital Identity"',
        description: 'Was Created By Admin',
        time: '1 Hour Ago',
        color: '#ef4444'
    },
];

export const monthlyPerformance = [
    { month: 'Jan', value: 75 },
    { month: 'Feb', value: 82 },
    { month: 'Mar', value: 78 },
    { month: 'Apr', value: 35 },
    { month: 'May', value: 68 },
    { month: 'Jun', value: 72 },
    { month: 'Jul', value: 58 },
    { month: 'Aug', value: 65 },
    { month: 'Sept', value: 80 },
    { month: 'Oct', value: 45 },
    { month: 'Nov', value: 70 },
    { month: 'Dec', value: 78 },
];

export const auditReadiness = {
    percentage: 80,
    overdueStds: 12,
    missingEvidence: 5,
};

export const navigationItems = [
    { icon: 'LayoutDashboard', label: 'Dashboard', active: true, path: '/' },
    { icon: 'Eye', label: 'Perspectives', active: false, path: '/details' },
    { icon: 'CheckSquare', label: 'Tasks', active: false, path: '#' },
    { icon: 'FileText', label: 'Documents', active: false, path: '#' },
    { icon: 'BarChart3', label: 'Reports', active: false, path: '#' },
    { icon: 'Users', label: 'Users & Roles', active: false, path: '#' },
];
