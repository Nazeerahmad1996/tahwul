import PropTypes from 'prop-types';
import { gradients } from '../../theme';

export default function BarChart({
    data,
    height = 180,
    maxValue = 100,
    barGradient = gradients.chartBar,
    yAxisLabels = ['100', '75', '50', '25', '0'],
}) {
    return (
        <div className="flex flex-1">
            <div
                className="w-8 flex flex-col justify-between items-end pr-2"
                style={{ height: `${height}px` }}
            >
                {yAxisLabels.map((label) => (
                    <span
                        key={label}
                        className="text-[11px] leading-[11px] text-text-muted font-ibm-plex"
                    >
                        {label}
                    </span>
                ))}
            </div>

            <div
                className="w-[1px] bg-border mx-2"
                style={{ height: `${height}px` }}
            ></div>
            <div className="flex-1 flex flex-col">
                <div
                    className="flex items-end justify-between gap-1"
                    style={{ height: `${height}px` }}
                >
                    {data.map((item, index) => {
                        const barHeight = (item.value / maxValue) * height;
                        return (
                            <div
                                key={index}
                                className="flex-1 flex flex-col items-center justify-end max-w-[40px] h-full"
                            >
                                <div
                                    className="w-full rounded-t"
                                    style={{
                                        height: `${barHeight}px`,
                                        background: barGradient,
                                    }}
                                ></div>
                            </div>
                        );
                    })}
                </div>

                <div className="flex justify-between gap-1 mt-2">
                    {data.map((item, index) => (
                        <span
                            key={index}
                            className="flex-1 text-center text-[10px] leading-[14px] text-text-muted max-w-[40px] font-ibm-plex"
                        >
                            {item.label || item.month}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

BarChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.number.isRequired,
            label: PropTypes.string,
            month: PropTypes.string,
        })
    ).isRequired,
    height: PropTypes.number,
    maxValue: PropTypes.number,
    barGradient: PropTypes.string,
    yAxisLabels: PropTypes.arrayOf(PropTypes.string),
};
