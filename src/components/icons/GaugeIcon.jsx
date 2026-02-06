import PropTypes from 'prop-types';

export default function GaugeIcon({ strokeColor, arcLength, strokeDashoffset, className = '' }) {
    return (
        <svg viewBox="0 -10 258 139" className={`overflow-visible ${className}`}>
            {/* Background Arc (Gray) */}
            <path
                d="M 10 129 A 119 119 0 0 1 248 129"
                fill="none"
                className="stroke-background"
                strokeWidth="16"
                strokeLinecap="round"
            />

            {/* Progress Arc */}
            <path
                d="M 10 129 A 119 119 0 0 1 248 129"
                fill="none"
                className={strokeColor}
                strokeWidth="16"
                strokeLinecap="round"
                strokeDasharray={arcLength}
                strokeDashoffset={strokeDashoffset}
            />
        </svg>
    );
}

GaugeIcon.propTypes = {
    strokeColor: PropTypes.string.isRequired,
    arcLength: PropTypes.number.isRequired,
    strokeDashoffset: PropTypes.number.isRequired,
    className: PropTypes.string,
};
