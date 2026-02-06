import PropTypes from 'prop-types';


export default function EvidenceCard({ icon: Icon, value, label, iconColor = '#DB1F26' }) {
    return (
        <div className="bg-surface border border-border rounded-[10px] p-4 flex items-center gap-3 flex-1">
            <div className="p-2">
                <Icon className="w-6 h-6" color={iconColor} />
            </div>
            <div>
                <span className="font-cairo font-bold text-[24px] leading-[28px] text-text-dark block">
                    {value}
                </span>
                <span className="font-cairo font-normal text-[14px] leading-[16px] text-text-muted capitalize">
                    {label}
                </span>
            </div>
        </div>
    );
}

EvidenceCard.propTypes = {
    icon: PropTypes.elementType.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    label: PropTypes.string.isRequired,
    iconColor: PropTypes.string,
};
