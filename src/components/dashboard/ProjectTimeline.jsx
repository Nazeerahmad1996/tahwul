import { ChevronDown } from 'lucide-react';
import PropTypes from 'prop-types';
import CardTitle from '@/components/common/CardTitle';
import Card from '@/components/common/Card';
import TimelineProgressBar from '@/components/charts/TimelineProgressBar';
import { cardTitles } from '@/constants';

export default function ProjectTimeline({ data }) {
    const completedCount = data.filter(m => m.status === 'completed' || m.status === 'in-progress').length;
    const completionPercent = (completedCount / data.length) * 100;

    return (
        <Card padding="p-3">
            <div className="flex items-center justify-between mb-6">
                <CardTitle>{cardTitles.projectTimeline}</CardTitle>
                <button className="flex items-center gap-2 px-3 py-1 bg-white border border-border rounded-[10px] text-[14px] text-text-dark font-cairo hover:bg-gray-50">
                    2026
                    <ChevronDown size={14} className="text-text-muted" />
                </button>
            </div>

            <div className="overflow-x-auto pb-2 w-full max-w-[calc(100vw-5rem)] lg:max-w-full">
                <div className="min-w-[600px]">
                    <TimelineProgressBar
                        milestones={data}
                        completionPercent={completionPercent}
                    />
                </div>
            </div>
        </Card>
    );
}
