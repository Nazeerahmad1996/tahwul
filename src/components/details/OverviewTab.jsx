import PropTypes from 'prop-types';
import Card from '@/components/common/Card';
import ContentRow from '@/components/details/ContentRow';
import LeaderCard from '@/components/details/LeaderCard';
import { colors } from '@/theme';
import { uiStrings } from '@/constants/strings';

export default function OverviewTab({ detailsData, leadersData }) {
    return (
        <>
            <Card className="!p-6 relative">
                <div
                    className="absolute left-[182px] top-0 bottom-0 w-[1px] hidden md:block"
                    style={{ backgroundColor: colors.border }}
                />

                <ContentRow label="Objective">
                    {detailsData.sections.objective}
                </ContentRow>

                <ContentRow label="Implementation Requirements">
                    <div className="space-y-2">
                        <p>{uiStrings.requirementsStart}</p>
                        {detailsData.sections.requirements.map((req, idx) => (
                            <p key={idx}>{req}</p>
                        ))}
                    </div>
                </ContentRow>

                <ContentRow label="Evidence Documents">
                    {detailsData.sections.evidenceDocuments}
                </ContentRow>

                <ContentRow label="Related Regulations">
                    {detailsData.sections.relatedRegulations}
                </ContentRow>

                <ContentRow label="Scope">
                    {detailsData.sections.scope}
                </ContentRow>
            </Card>

            <Card className="!p-4 mt-8">
                <div className="mb-4">
                    <h3 className="font-cairo font-bold text-[18px] leading-[28px] text-text-dark">
                        {uiStrings.leadersTitle}
                    </h3>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                    {leadersData.map((leader, idx) => (
                        <LeaderCard key={idx} {...leader} />
                    ))}
                </div>
            </Card>
        </>
    );
}

OverviewTab.propTypes = {
    detailsData: PropTypes.object.isRequired,
    leadersData: PropTypes.array.isRequired,
};
