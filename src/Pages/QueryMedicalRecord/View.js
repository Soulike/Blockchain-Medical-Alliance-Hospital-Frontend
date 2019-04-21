import React from 'react';
import Style from './Style.module.scss';
import Input from 'antd/lib/input';
import Table from 'antd/lib/table';
import Button from 'antd/lib/button';
import PropTypes from 'prop-types';

function QueryMedicalRecord(props)
{
    const {
        dataSource,
        publicKey,
        onPublicKeyInputChange,
        onQueryButtonClick,
    } = props;
    const columns = [
        {
            title: '接受治疗时间',
            dataIndex: 'treatmentDate',
            key: 'treatmentDate',
        },
        {
            title: '接受治疗所在医院',
            dataIndex: 'treatmentHospital',
            key: 'treatmentHospital',
        },
        {
            title: '治疗医生',
            dataIndex: 'doctor',
            key: 'doctor',
        },
        {
            title: '内容',
            dataIndex: 'medicalRecordContent',
            key: 'medicalRecordContent',
        }];
    return (
        <div className={Style.QueryMedicalRecord}>
            <div className={Style.content}>
                <header className={Style.title}>查询病历</header>
                <div className={Style.formWrapper}>
                    <label className={Style.inputWrapper}>
                        <span className={Style.label}>患者公钥：</span>
                        <Input className={Style.input}
                               type="text"
                               autoFocus={true}
                               value={publicKey}
                               onChange={onPublicKeyInputChange} />
                    </label>
                </div>
                <div className={Style.buttonWrapper}>
                    <Button type={'primary'} size={'large'} onClick={onQueryButtonClick}>查询</Button>
                </div>
                <div className={Style.tableWrapper}>
                    <Table columns={columns} dataSource={dataSource} pagination={false} />
                </div>
            </div>
        </div>
    );
}

QueryMedicalRecord.propTypes = {
    dataSource: PropTypes.array.isRequired,
    publicKey: PropTypes.string.isRequired,
    onPublicKeyInputChange: PropTypes.func.isRequired,
    onQueryButtonClick: PropTypes.func.isRequired,
};

export default QueryMedicalRecord;