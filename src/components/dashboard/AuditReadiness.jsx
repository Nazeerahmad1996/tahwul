import PropTypes from 'prop-types';
import Card from '@/components/common/Card';
import CardTitle from '@/components/common/CardTitle';
import GaugeChart from '@/components/charts/GaugeChart';
import { cardTitles, auditReadinessText } from '@/constants';

export default function AuditReadiness({ data }) {
    const { percentage, overdueStds, missingEvidence } = data;

    return (
        <Card>
            <CardTitle>{cardTitles.auditReadiness}</CardTitle>

            <div className="flex-1 flex items-center justify-center">
                <GaugeChart
                    percentage={percentage}
                    strokeColor="stroke-gauge-green"
                    label={auditReadinessText.readinessLabel}
                />
            </div>

            <div className="w-full border-t border-border my-4"></div>

            <div className="flex justify-between p-2">
                <div className="flex-1 flex flex-col items-center">
                    <span className="font-cairo font-bold text-[18px] leading-[20px] text-text-dark">
                        {overdueStds}
                    </span>
                    <span className="font-cairo font-normal text-[11px] leading-[14px] text-text-muted mt-1">
                        {auditReadinessText.overdueStds}
                    </span>
                </div>

                <div className="flex-1 flex flex-col items-center">
                    <span className="font-cairo font-bold text-[18px] leading-[20px] text-text-dark">
                        {missingEvidence}
                    </span>
                    <span className="font-cairo font-normal text-[11px] leading-[14px] text-text-muted mt-1">
                        {auditReadinessText.missingEvidence}
                    </span>
                </div>
            </div>
        </Card>
    );
}
