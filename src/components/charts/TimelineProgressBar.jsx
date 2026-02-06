import PropTypes from 'prop-types';

export default function TimelineProgressBar({ milestones, completionPercent }) {
    return (
        <div className="relative">
            <div className="relative w-full h-[14px] rounded-[10px] bg-background">
                <div
                    className="absolute left-0 top-0 h-[14px] rounded-[10px] bg-success"
                    style={{
                        width: `${completionPercent}%`
                    }}
                ></div>
            </div>

            <div className="absolute top-0 left-0 right-0 flex justify-between" style={{ zIndex: 10 }}>
                {milestones.map((milestone, index) => {
                    const isInsideGreen = ((index / (milestones.length - 1)) * 100) < completionPercent;

                    return (
                        <div key={index} className="flex flex-col items-center text-center flex-1">
                            <div
                                className={`rounded-full w-[10px] h-[10px] mt-[2px] ${isInsideGreen ? 'bg-white' : 'bg-danger'}`}
                            ></div>
                            <span className="text-[14px] font-normal leading-[16px] text-text-muted font-cairo capitalize mt-3">
                                {milestone.date}
                            </span>
                            <span className="text-[14px] font-medium leading-[16px] text-text-dark font-cairo capitalize mt-1">
                                {milestone.label}
                            </span>
                        </div>
                    );
                })}
            </div>

            <div className="h-[50px]"></div>
        </div>
    );
}

TimelineProgressBar.propTypes = {
    milestones: PropTypes.arrayOf(
        PropTypes.shape({
            date: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            status: PropTypes.oneOf(['completed', 'in-progress', 'pending']),
        })
    ).isRequired,
    completionPercent: PropTypes.number.isRequired,
};
