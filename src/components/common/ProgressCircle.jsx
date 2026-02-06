import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { colors } from '../../theme';

export default function ProgressCircle({ percentage, size = 80, strokeWidth = 8 }) {
    const { radius, circumference, strokeDashoffset } = useMemo(() => {
        const r = (size / 2) - (strokeWidth / 2);
        const c = 2 * Math.PI * r;
        const offset = c - (percentage / 100) * c;
        return { radius: r, circumference: c, strokeDashoffset: offset };
    }, [percentage, size, strokeWidth]);

    return (
        <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className="transform -rotate-90"
        >
            <circle
                cx={size / 2}
                cy={size / 2}
                r={size / 2}
                fill={colors.background}
            />
            <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={colors.success}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
            />
            <text
                x={size / 2}
                y={size / 2}
                textAnchor="middle"
                dominantBaseline="central"
                className="font-cairo font-bold text-[14px] fill-primary"
                style={{ transform: 'rotate(90deg)', transformOrigin: 'center' }}
            >
                {percentage}%
            </text>
        </svg>
    );
}

ProgressCircle.propTypes = {
    percentage: PropTypes.number.isRequired,
    size: PropTypes.number,
    strokeWidth: PropTypes.number,
};
