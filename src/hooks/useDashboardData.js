import { useState, useEffect, useCallback } from 'react';
import {
    statisticsData,
    perspectivesData,
    topPerformers,
    recentActivities,
    monthlyPerformance,
    auditReadiness,
    timelineData,
} from '@/data/dashboardData';
import {
    detailsPageData,
    leadersData,
    documentsData,
    evidenceActivitiesData,
    commentsData,
} from '@/constants/strings';

import image2 from '@/assets/images/image2.jpg';
import image3 from '@/assets/images/image3.jpg';


export function useDashboardData() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            await new Promise(resolve => setTimeout(resolve, 500));

            const leadersWithImages = leadersData.map((leader, index) => ({
                ...leader,
                image: index === 0 ? image2 : image3
            }));

            setData({
                statistics: statisticsData,
                perspectives: perspectivesData,
                topPerformers,
                recentActivities,
                monthlyPerformance,
                auditReadiness,
                timeline: timelineData,
                details: {
                    project: {
                        ...detailsPageData,
                        progress: 100,
                        evidence: { total: 4, underReview: 3, inProgress: 2, completed: 1 },
                    },
                    leaders: leadersWithImages,
                    documents: documentsData,
                    evidenceActivities: evidenceActivitiesData,
                    comments: commentsData,
                }
            });
        } catch (err) {
            setError(err.message || 'Failed to fetch dashboard data');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const refresh = useCallback(() => {
        fetchData();
    }, [fetchData]);

    return {
        data,
        loading,
        error,
        refresh,
    };
}

export default useDashboardData;
