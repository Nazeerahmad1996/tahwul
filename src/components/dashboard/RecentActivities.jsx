import { Fragment } from 'react';
import PropTypes from 'prop-types';
import Card from '@/components/common/Card';
import CardTitle from '@/components/common/CardTitle';
import { cardTitles } from '@/constants';

export default function RecentActivities({ activities, title, className }) {
    const data = activities;
    const cardTitle = title || cardTitles.recentActivities;

    return (
        <Card className={className}>
            <CardTitle>{cardTitle}</CardTitle>

            <div className="w-full border-t border-border mt-3 mb-3"></div>

            <div className="flex flex-col flex-1">
                {data.map((activity, index) => (
                    <Fragment key={index}>
                        <div className="flex items-start gap-3 py-2">
                            <div
                                className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                                style={{ backgroundColor: activity.color }}
                            />

                            <div className="flex-1 min-w-0">
                                <p className="font-cairo font-medium text-[14px] leading-[20px] text-text-dark break-words">
                                    {activity.title} {activity.description}
                                </p>
                            </div>

                            <span className="font-cairo font-normal text-[11px] leading-[16px] text-text-muted flex-shrink-0">
                                {activity.time}
                            </span>
                        </div>

                        {index < data.length - 1 && (
                            <div className="w-full border-t border-border m-1"></div>
                        )}
                    </Fragment>
                ))}
            </div>
        </Card>
    );
}
