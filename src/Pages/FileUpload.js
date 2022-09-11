import FileUploadComponent from "../Components/FileUploadComponent";
import { Form, Button, message, Progress, Row, Col } from 'antd';
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { uploadFile, uploadBunch, getImages } from "../Common/Utils/UploadImageDB";


const FileUpload = () => {
    const navigate = useNavigate();
    const [uploading, setUploading] = useState(false);
    const [beforeImage, setBeforeImage] = useState(null);
    const [afterImage, setAfterImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [beforeImageProgress, setBeforeImageProgress] = useState(0);
    const [afterImageProgress, setAfterImageProgress] = useState(0);
    const [singleImage, setSingleImage] = useState(null);
    const [singleImageProgress, setSingleImageProgress] = useState(0);
    const { logout } = useAuth();

    useEffect(() => {
        if((beforeImageProgress===100 || afterImageProgress===100 || singleImageProgress===100) && !uploading)
        {
            setTimeout(() => {
                setAfterImageProgress(0);
                setBeforeImageProgress(0);
                setSingleImageProgress(0);
                setProgress(0);
            }, 3000)
        }
    }, [progress,singleImageProgress]);

    const handleUpload = async () => {
        setUploading(true);
        setBeforeImageProgress(0);
        setAfterImageProgress(0);
        setProgress(0);
        const beforeImageId = await uploadFile(beforeImage, setBeforeImageProgress, "beforeafterimages")
        const afterImageId = await uploadFile(afterImage, setAfterImageProgress, "beforeafterimages");
        uploadBunch(beforeImageId, afterImageId, setProgress);

        setUploading(false);
        // getImages();
    };

    const handleSingleUpload = async () => {
        setUploading(true);
        setSingleImageProgress(0);
        const singleImageId = await uploadFile(singleImage, setSingleImageProgress, "singleimages")
        setUploading(false);
    }

    const handleLogout = async () => {
        try {
            await logout();
            navigate("/login");
        }
        catch {
            message.error("Failed to Logout.");
        }
    }

    return (
        <div>
            <Row justify="space-around" align="middle">
                <Col span={8}>
                    <div style={{ paddingRight: "100px" }}>
                        <Form style={{
                            paddingTop: "100px",
                            margin: "10px",
                        }}>
                            <Form.Item label="Before Image" name="beforeImage">
                                <FileUploadComponent file={beforeImage} setFile={setBeforeImage}></FileUploadComponent>
                            </Form.Item>
                            <Form.Item>
                                <Progress percent={beforeImageProgress} />
                            </Form.Item>
                            <Form.Item label="After Image" name="afterImage">
                                <FileUploadComponent file={afterImage} setFile={setAfterImage}></FileUploadComponent>
                            </Form.Item>
                            <Form.Item>
                                <Progress percent={afterImageProgress} />
                            </Form.Item>
                            <Form.Item
                                wrapperCol={{
                                    offset: 4,
                                    span: 16,
                                }}
                            >
                                <Button
                                    type="primary"
                                    onClick={handleUpload}
                                    disabled={!afterImage || !beforeImage}
                                    loading={uploading}
                                    style={{
                                        marginTop: 16,
                                    }}
                                >
                                    {uploading ? 'Uploading' : 'Start Upload'}
                                </Button>
                                <Progress percent={progress} />
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
                <Col span={8}>
                    <Form
                        style={{
                            paddingTop: "100px",
                            margin: "10px",
                        }}
                    >
                        <Form.Item label="Single Image" name="singleImage">
                            <FileUploadComponent file={singleImage} setFile={setSingleImage}></FileUploadComponent>
                        </Form.Item>
                        <Form.Item>
                            <Progress percent={singleImageProgress} />
                        </Form.Item>
                        <Button
                            type="primary"
                            onClick={handleSingleUpload}
                            disabled={!singleImage}
                            loading={uploading}
                            style={{
                                marginTop: 16,
                            }}
                        >
                            {uploading ? 'Uploading' : 'Start Upload'}
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Row justify="space-around" align="middle">
                <Button onClick={handleLogout} style={{ float: "right", marginRight: "10px" }}>Log Out</Button>
            </Row>
        </div>
    );
}



export default FileUpload;