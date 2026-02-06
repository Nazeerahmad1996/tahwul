import PropTypes from 'prop-types';
import GaugeIcon from '../icons/GaugeIcon';

export default function GaugeChart({
    percentage,
    strokeColor = 'stroke-success',
    label,
    percentageText,
}) {
    const radius = 119;
    const arcLength = Math.PI * radius;
    const strokeDashoffset = arcLength * (1 - percentage / 100);

    return (
        <div className="flex flex-col items-center justify-center">
            <GaugeIcon
                className="w-full max-w-[250px] h-auto"
                strokeColor={strokeColor}
                arcLength={arcLength}
                strokeDashoffset={strokeDashoffset}
            />

            <span className="font-cairo font-bold text-[36px] leading-[40px] text-text-dark mt-[-50px]">
                {percentageText || `${percentage}%`}
            </span>

            {label && (
                <span className="font-cairo font-normal text-[14px] leading-[16px] text-text-muted capitalize mt-1">
                    {label}
                </span>
            )}
        </div>
    );
}

GaugeChart.propTypes = {
    percentage: PropTypes.number.isRequired,
    strokeColor: PropTypes.string,
    label: PropTypes.string,
    percentageText: PropTypes.string,
};
