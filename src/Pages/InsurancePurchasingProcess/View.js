import React from 'react';
import Style from './Style.module.scss';
import PropTypes from 'prop-types';
import {INSURANCE_PURCHASING_STAGE_ID_TO_TEXT} from '../../Constant';
import Table from 'antd/lib/table';
import ClickCopy from '../../Components/ClickCopy';
import message from 'antd/lib/message';
import Tooltip from 'antd/lib/tooltip';

function InsurancePurchasingProcess(props)
{
    const {insurancePurchasingInfoList, insurancePurchasingInfoId: onlyInsurancePurchasingInfoId} = props;

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
            title: '保险类型',
            dataIndex: 'insuranceType',
            key: 'insuranceType',
            align: 'center',
            sorter: (a, b) => a.insuranceType.localeCompare(b.insuranceType),
        },
        {
            title: '投保时间',
            dataIndex: 'insurancePurchasingTime',
            key: 'insurancePurchasingTime',
            align: 'center',
        },
        {
            title: '保期',
            dataIndex: 'insurancePeriod',
            key: 'insurancePeriod',
            align: 'center',
        },
        {
            title: '投保金额',
            dataIndex: 'insurancePrice',
            key: 'insurancePrice',
            align: 'center',
            render: text => `${text} 元`,
            sorter: (a, b) => a.insurancePrice - b.insurancePrice,
        },
        {
            title: '投保阶段',
            dataIndex: 'insurancePurchasingStage',
            key: 'insurancePurchasingStage',
            align: 'center',
            render: text => INSURANCE_PURCHASING_STAGE_ID_TO_TEXT[text],
            sorter: (a, b) => a.insurancePurchasingStage - b.insurancePurchasingStage,
        },
    ];

    const dataSource = [];
    insurancePurchasingInfoList.forEach(insurancePurchasingInfo =>
    {
        const {
            insurancePurchasingInfoId,
            name,
            age,
            isMale,
            healthState,
            publicKey,
            insuranceType,
            insurancePurchasingTime,
            insurancePeriod,
            insurancePrice,
            insurancePurchasingStage,
        } = insurancePurchasingInfo;

        if (onlyInsurancePurchasingInfoId && insurancePurchasingInfoId === onlyInsurancePurchasingInfoId)
        {
            dataSource.push({
                key: insurancePurchasingInfoId,
                insurancePurchasingInfoId,
                name,
                age,
                isMale,
                healthState,
                publicKey,
                insuranceType,
                insurancePurchasingTime,
                insurancePeriod,
                insurancePrice,
                insurancePurchasingStage,
            });
        }
    });

    return (
        <div className={Style.InsurancePurchasingProcess}>
            <div className={Style.tableWrapper}>
                <Table dataSource={dataSource}
                       columns={columns}
                       className={Style.processTable}
                       rowClassName={Style.row}
                       pagination={{
                           hideOnSinglePage: true,
                           pageSize: 10,
                       }} />
            </div>
        </div>
    );
}

InsurancePurchasingProcess.propTypes = {
    insurancePurchasingInfoList: PropTypes.array.isRequired,
    insurancePurchasingInfoId: PropTypes.string,    // 如果这个 Prop 存在，那么只显示这一条信息且隐藏选择器
};

export default InsurancePurchasingProcess;