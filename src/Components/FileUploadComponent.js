import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';



const FileUploadComponent = ({file, setFile}) => {
    const props = {
        onRemove: (file) => {
            setFile(null);
        },
        beforeUpload: (file) => {
            setFile(file);
            return false;
        },
        file,
        maxCount: 1
    };
    return (
        <Upload {...props}>
            <Button icon={<UploadOutlined />}>Select File</Button>
        </Upload>
    );
};

export default FileUploadComponent;