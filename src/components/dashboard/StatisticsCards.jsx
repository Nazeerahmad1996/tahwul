import PropTypes from 'prop-types';
import { statisticsIconMap, statisticsColorMap } from '@/constants/mappings';
import Card from '@/components/common/Card';
import ReportsIcon from '@/components/icons/ReportsIcon';

export default function StatisticsCards({ data }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
            {data.map((stat, index) => {
                const Icon = statisticsIconMap[stat.icon] || ReportsIcon;
                const iconColor = statisticsColorMap[stat.color] || 'text-primary';

                return (
                    <Card key={index} className="flex flex-row justify-between !p-3 min-h-[82px]">
                        <div className="flex flex-col gap-2">
                            <span className="font-cairo font-bold text-[24px] leading-[28px] text-text-dark">
                                {stat.value}
                            </span>
                            <span className="font-cairo font-normal text-[12px] leading-[16px] text-text-muted capitalize">
                                {stat.label}
                            </span>
                        </div>

                        <Icon className={`w-6 h-6 ${iconColor}`} />
                    </Card>
                );
            })}
        </div>
    );
}
