import React from 'react';
import SubmitMedicalRecord from './View';
import moment from 'moment';
import {PAGE_ID_TO_ROUTE, REGEX, REQUIRE_LOGIN_PAGE_ID} from '../../Config';
import message from 'antd/lib/message';
import Api from '../../Api';
import {browserHistory} from 'react-router';

class SubmitMedicalRecordContainer extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            publicKey: '',
            medicalRecordList: [],
            dataSource: [],
        };

    }

    onPublicKeyInputChange = e =>
    {
        this.setState({
            publicKey: e.target.value,
        });
    };

    onTreatmentDateChangeFactory = rowIndex =>
    {
        const {medicalRecordList} = this.state;
        return date =>
        {
            if (date)
            {
                medicalRecordList[rowIndex].treatmentDate = date.format('YYYY-MM-DD');
            }
            else
            {
                medicalRecordList[rowIndex].treatmentDate = moment().format('YYYY-MM-DD');
            }
            this.forceUpdate();
        };
    };

    onTreatmentHospitalInputChangeFactory = rowIndex =>
    {
        const {medicalRecordList} = this.state;
        return e =>
        {
            medicalRecordList[rowIndex].treatmentHospital = e.target.value;
            this.forceUpdate();
        };
    };

    onTreatmentDoctorInputChangeFactory = rowIndex =>
    {
        const {medicalRecordList} = this.state;
        return e =>
        {
            medicalRecordList[rowIndex].doctor = e.target.value;
            this.forceUpdate();
        };
    };

    onMedicalRecordContentInputChangeFactory = rowIndex =>
    {
        const {medicalRecordList} = this.state;
        return e =>
        {
            medicalRecordList[rowIndex].medicalRecordContent = e.target.value;
            this.forceUpdate();
        };
    };

    onSubmit = async () =>
    {
        const {publicKey, medicalRecordList} = this.state;
        let submittable = true;
        if (!REGEX.PUBLIC_KEY.test(publicKey))
        {
            submittable = false;
            message.warning('患者公钥填写不正确');
        }
        else if (medicalRecordList.length === 0)
        {
            submittable = false;
            message.warning('病历列表不能为空');
        }
        else
        {
            medicalRecordList.forEach((medicalRecord, i) =>
            {
                const {treatmentHospital, doctor, medicalRecordContent} = medicalRecord;
                if (!REGEX.TREATMENT_HOSPITAL.test(treatmentHospital))
                {
                    submittable = false;
                    message.warning(`第 ${i + 1} 行的接受治疗所在医院填写不正确`);
                }
                else if (!REGEX.DOCTOR.test(doctor))
                {
                    submittable = false;
                    message.warning(`第 ${i + 1} 行的治疗医生填写不正确`);
                }
                else if (!REGEX.MEDICAL_RECORD_CONTENT.test(medicalRecordContent))
                {
                    submittable = false;
                    message.warning(`第 ${i + 1} 行的病历内容填写不正确`);
                }
            });
        }

        if (submittable)
        {
            const requestIsSuccessful = await Api.sendPostSubmitMedicalRecordRequestAsync(publicKey, medicalRecordList);
            if (requestIsSuccessful)
            {
                browserHistory.push(PAGE_ID_TO_ROUTE[REQUIRE_LOGIN_PAGE_ID.HOSPITAL_DIRECT_PAYMENT_PROCESS]);
            }
        }

    };

    onAddRowButtonClick = () =>
    {
        const {dataSource, medicalRecordList} = this.state;
        dataSource.push({key: medicalRecordList.length});
        medicalRecordList[medicalRecordList.length] = {
            treatmentDate: moment().format('YYYY-MM-DD'),
            treatmentHospital: '',
            doctor: '',
            medicalRecordContent: '',
        };
        this.forceUpdate();
    };

    render()
    {
        const {dataSource, publicKey, medicalRecordList} = this.state;
        return <SubmitMedicalRecord
            dataSource={dataSource}
            publicKey={publicKey}
            onPublicKeyInputChange={this.onPublicKeyInputChange}
            onSubmit={this.onSubmit}
            onAddRowButtonClick={this.onAddRowButtonClick}
            medicalRecordList={medicalRecordList}
            onTreatmentDateChangeFactory={this.onTreatmentDateChangeFactory}
            onMedicalRecordContentInputChangeFactory={this.onMedicalRecordContentInputChangeFactory}
            onTreatmentDoctorInputChangeFactory={this.onTreatmentDoctorInputChangeFactory}
            onTreatmentHospitalInputChangeFactory={this.onTreatmentHospitalInputChangeFactory} />;
    }
}

export default SubmitMedicalRecordContainer;