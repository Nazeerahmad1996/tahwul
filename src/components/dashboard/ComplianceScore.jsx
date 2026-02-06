import Card from '@/components/common/Card';
import CardTitle from '@/components/common/CardTitle';
import GaugeChart from '@/components/charts/GaugeChart';
import { cardTitles, complianceScoreText } from '@/constants';

export default function ComplianceScore() {
    const percentage = 65;

    return (
        <Card>
            <CardTitle>{cardTitles.complianceScore}</CardTitle>

            <div className="flex-1 flex items-center justify-center">
                <GaugeChart
                    percentage={percentage}
                    strokeColor="stroke-danger"
                    label={complianceScoreText.label}
                />
            </div>
        </Card>
    );
}
