import PropTypes from 'prop-types';
import Card from '../common/Card';
import FilterIcon from '../icons/FilterIcon';
import { documentsTableHeaders } from '../../constants/strings';

export default function DocumentsTable({ data }) {
    const getStatusStyle = (status) => {
        const normalizedStatus = status.toLowerCase();
        if (normalizedStatus === 'approved') {
            return {
                className: 'bg-[#34C759]/10 text-[#34C759] w-[77px]',
            };
        } else if (normalizedStatus === 'pending review') {
            return {
                className: 'bg-[#FFCC00]/10 text-[#FFCC00] w-[115px]',
            };
        }
        return {
            className: 'bg-gray-100 text-gray-500 w-auto',
        };
    };

    return (
        <Card className="!p-6 overflow-x-auto w-full max-w-[calc(100vw-3rem)] lg:max-w-full">
            <table className="w-full min-w-[800px]">
                <thead>
                    <tr className="bg-[#F5F8FB] rounded-[10px]">
                        {documentsTableHeaders.map((header, index) => (
                            <th
                                key={index}
                                className={`py-3 px-4 font-cairo font-normal text-[12px] leading-[22px] text-primary tracking-[0.02em] capitalize ${index === 0 ? 'rounded-l-[10px]' : ''} ${index === documentsTableHeaders.length - 1 ? 'rounded-r-[10px]' : ''}`}
                            >
                                <div className={`flex items-center gap-2 ${header === 'Status' ? 'justify-center' : ''}`}>
                                    {header}
                                    <FilterIcon />
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        const statusStyle = getStatusStyle(item.status);
                        return (
                            <tr key={index} className={index !== data.length - 1 ? "border-b border-border" : ""}>
                                <td className="py-4 px-4 font-cairo text-[14px] text-text-dark">{item.documentNumber}</td>
                                <td className="py-4 px-4 font-cairo text-[14px] text-text-dark">{item.documentName}</td>
                                <td className="py-4 px-4 font-cairo text-[14px] text-text-dark">{item.documentLead}</td>
                                <td className="py-4 px-4 font-cairo text-[14px] text-text-dark">{item.documentPreparer}</td>
                                <td className="py-4 px-4 font-cairo text-[14px] text-text-dark">{item.date}</td>
                                <td className="py-4 px-4 font-cairo text-[14px] text-text-dark">{item.dueDate}</td>
                                <td className="py-4 px-4 flex justify-center">
                                    <span className={`flex items-center justify-center h-[30px] rounded-[30px] font-cairo font-normal text-[14px] leading-[20px] capitalize ${statusStyle.className}`}>
                                        {item.status}
                                    </span>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Card>
    );
}

DocumentsTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        documentNumber: PropTypes.string.isRequired,
        documentName: PropTypes.string.isRequired,
        documentLead: PropTypes.string.isRequired,
        documentPreparer: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        dueDate: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
    })).isRequired,
};
