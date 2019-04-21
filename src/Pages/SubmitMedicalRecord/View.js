import React from 'react';
import Style from './Style.module.scss';
import Input from 'antd/lib/input';
import Table from 'antd/lib/table';
import PropTypes from 'prop-types';
import Button from 'antd/lib/button';
import DatePicker from 'antd/lib/date-picker';
import moment from 'moment';

function SubmitMedicalRecord(props)
{
    const {
        dataSource,
        publicKey,
        onPublicKeyInputChange,
        onSubmit,
        onAddRowButtonClick,
        medicalRecordList,
        onTreatmentDateChangeFactory,
        onTreatmentHospitalInputChangeFactory,
        onDoctorInputChangeFactory,
        onMedicalRecordContentInputChangeFactory,
    } = props;
    const columns = [
        {
            title: '接受治疗时间',
            dataIndex: 'treatmentDate',
            key: 'treatmentDate',
            render: (text, record, index) =>
            {
                return <DatePicker onChange={onTreatmentDateChangeFactory(index)}
                                   value={moment(medicalRecordList[index].treatmentDate, 'YYYY-MM-DD')} />;
            },
        },
        {
            title: '接受治疗所在医院',
            dataIndex: 'treatmentHospital',
            key: 'treatmentHospital',
            render: (text, record, index) =>
            {
                return <Input onChange={onTreatmentHospitalInputChangeFactory(index)}
                              value={medicalRecordList[index].treatmentHospital} />;
            },
        },
        {
            title: '治疗医生',
            dataIndex: 'doctor',
            key: 'doctor',
            render: (text, record, index) =>
            {
                return <Input onChange={onDoctorInputChangeFactory(index)}
                              value={medicalRecordList[index].doctor} />;
            },
        },
        {
            title: '内容',
            dataIndex: 'medicalRecordContent',
            key: 'medicalRecordContent',
            render: (text, record, index) =>
            {
                return <Input.TextArea className={Style.medicalRecordContent}
                                       onChange={onMedicalRecordContentInputChangeFactory(index)}
                                       value={medicalRecordList[index].medicalRecordContent} />
                    ;
            },
        }];
    return (
        <div className={Style.SubmitMedicalRecord}>
            <div className={Style.content}>
                <header className={Style.title}>提交病历</header>
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
                <div className={Style.tableWrapper}>
                    <Table columns={columns} dataSource={dataSource} pagination={false} />
                </div>
                <div className={Style.buttonWrapper}>
                    <Button type={'primary'} onClick={onSubmit}>提交病历</Button>
                    <Button onClick={onAddRowButtonClick}>添加一行</Button>
                </div>
            </div>
        </div>
    );
}

SubmitMedicalRecord.propTypes = {
    dataSource: PropTypes.array.isRequired,
    publicKey: PropTypes.string.isRequired,
    onPublicKeyInputChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onAddRowButtonClick: PropTypes.func.isRequired,
    medicalRecordList: PropTypes.array.isRequired,
    onTreatmentDateChangeFactory: PropTypes.func.isRequired,
    onTreatmentHospitalInputChangeFactory: PropTypes.func.isRequired,
    onDoctorInputChangeFactory: PropTypes.func.isRequired,
    onMedicalRecordContentInputChangeFactory: PropTypes.func.isRequired,
};

export default SubmitMedicalRecord;