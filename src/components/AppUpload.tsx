import React from 'react'
import { UploadOutlined } from '@ant-design/icons'
import type { UploadProps } from 'antd'
import { Button, message, Upload } from 'antd'
import { RcFile } from 'antd/es/upload'

const beforeUpload = (file: RcFile) => {
	const isJpgOrPng = file.type === 'pdf' || file.type === 'image/png'
	if (!isJpgOrPng) {
		message.error('You can only upload JPG/PNG file!')
	}
	const isLt2M = file.size / 1024 / 1024 < 2
	if (!isLt2M) {
		message.error('Image must smaller than 2MB!')
	}
	return isJpgOrPng && isLt2M
}

const props: UploadProps = {
	accept: '.jpg, .jpeg, .png',
	beforeUpload,
	action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
	headers: {
		authorization: 'authorization-text',
	},
	onChange(info) {
		if (info.file.status !== 'uploading') {
			console.log(info.file, info.fileList)
		}
		if (info.file.status === 'done') {
			message.success(`${info.file.name} file uploaded successfully`)
		} else if (info.file.status === 'error') {
			message.error(`${info.file.name} file upload failed.`)
		}
	},
}

interface Props {
	name: string
}

const AppUpload: React.FC<Props> = ({ name }) => (
	<Upload {...props} name={name}>
		<Button icon={<UploadOutlined />}>Click to Upload</Button>
	</Upload>
)

export default AppUpload
