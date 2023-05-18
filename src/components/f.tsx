import { InboxOutlined, UploadOutlined } from '@ant-design/icons'
import { Button, Form, Space, Upload } from 'antd'
import React from 'react'

const normFile = (e: any) => {
	console.log('Upload event:', e)
	if (Array.isArray(e)) {
		return e
	}
	return e?.fileList
}

const onFinish = (values: any) => {
	console.log('Received values of form: ', values)
}

const App: React.FC = () => (
	<Form name="validate_other" onFinish={onFinish} style={{ maxWidth: 600 }}>
		<Form.Item
			name="upload"
			label="Upload"
			valuePropName="fileList"
			getValueFromEvent={normFile}
			extra="longgggggggggggggggggggggggggggggggggg"
		>
			<Upload name="logo" action="/upload.do" listType="picture">
				<Button icon={<UploadOutlined />}>Click to upload</Button>
			</Upload>
		</Form.Item>

		<Form.Item label="Dragger">
			<Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
				<Upload.Dragger name="files" action="/upload.do">
					<p className="ant-upload-drag-icon">
						<InboxOutlined />
					</p>
					<p className="ant-upload-text">Click or drag file to this area to upload</p>
					<p className="ant-upload-hint">Support for a single or bulk upload.</p>
				</Upload.Dragger>
			</Form.Item>
		</Form.Item>

		<Form.Item wrapperCol={{ span: 12, offset: 6 }}>
			<Space>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
				<Button htmlType="reset">reset</Button>
			</Space>
		</Form.Item>
	</Form>
)

export default App
