import PropTypes from 'prop-types';

export default function CardTitle({ children }) {
    return (
        <h2 className="font-cairo font-bold text-[16px] leading-[16px] text-text-dark capitalize">
            {children}
        </h2>
    );
}

CardTitle.propTypes = {
    children: PropTypes.node.isRequired,
};