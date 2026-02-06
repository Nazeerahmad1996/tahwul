import PropTypes from 'prop-types';
import Card from '@/components/common/Card';
import CardTitle from '@/components/common/CardTitle';
import StatusBadge from '@/components/common/StatusBadge';
import StatusLegendItem from '@/components/common/StatusLegendItem';
import { cardTitles, statusLegendConfig } from '@/constants';
import { statusLegendClasses } from '@/theme';

const BADGE_CLASSES = statusLegendConfig.map(item => statusLegendClasses[item.key]);


function PerspectiveCard({ name, percentage }) {
    const formattedPercent = percentage % 1 === 0 ? percentage : percentage.toFixed(2);

    return (
        <div className="bg-primary rounded-[10px] flex flex-col items-center justify-center p-3 min-h-[90px]">
            <p className="font-cairo font-bold text-[11px] leading-[14px] text-white text-center capitalize mb-2 flex-1 flex items-center">
                {name}
            </p>
            <div className="flex justify-center items-center rounded-[10px] px-3 py-1 bg-white/10">
                <span className="font-cairo font-bold text-[12px] leading-[16px] text-white">
                    {formattedPercent}%
                </span>
            </div>
        </div>
    );
}

PerspectiveCard.propTypes = {
    name: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};


function SubItemCard({ name, items }) {
    return (
        <div className="bg-background border border-border rounded-[10px] p-2 flex flex-col flex-1 min-h-[70px]">
            <p className="font-cairo font-normal text-[10px] leading-[14px] text-text-dark text-center capitalize mb-1">
                {name}
            </p>
            <div className="flex flex-wrap gap-1 justify-center items-center flex-1 content-center">
                {items.map((num, idx) => (
                    <StatusBadge
                        key={idx}
                        number={num}
                        colorClass={BADGE_CLASSES[idx % BADGE_CLASSES.length]}
                    />
                ))}
            </div>
        </div>
    );
}

SubItemCard.propTypes = {
    name: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.number).isRequired,
};


function PerspectiveColumn({ perspective }) {
    return (
        <div className="flex flex-col gap-2 flex-1">
            <PerspectiveCard name={perspective.name} percentage={perspective.percentage} />
            <div className="flex flex-col gap-2 flex-1">
                {perspective.subItems.map((subItem, idx) => (
                    <SubItemCard key={idx} name={subItem.name} items={subItem.items} />
                ))}
            </div>
        </div>
    );
}

PerspectiveColumn.propTypes = {
    perspective: PropTypes.shape({
        name: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
        subItems: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                items: PropTypes.arrayOf(PropTypes.number).isRequired,
            })
        ).isRequired,
    }).isRequired,
};


export default function ProgressStatus({ data }) {
    return (
        <Card className="min-h-[580px]">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                <CardTitle>{cardTitles.progressStatus}</CardTitle>

                <div className="flex items-center gap-3 text-[12px] flex-wrap">
                    {statusLegendConfig.map((item) => (
                        <StatusLegendItem
                            key={item.key}
                            colorClass={statusLegendClasses[item.key]}
                            label={item.label}
                        />
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 xl:grid-cols-10 gap-3 flex-1">
                {data.slice(0, 10).map((perspective, idx) => (
                    <PerspectiveColumn key={idx} perspective={perspective} />
                ))}
            </div>
        </Card>
    );
}
