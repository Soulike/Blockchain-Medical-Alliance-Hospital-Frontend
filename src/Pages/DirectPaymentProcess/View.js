import React from 'react';
import Style from './Style.module.scss';
import DirectPaymentProcessSelector from './Components/DirectPaymentProcessSelector';
import {DIRECT_PAYMENT_STAGE_ID, DIRECT_PAYMENT_STAGE_ID_TO_TEXT} from '../../Constant';
/*import DiagnosticResultModal from './Components/DiagnosticResultModal';
import MedicalDescriptionModal from './Components/MedicalDescriptionModal';*/
import PropTypes from 'prop-types';
import ClickCopy from '../../Components/ClickCopy';
import message from 'antd/lib/message';
import Tooltip from 'antd/lib/tooltip';
import Button from 'antd/lib/button';
import Table from 'antd/lib/table';
import CarouselContainer from '../../Components/Carousel';

function DirectPaymentProcess(props)
{
    const {
        ageRange: [minAge, maxAge],
        stageId,
        directPaymentInfoList,
        //currentActiveDiagnosticResultInModal,
        //currentActiveMedicalDescriptionInModal,
        //onDiagnosticResultButtonClick,
        onDirectPaymentInfoClick,
        onInsurancePurchasingInfoButtonClick,
        //onMedicalDescriptionButtonClick,
        hasGotData,
    } = props;

    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            align: 'center',
            sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
            align: 'center',
            sorter: (a, b) => a.age - b.age,
        },
        {
            title: '性别',
            dataIndex: 'isMale',
            key: 'isMale',
            align: 'center',
            sorter: (a, b) => a.isMale - b.isMale,
            render: text => text === 0 ? '女' : '男',
        },
        {
            title: '健康状况',
            dataIndex: 'healthState',
            key: 'healthState',
            align: 'center',
        },
        {
            title: '公钥',
            dataIndex: 'publicKey',
            key: 'publicKey',
            align: 'center',
            render: text =>
                <ClickCopy
                    copyText={text}
                    onCopySuccess={() =>
                    {
                        message.success('复制公钥成功');
                    }}
                    onCopyError={() =>
                    {
                        message.error('复制公钥失败');
                    }}>
                    <Tooltip title={'点击复制公钥'}>
                        <div className={Style.publicKey}>{text}</div>
                    </Tooltip>
                </ClickCopy>,
        },
        {
            title: '直付金额',
            dataIndex: 'directPaymentMoneyAmount',
            key: 'directPaymentMoneyAmount',
            align: 'center',
            render: text => `${text} 元`,
            sorter: (a, b) => a.insurancePrice - b.insurancePrice,
        },
        /*{
            title: '诊断结果',
            align: 'center',
            dataIndex: 'diagnosticResult',
            key: 'diagnosticResult',
            render: text => <Button htmlType={'button'}
                                    type={'primary'}
                                    onClick={onDiagnosticResultButtonClick(text)}>查看</Button>,
        },
        {
            title: '医疗说明',
            align: 'center',
            dataIndex: 'medicalDescription',
            key: 'medicalDescription',
            render: text => <Button htmlType={'button'}
                                    type={'primary'}
                                    onClick={onMedicalDescriptionButtonClick(text)}>查看</Button>,
        },*/
        {
            title: '保险信息',
            align: 'center',
            dataIndex: 'insurancePurchasingInfoId',
            key: 'insurancePurchasingInfoId',
            render: text => <Button htmlType={'button'}
                                    type={'primary'}
                                    onClick={onInsurancePurchasingInfoButtonClick(text)}>查看</Button>,
        },
        {
            title: '直付阶段',
            dataIndex: 'directPaymentStage',
            key: 'directPaymentStage',
            align: 'center',
            render: text => DIRECT_PAYMENT_STAGE_ID_TO_TEXT[text],
            sorter: (a, b) => a.directPaymentStage - b.directPaymentStage,
        },

    ];

    const dataSource = [];

    directPaymentInfoList.forEach(directPaymentInfo =>
    {
        const {
            directPaymentInfoId,
            name,
            age,
            isMale,
            healthState,
            publicKey,
            directPaymentMoneyAmount,
            diagnosticResult,
            medicalDescription,
            directPaymentStage,
            insurancePurchasingInfoId,
        } = directPaymentInfo;

        if (age >= minAge && age <= maxAge && (directPaymentStage === stageId || stageId === DIRECT_PAYMENT_STAGE_ID.DEVELOPMENT.ALL_STAGES))
        {
            dataSource.push({
                key: directPaymentInfoId,
                directPaymentInfoId,
                name,
                age,
                isMale,
                healthState,
                publicKey,
                directPaymentMoneyAmount,
                diagnosticResult,
                medicalDescription,
                directPaymentStage,
                insurancePurchasingInfoId,
            });
        }

    });

    return (
        <div className={Style.DirectPaymentProcess}>
            <CarouselContainer shouldShowInsurancePublicationButton={false} className={Style.carousel} />
            <div className={Style.directPaymentProcessContent}>
                <DirectPaymentProcessSelector />
                <div className={Style.tableWrapper}>
                    <Table loading={!hasGotData}
                           dataSource={dataSource}
                           columns={columns}
                           className={Style.processTable}
                           rowClassName={Style.row}
                           onRow={record =>
                           {
                               return {
                                   onClick: () =>
                                   {
                                       onDirectPaymentInfoClick(record.directPaymentInfoId);
                                   },
                               };
                           }}
                           pagination={{
                               hideOnSinglePage: true,
                               pageSize: 10,
                           }} />
                </div>
            </div>
            {/*<DiagnosticResultModal diagnosticResult={currentActiveDiagnosticResultInModal} />
            <MedicalDescriptionModal medicalDescription={currentActiveMedicalDescriptionInModal} />*/}
        </div>
    );
}

DirectPaymentProcess.propTypes = {
    ageRange: PropTypes.arrayOf(PropTypes.number).isRequired,
    stageId: PropTypes.oneOf([...Object.values(DIRECT_PAYMENT_STAGE_ID.DEVELOPMENT), ...Object.values(DIRECT_PAYMENT_STAGE_ID.NORMAL), ...Object.values(DIRECT_PAYMENT_STAGE_ID.DECLINE)]).isRequired,
    directPaymentInfoList: PropTypes.array.isRequired,
    currentActiveDiagnosticResultInModal: PropTypes.node.isRequired,
    currentActiveMedicalDescriptionInModal: PropTypes.node.isRequired,
    onDiagnosticResultButtonClick: PropTypes.func.isRequired,
    onDirectPaymentInfoClick: PropTypes.func.isRequired,
    onInsurancePurchasingInfoButtonClick: PropTypes.func.isRequired,
    onMedicalDescriptionButtonClick: PropTypes.func.isRequired,
    hasGotData: PropTypes.bool,
};

DirectPaymentProcess.defaultProps = {
    hasGotData: true,
};

export default DirectPaymentProcess;