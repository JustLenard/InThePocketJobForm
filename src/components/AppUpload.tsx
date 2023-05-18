import React, { useState } from 'react'
import { UploadOutlined } from '@ant-design/icons'
import { Button, message, Upload } from 'antd'
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface'

const AppUpload: React.FC = () => {
	const [fileList, setFileList] = useState<UploadFile | null>(null)
	const [uploading, setUploading] = useState(false)

	// const handleUpload = () => {
	// 	const formData = new FormData()
	// 	fileList.forEach((file) => {
	// 		formData.append('files[]', file as RcFile)
	// 	})
	// 	setUploading(true)
	// 	// You can use any AJAX library you like
	// 	fetch('https://www.mocky.io/v2/5cc8019d300000980a055e76', {
	// 		method: 'POST',
	// 		body: formData,
	// 	})
	// 		.then((res) => res.json())
	// 		.then(() => {
	// 			setFileList([])
	// 			message.success('upload successfully.')
	// 		})
	// 		.catch(() => {
	// 			message.error('upload failed.')
	// 		})
	// 		.finally(() => {
	// 			setUploading(false)
	// 		})
	// }

	const props: UploadProps = {
		onRemove: () => {
			setFileList(null)
		},
		beforeUpload: (file) => {
			setFileList(file)
			return false
		},
	}

	return (
		// <Upload {...props} maxCount={1}>
		// 	<Button icon={<UploadOutlined />}>Select File</Button>
		// </Upload>

		<Upload name="logo" listType="text" beforeUpload={() => false}>
			<Button icon={<UploadOutlined />}>Click to upload</Button>
		</Upload>
	)
}

export default AppUpload
