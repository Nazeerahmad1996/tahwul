import PropTypes from 'prop-types';


export default function CommentCard({ author, initial, date, content }) {
    return (
        <div className="border border-border rounded-[10px] p-4">
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#E0E8ED] flex items-center justify-center text-primary font-bold text-[12px]">
                        {initial}
                    </div>
                    <span className="font-cairo font-bold text-[14px] text-primary">
                        {author}
                    </span>
                </div>
                <span className="font-cairo text-[12px] text-text-muted">{date}</span>
            </div>
            <p className="font-cairo text-[14px] text-text-dark">{content}</p>
        </div>
    );
}

CommentCard.propTypes = {
    author: PropTypes.string.isRequired,
    initial: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};
