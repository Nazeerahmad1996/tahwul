import PropTypes from 'prop-types';


export default function LeaderCard({ name, role, image }) {
    return (
        <div className="w-full sm:w-[225px] h-[63px] bg-[#F5F8FA] rounded-[10px] flex items-center gap-[11px]">
            <img
                src={image}
                alt={name}
                className="w-[47px] h-[47px] rounded-full object-cover ml-4"
            />
            <div className="flex flex-col items-start gap-[2px]">
                <span className="font-cairo font-medium text-[16px] leading-[22px] text-primary capitalize">
                    {name}
                </span>
                <span className="font-cairo font-medium text-[16px] leading-[22px] text-[#8597A8] capitalize">
                    {role}
                </span>
            </div>
        </div>
    );
}

LeaderCard.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};
