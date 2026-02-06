export const cardTitles = {
    progressStatus: 'Progress Status',
    complianceScore: 'Overall Compliance Score',
    topPerformers: 'Top Performing Perspective Leaders',
    recentActivities: 'Recent Activities',
    auditReadiness: 'Audit Readiness',
    performanceChart: '12-Month Performance',
    projectTimeline: 'Project Timeline',
};

export const statusLabels = {
    notStarted: 'Not Started',
    inProgress: 'In Progress',
    completed: 'Completed',
    partialUpload: 'Partially Uploaded',
    fullUpload: 'Fully Uploaded',
    delayed: 'Delayed',
};

export const complianceScoreText = {
    label: 'Basic Standards 2025',
};

export const auditReadinessText = {
    readinessLabel: 'Readiness Level',
    overdueStds: 'Overdue Stds',
    missingEvidence: 'Missing Evidence',
};

export const statisticsLabels = {
    overallProgress: 'Overall Progress',
    totalCriteria: 'Total Criteria',
    completedCriteria: 'Completed Criteria',
    evidenceDocuments: 'Evidence Documents',
    evidenceCompleted: 'Evidence (Completed)',
    uploadedToDGA: 'Uploaded To DGA',
};

export const chartLabels = {
    yAxisValues: [100, 80, 60, 40, 20, 0],
};

export const statusLegendConfig = [
    { key: 'notStarted', label: statusLabels.notStarted },
    { key: 'inProgress', label: statusLabels.inProgress },
    { key: 'completed', label: statusLabels.completed },
    { key: 'partialUpload', label: statusLabels.partialUpload },
    { key: 'fullUpload', label: statusLabels.fullUpload },
    { key: 'delayed', label: statusLabels.delayed },
];

export const detailsPageData = {
    title: 'Digital Transformation Strategic Planning',
    category: 'Strategy & Planning',
    description: 'Develop comprehensive strategic plans for digital transformation aligned with organizational goals',
    sections: {
        objective: 'Develop A Digital Transformation Strategy Aligned With The Organization\'s Strategy And The Objectives Of Saudi Vision 2030.',
        requirements: [
            'A. The Organization\'s Vision, Mission, Strategic Pillars, And Strategic Objectives, And Their Alignment With The Organization\'s Overall Strategy.',
            'B. Strategic Initiatives, Programs, And Performance Indicators.',
            'C. A Clear Methodology For Integration And Coordination With Relevant External Entities To Achieve The Strategy\'s Objectives.',
            'D. Required Competencies, Capabilities, And Skills Necessary To Achieve The Strategy\'s Objectives.',
        ],
        evidenceDocuments: 'Submit The Approved Digital Transformation Strategy That Includes All The Requirements Of This Standard, Provided That It Has Been Approved Within A Period Not Exceeding 36 Months.',
        relatedRegulations: 'Council Of Ministers Resolution No. (40) Dated 27/2/1427H, Clause (16).',
        scope: 'All Government Entities.',
    },
    leaders: [
        { name: 'Ahmed Al-Ali', role: 'Strategy Perspective', avatar: 'AA' },
        { name: 'Ahmed Al-Ali', role: 'Strategy Perspective', avatar: 'AA' },
    ],
};

export const documentsTableHeaders = [
    'Document Number',
    'Document Name',
    'Document Lead',
    'Document Preparer',
    'Date',
    'Due Date',
    'Status'
];

export const documentsData = [
    {
        documentNumber: '5.4.1.1',
        documentName: 'Digital_Transformation_Plan.Pdf',
        documentLead: 'Ahmed Khaled',
        documentPreparer: 'Ahmed Khaled',
        date: '2025-08-01',
        dueDate: '2025-08-01',
        status: 'Approved'
    },
    {
        documentNumber: '5.4.1.2',
        documentName: 'KPI_Framework.Xlsx',
        documentLead: 'Mona Hamed',
        documentPreparer: 'Mona Hamed',
        date: '2025-08-01',
        dueDate: '2025-08-01',
        status: 'Pending Review'
    },
    {
        documentNumber: '5.4.1.3',
        documentName: 'Roadmap_Version1.Docx',
        documentLead: 'Rami AlSharif',
        documentPreparer: 'Rami AlSharif',
        date: '2025-08-01',
        dueDate: '2025-08-01',
        status: 'Pending Review'
    }
];

export const evidenceActivitiesData = [
    {
        title: 'Roadmap_Version1.Docx',
        description: 'Uploaded By Rami AlSharif',
        time: '5 Mins Ago',
        color: '#DB1F26'
    },
    {
        title: 'KPI_Framework.Xlsx',
        description: 'Uploaded By Mona Hamed',
        time: '5 Mins Ago',
        color: '#DB1F26'
    },
    {
        title: 'Digital_Transformation_Plan.Pdf',
        description: 'Uploaded By Ahmed Khaled',
        time: '5 Mins Ago',
        color: '#DB1F26'
    }
];

export const tabsConfig = [
    { id: 'overview', label: 'Overview' },
    { id: 'evidence', label: 'Evidence' },
];

export const evidenceCardsLabels = {
    total: 'Total Evidence',
    underReview: 'Under Review Evidence',
    inProgress: 'In Progress Evidence',
    completed: 'Completed Evidence',
};

export const leadersData = [
    { name: 'Ahmed Al-Ali', role: 'Strategy' },
    { name: 'Ahmed Al-Ali', role: 'Strategy' },
];

export const commentsData = [
    { author: 'Sara Ibrahim', initial: 'S', date: '2025-08-05', content: 'Ensure The Plan Includes A Clear Governance Model.' },
    { author: 'Mona Hamed', initial: 'M', date: '2025-08-05', content: 'Ensure The Plan Includes A Clear Governance Model.' },
];
export const uiStrings = {
    leadersTitle: 'Leaders',
    commentsTitle: 'Comments',
    postCommentButton: 'Post Comment',
    commentPlaceholder: 'Write a comment...',
    requirementsStart: 'Prepare A Digital Transformation Strategy For The Transition To Electronic Government Transactions, Including The Following:',
};
export default {
    cardTitles,
    statusLabels,
    complianceScoreText,
    auditReadinessText,
    statisticsLabels,
    chartLabels,
    statusLegendConfig,
    detailsPageData,
    documentsTableHeaders,
    documentsData,
    evidenceActivitiesData,
    tabsConfig,
    evidenceCardsLabels,
    leadersData,
    commentsData,
    uiStrings,
};
