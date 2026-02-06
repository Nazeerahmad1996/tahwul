import PropTypes from 'prop-types';
import { Fragment } from 'react';
import Card from '@/components/common/Card';
import CardTitle from '@/components/common/CardTitle';
import { cardTitles } from '@/constants';

import image1 from '@/assets/images/image1.jpg';
import image2 from '@/assets/images/image2.jpg';
import image3 from '@/assets/images/image3.jpg';

const performerImages = [image1, image2, image3];

export default function TopPerformers({ data }) {
    return (
        <Card>
            <CardTitle>{cardTitles.topPerformers}</CardTitle>

            <div className="flex flex-col mt-4 flex-1">
                {data.map((performer, index) => (
                    <Fragment key={index}>
                        <div className="flex items-center justify-between py-2">
                            <div className="flex items-center gap-3">
                                <img
                                    src={performerImages[index]}
                                    alt={performer.name}
                                    className="w-10 h-10 rounded-full object-cover border border-border"
                                />

                                <div className="flex flex-col">
                                    <span className="font-cairo font-medium text-[14px] leading-[20px] text-text-dark capitalize">
                                        {performer.name}
                                    </span>
                                    <span className="font-cairo font-medium text-[12px] leading-[18px] text-text-muted capitalize">
                                        {performer.role}
                                    </span>
                                </div>
                            </div>

                            <span className="font-cairo font-bold text-[14px] leading-[20px] text-text-dark">
                                {performer.percentage}%
                            </span>
                        </div>

                        {index < data.length - 1 && (
                            <div className="w-full border-t border-border m-1"></div>
                        )}
                    </Fragment>
                ))}
            </div>
        </Card>
    );
}
