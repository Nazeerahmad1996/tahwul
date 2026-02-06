import PropTypes from 'prop-types';
import Card from '@/components/common/Card';
import CardTitle from '@/components/common/CardTitle';
import BarChart from '@/components/charts/BarChart';
import { cardTitles, chartLabels } from '@/constants';

export default function PerformanceChart({ data }) {
    return (
        <Card>
            <CardTitle>{cardTitles.performanceChart}</CardTitle>

            <div className="flex-1 flex mt-6">
                <BarChart
                    data={data}
                    height={180}
                    maxValue={100}
                    yAxisLabels={chartLabels.yAxisValues}
                />
            </div>
        </Card>
    );
}
