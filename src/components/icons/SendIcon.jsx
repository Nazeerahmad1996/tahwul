import PropTypes from 'prop-types';

/**
 * Send icon for post comment button
 */
export default function SendIcon({ className, color = 'white' }) {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M22 2L11 13"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M22 2L15 22L11 13L2 9L22 2Z"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

SendIcon.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
};
