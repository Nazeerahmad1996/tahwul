import PropTypes from 'prop-types';

export default function Card({ children, className = '', padding = 'p-4' }) {
    return (
        <div className={`bg-surface border border-border rounded-[10px] ${padding} flex flex-col h-full ${className}`}>
            {children}
        </div>
    );
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    padding: PropTypes.string,
};
