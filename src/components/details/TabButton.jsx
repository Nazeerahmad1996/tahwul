import PropTypes from 'prop-types';


export default function TabButton({ label, isActive, onClick, width }) {
    return (
        <button
            onClick={onClick}
            className={`relative z-10 h-[34px] flex items-center justify-center rounded-[8px] font-cairo font-normal text-[14px] leading-[20px] transition-colors duration-300 capitalize cursor-pointer ${isActive ? 'text-primary' : 'text-[#8597A8]'
                }`}
            style={{ width }}
        >
            {label}
        </button>
    );
}

TabButton.propTypes = {
    label: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    width: PropTypes.string.isRequired,
};
