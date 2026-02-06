import PropTypes from 'prop-types';


export default function ContentRow({ label, children }) {
    return (
        <div className="flex flex-col sm:flex-row gap-4 py-2">
            <div className="w-full sm:w-[150px] flex-shrink-0 bg-[#F5F8FA] rounded-[10px] p-4 flex">
                <span className="font-cairo font-normal text-[16px] leading-[16px] text-primary capitalize">
                    {label}
                </span>
            </div>

            <div className="flex-1 bg-[#F5F8FA] rounded-[10px] p-4 flex items-center">
                <div className="font-cairo font-normal text-[14px] leading-[22px] text-text-dark w-full">
                    {children}
                </div>
            </div>
        </div>
    );
}

ContentRow.propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
