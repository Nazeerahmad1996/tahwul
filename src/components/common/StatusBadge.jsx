import PropTypes from 'prop-types';
import { badgeColorClasses } from '../../theme';
export default function StatusBadge({ number, status, colorClass }) {
    return (
        <div className={`${colorClass || badgeColorClasses[status] || badgeColorClasses.gray} rounded-full flex items-center justify-center w-6 h-6`}>
            <span className="font-cairo font-normal text-[14px] leading-[16px] text-white">
                {number}
            </span>
        </div>
    );
}

StatusBadge.propTypes = {
    number: PropTypes.number.isRequired,
    status: PropTypes.string,
    colorClass: PropTypes.string,
};
