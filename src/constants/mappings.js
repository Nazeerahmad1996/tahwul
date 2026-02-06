import ReportsIcon from '../components/icons/ReportsIcon';
import TotalCriteriaIcon from '../components/icons/TotalCriteriaIcon';
import CompletedCriteriaIcon from '../components/icons/CompletedCriteriaIcon';
import EvidenceDocumentsIcon from '../components/icons/EvidenceDocumentsIcon';
import EvidenceCompletedIcon from '../components/icons/EvidenceCompletedIcon';
import UploadedIcon from '../components/icons/UploadedIcon';

export const statisticsIconMap = {
    trophy: ReportsIcon,
    clipboard: TotalCriteriaIcon,
    check: CompletedCriteriaIcon,
    file: EvidenceDocumentsIcon,
    refresh: EvidenceCompletedIcon,
    upload: UploadedIcon,
};

export const statisticsColorMap = {
    yellow: 'text-warning',
    blue: 'text-info',
    green: 'text-success',
    purple: 'text-[#8B5CF6]',
    teal: 'text-[#14B8A6]',
    'brand-red': 'text-[#DB1F26]',
    gray: 'text-text-muted',
};
