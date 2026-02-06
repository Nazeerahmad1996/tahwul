import PropTypes from 'prop-types';

export default function StatusLegendItem({ colorClass, label }) {
    return (
        <div className="flex items-center gap-1">
            <span className={`w-2 h-2 rounded-full ${colorClass}`} />
            <span className="font-cairo font-normal text-text-dark capitalize">
                {label}
            </span>
        </div>
    );
}

StatusLegendItem.propTypes = {
    colorClass: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};
