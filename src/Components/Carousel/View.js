import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'antd/lib/carousel/index';
import Style from './Style.module.scss';
import {Link} from 'react-router';
import {CAROUSEL_IMAGE, PAGE_ID_TO_ROUTE, REQUIRE_LOGIN_PAGE_ID} from '../../Config';
import Button from 'antd/lib/button';

class CarouselContainer extends React.Component
{
    render()
    {
        const {className, shouldShowInsurancePublicationButton} = this.props;
        return (
            <div className={Style.CarouselContainer}>
                <Carousel className={className}
                          autoplay={true}
                          dots={false}
                          effect={'fade'}
                          autoplaySpeed={10 * 1000}
                          speed={3 * 1000}>
                    {
                        CAROUSEL_IMAGE.map(imageSrc => (
                            <div key={imageSrc}>
                                <div className={`${className} ${Style.slide}`}
                                     style={{background: `url("${imageSrc}") no-repeat center`}} />
                            </div>))
                    }
                </Carousel>
                {
                    shouldShowInsurancePublicationButton ?
                        <Link onlyActiveOnIndex={false}
                              to={PAGE_ID_TO_ROUTE[REQUIRE_LOGIN_PAGE_ID.INSURANCE_COMPANY_INSURANCE_PUBLICATION]}>
                            <Button htmlType={'button'} type={'primary'} className={Style.insurancePublicationButton}>
                                发布保险
                            </Button>
                        </Link> : null
                }
            </div>
        );
    }
}

CarouselContainer.propTypes = {
    className: PropTypes.string,
    shouldShowInsurancePublicationButton: PropTypes.bool.isRequired,
};

export default CarouselContainer;