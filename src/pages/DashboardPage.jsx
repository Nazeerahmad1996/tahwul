import DashboardLayout from '@/components/layout/DashboardLayout';
import ProjectTimeline from '@/components/dashboard/ProjectTimeline';
import StatisticsCards from '@/components/dashboard/StatisticsCards';
import ProgressStatus from '@/components/dashboard/ProgressStatus';
import ComplianceScore from '@/components/dashboard/ComplianceScore';
import TopPerformers from '@/components/dashboard/TopPerformers';
import RecentActivities from '@/components/dashboard/RecentActivities';
import PerformanceChart from '@/components/dashboard/PerformanceChart';
import AuditReadiness from '@/components/dashboard/AuditReadiness';

import useDashboardData from '@/hooks/useDashboardData';

export default function DashboardPage() {
    const { data, loading, error } = useDashboardData();

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
                    Error loading dashboard: {error}
                </div>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <ProjectTimeline data={data.timeline} />

                <StatisticsCards data={data.statistics} />

                <ProgressStatus data={data.perspectives} />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <ComplianceScore />
                    <TopPerformers data={data.topPerformers} />
                    <RecentActivities activities={data.recentActivities} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="col-span-1 lg:col-span-2">
                        <PerformanceChart data={data.monthlyPerformance} />
                    </div>
                    <AuditReadiness data={data.auditReadiness} />
                </div>
            </div>
        </DashboardLayout>
    );
}
