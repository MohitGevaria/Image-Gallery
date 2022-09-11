import { type } from '@testing-library/user-event/dist/type';
import { message } from 'antd';
import AWS from 'aws-sdk'
import { PutObjectRequest, ListObjectsCommand } from 'aws-sdk/clients/s3';
import { v4 as uuidv4 } from 'uuid';

const S3_BUCKET = 'image-gallery-priyank';
const REGION = 'ap-south-1';
const IMAGEURL = "https://image-gallery-priyank.s3.ap-south-1.amazonaws.com/"



AWS.config.update({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY
})

const s3 = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,

})

export const uploadFile = (file, setProgress, folderName) => {
    const uuid = uuidv4();
    const params = {
        ACL: 'public-read',
        Body: file,
        Bucket: S3_BUCKET,
        Key: folderName + "/" + uuid + ".jpg"
    };
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                s3.putObject(params)
                    .on('httpUploadProgress', (evt) => {
                        const progress = Math.round((evt.loaded / evt.total) * 100);
                        setProgress(progress);
                        if (progress == 100) {
                            resolve(uuid);
                        }

                    })
                    .send((err) => {
                        if (err) {
                            reject(err);
                        }
                    })
                return params.Key;

            }, 3000
        );
    });


}


export const uploadBunch = (beforeImageId, afterImageId, setProgress) => {

    const photoBlock = [
        {
            imageId: beforeImageId,
            type: 'jpg',

        },
        {
            imageId: afterImageId,
            type: 'jpg',
        },
    ]
    const blob = new Blob([JSON.stringify(photoBlock)], {
        type: 'application/json'
    });
    s3.upload({
        Key: "pairings/" + beforeImageId + ":" + afterImageId,
        Body: blob,
        ACL: 'public-read',
        type: "json"
    }, function (err, data) {
        if (err) {
            message.error('There was an error', err.message);
        }
    }).on('httpUploadProgress', (evt) => {
        setProgress(Math.round((evt.loaded / evt.total) * 100))
    })
        .send((err) => {
            if (err) message.err(err)
        });
}

export const getImagePairIds = async () => {
    var params = {
        Bucket: S3_BUCKET,
        Key: "pairings"
    }
    s3.getObject(params, function (err, file) {
        const imageArr = [];
        if (file) {
            var str = String.fromCharCode.apply(null, file.Body);
        }
        else {
            message.error("Error", err);
        }
    });
}

export const getBAImages = async () => {
    var params = {
        Bucket: S3_BUCKET,
        Prefix: "pairings/"
    }

    return new Promise((resolve, reject) => {
        setTimeout(
            () => {

                s3.listObjects(params, function (err, idList) {
                    const imageArr = [];
                    if (idList) {
                        idList.Contents.forEach((list) => {
                            let key = list["Key"].replace("pairings/", "");
                            let tempArr = key.split(":")
                            imageArr.push({ "beforeImage": IMAGEURL +"beforeafterimages/"+ tempArr[0] + ".jpg", "afterImage": IMAGEURL +"beforeafterimages/"+ tempArr[1] + ".jpg", "key": key })
                        })
                    }
                    else {
                        reject("Error occured. Could not Get Images.");
                    }
                    resolve(imageArr);
                });

            }, 3000
        );
    });
}

export const getImages = async (prefix) => {
    var params = {
        Bucket: S3_BUCKET,
        Prefix: prefix
    }


    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                s3.listObjects(params, function (err, idList) {
                    const imageArr = [];
                    if (idList) {
                        idList.Contents.forEach((list) => {
                            let key = list["Key"];
                            imageArr.push({ "key": key, "imgUrl": IMAGEURL + key })
                        })
                    }
                    else {
                        reject("Error occured. Could not Get Images.");
                    }
                    resolve(imageArr);
                });
            }, 3000
        );
    });
}


