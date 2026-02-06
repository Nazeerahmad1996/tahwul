import { useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import DashboardLayout from '@/components/layout/DashboardLayout';
import Card from '@/components/common/Card';
import CardTitle from '@/components/common/CardTitle';
import ProgressCircle from '@/components/common/ProgressCircle';

import EvidenceCard from '@/components/details/EvidenceCard';
import TabButton from '@/components/details/TabButton';
import OverviewTab from '@/components/details/OverviewTab';
import EvidenceTab from '@/components/details/EvidenceTab';

import TotalEvidenceIcon from '@/components/icons/TotalEvidenceIcon';
import UnderReviewEvidenceIcon from '@/components/icons/UnderReviewEvidenceIcon';
import InProgressEvidenceIcon from '@/components/icons/InProgressEvidenceIcon';
import CompletedEvidenceIcon from '@/components/icons/CompletedEvidenceIcon';

import {
    tabsConfig,
    evidenceCardsLabels,
    uiStrings,
} from '@/constants/strings';
import { colors } from '@/theme';
import useDashboardData from '@/hooks/useDashboardData';

const TABS = tabsConfig.map(tab => ({
    ...tab,
    width: tab.id === 'overview' ? '99px' : '114px'
}));

const EVIDENCE_CARDS = [
    { icon: TotalEvidenceIcon, key: 'total', label: evidenceCardsLabels.total, color: colors.danger },
    { icon: UnderReviewEvidenceIcon, key: 'underReview', label: evidenceCardsLabels.underReview, color: colors.danger },
    { icon: InProgressEvidenceIcon, key: 'inProgress', label: evidenceCardsLabels.inProgress, color: colors.danger },
    { icon: CompletedEvidenceIcon, key: 'completed', label: evidenceCardsLabels.completed, color: colors.danger },
];

export default function DetailsPage() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('overview');
    const { data, loading, error } = useDashboardData();

    const handleBack = useCallback(() => navigate('/'), [navigate]);
    const handleTabChange = useCallback((tabId) => setActiveTab(tabId), []);

    const sliderStyle = useMemo(() => ({
        left: activeTab === 'overview' ? '3px' : '108px',
        width: activeTab === 'overview' ? '99px' : '114px',
    }), [activeTab]);

    if (loading) {
        return (
            <DashboardLayout>
                <div className="flex items-center justify-center h-[calc(100vh-100px)]">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
            </DashboardLayout>
        );
    }

    if (error) {
        return (
            <DashboardLayout>
                <div className="text-center text-red-500 p-8">
                    Error loading details: {error}
                </div>
            </DashboardLayout>
        );
    }

    const { project, leaders, documents, comments, evidenceActivities } = data.details;

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <header className="flex items-center gap-2">
                    <button onClick={handleBack} className="hover:opacity-70 transition-opacity cursor-pointer">
                        <ArrowLeft size={16} className="text-primary" strokeWidth={1.5} />
                    </button>
                    <h1 className="font-cairo font-bold text-[16px] leading-[16px] text-primary capitalize">
                        {project.title}
                    </h1>
                </header>

                <Card className="!p-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-0">
                        <div className="flex-1 w-full">
                            <span className="inline-flex items-center justify-center px-[10px] py-[3px] border border-border rounded-[30px] font-cairo font-medium text-[12px] leading-[22px] text-text-muted capitalize mb-3">
                                {project.category}
                            </span>
                            <CardTitle className="mb-2">{project.title}</CardTitle>
                            <p className="font-cairo font-normal text-[14px] leading-[16px] text-text-muted capitalize mt-2">
                                {project.description}
                            </p>
                        </div>
                        <div className="self-center sm:self-auto">
                            <ProgressCircle percentage={project.progress} />
                        </div>
                    </div>
                </Card>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {EVIDENCE_CARDS.map(({ icon, key, label, color }) => (
                        <EvidenceCard
                            key={key}
                            icon={icon}
                            value={project.evidence[key]}
                            label={label}
                            iconColor={color}
                        />
                    ))}
                </div>

                <nav className="relative flex items-center p-[3px] gap-[6px] bg-[#E0E8ED]/50 rounded-[8px] w-fit">
                    <div
                        className="absolute top-[3px] bottom-[3px] bg-white rounded-[8px] transition-all duration-300 ease-in-out shadow-sm"
                        style={sliderStyle}
                    />
                    {TABS.map(({ id, label, width }) => (
                        <TabButton
                            key={id}
                            label={label}
                            isActive={activeTab === id}
                            onClick={() => handleTabChange(id)}
                            width={width}
                        />
                    ))}
                </nav>

                {activeTab === 'overview' && (
                    <OverviewTab
                        detailsData={project}
                        leadersData={leaders}
                    />
                )}

                {activeTab === 'evidence' && (
                    <EvidenceTab
                        documentsData={documents}
                        commentsData={comments}
                        activitiesData={evidenceActivities}
                    />
                )}
            </div>
        </DashboardLayout>
    );
}
