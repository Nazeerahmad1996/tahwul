import PropTypes from 'prop-types';
import Card from '@/components/common/Card';
import CommentCard from '@/components/details/CommentCard';
import RecentActivities from '@/components/dashboard/RecentActivities';
import DocumentsTable from '@/components/dashboard/DocumentsTable';
import SendIcon from '@/components/icons/SendIcon';
import { uiStrings } from '@/constants/strings';

export default function EvidenceTab({ documentsData, commentsData, activitiesData }) {
    return (
        <div className="space-y-6">
            <DocumentsTable data={documentsData} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                <Card className="lg:col-span-2 !p-6">
                    <h3 className="font-cairo font-bold text-[18px] text-primary mb-6">
                        {uiStrings.commentsTitle}
                    </h3>
                    <div className="space-y-4 mb-6">
                        {commentsData.map((comment, idx) => (
                            <CommentCard key={idx} {...comment} />
                        ))}
                    </div>

                    <div className="border border-border rounded-[10px] p-2">
                        <textarea
                            className="w-full h-24 resize-none outline-none font-cairo text-[14px] p-2 resize-y"
                        />
                    </div>
                    <div className="mt-4">
                        <button className="bg-primary text-white font-cairo font-medium text-[14px] px-6 py-2 rounded-[8px] flex items-center gap-2 hover:opacity-90 transition-opacity">
                            <SendIcon />
                            {uiStrings.postCommentButton}
                        </button>
                    </div>
                </Card>

                <RecentActivities
                    activities={activitiesData}
                    className="!p-6 !h-fit"
                />
            </div>
        </div>
    );
}

EvidenceTab.propTypes = {
    documentsData: PropTypes.array.isRequired,
    commentsData: PropTypes.array.isRequired,
    activitiesData: PropTypes.array.isRequired,
};
