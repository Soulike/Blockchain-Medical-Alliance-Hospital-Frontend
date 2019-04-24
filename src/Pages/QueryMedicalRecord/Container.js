import React from 'react';
import QueryMedicalRecord from './View';
import Api from '../../Api';
import {REGEX} from '../../Config';
import message from 'antd/lib/message';

class QueryMedicalRecordContainer extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            publicKey: '',
            medicalRecordList: [],
        };
    }

    onPublicKeyInputChange = e =>
    {
        this.setState({
            publicKey: e.target.value,
        });
    };

    onQueryButtonClick = async () =>
    {
        const {publicKey} = this.state;
        if (!REGEX.PUBLIC_KEY.test(publicKey))
        {
            message.warning('公钥填写不正确');
        }
        else
        {
            const medicalRecordListWrapper = await Api.sendPostQueryMedicalRecordRequestAsync(publicKey);
            if (medicalRecordListWrapper)
            {
                this.setState({
                    medicalRecordList: medicalRecordListWrapper['medicalRecordList'],
                });
            }
        }
    };

    render()
    {
        const {publicKey, medicalRecordList} = this.state;
        const dataSource = [];
        medicalRecordList.forEach((medicalRecord, i) =>
        {
            dataSource.push({
                key: i,
                ...medicalRecord,
            });
        });
        return <QueryMedicalRecord publicKey={publicKey}
                                   onPublicKeyInputChange={this.onPublicKeyInputChange}
                                   onQueryButtonClick={this.onQueryButtonClick}
                                   dataSource={dataSource} />;
    }
}

export default QueryMedicalRecordContainer;