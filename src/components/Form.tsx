import { InboxOutlined, UploadOutlined } from '@ant-design/icons'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Button, Form, Input, Upload, UploadProps, message } from 'antd'
import { Rule } from 'antd/es/form'
import { useForm } from 'antd/es/form/Form'
import AppCol from './AppCol'
import AppRow from './AppRow'
import { validateMessages } from '../utils/formRules'
import AppUpload from './AppUpload'

interface JobForm {
	firtName: string
	lastName: string
	email: string
	phone: string
	resume: File
	coverLater: File
	linkedInProfile?: string
	website?: string
	referred?: string
	stayInformed?: string
	closestCity: string
	heardFrom?: string
}

const handleSubmit = (values: JobForm) => {
	console.log('This is values', values)
}

const normFile = (e: any) => {
	console.log('Upload event:', e)
	if (Array.isArray(e)) {
		return e
	}
	return e?.fileList
}

const JobForm: React.FC = () => {
	const [form] = useForm<JobForm>()

	return (
		<Form
			form={form}
			layout="vertical"
			onFinish={(values) => handleSubmit(values)}
			name="jobForm"
			validateMessages={validateMessages}
		>
			<AppRow>
				<AppCol>
					<Form.Item name="firstName" label="First Name">
						<Input placeholder="Jhon" />
					</Form.Item>
				</AppCol>
				<AppCol>
					<Form.Item label="Last name" name="lastName" rules={[{ required: true }]}>
						<Input placeholder="Smith" />
					</Form.Item>
				</AppCol>
			</AppRow>
			<AppRow>
				<AppCol>
					<Form.Item
						label="Email"
						name="email"
						rules={[
							{ required: true, message: 'Please type a valid emai.', type: 'email' },
						]}
					>
						<Input placeholder="Jhon.Smith@gmail.com" />
					</Form.Item>
				</AppCol>
				<AppCol>
					<Form.Item label="Phone" name="phone" rules={[{ required: true }]}>
						<PhoneInput
							inputStyle={{
								width: '100%',
							}}
							inputClass="ant-input"
							country={'us'}
						/>
					</Form.Item>
				</AppCol>
			</AppRow>
			<AppRow>
				<AppCol>
					<Form.Item
						name="upload"
						label="Upload"
						valuePropName="fileList"
						getValueFromEvent={normFile}
					>
						{/* <Upload {...uplaodProps} accept="askf" name="logo" listType="text">
							<Button icon={<UploadOutlined />}>Click to upload</Button>
						</Upload> */}
						<AppUpload name="le" />
					</Form.Item>
				</AppCol>
				<AppCol>
					<Form.Item label="Cover Later">
						<Input placeholder=".doc, .docx or .pdf" />
					</Form.Item>
				</AppCol>
			</AppRow>
			<AppRow>
				<AppCol>
					<Form.Item label="LinkedIn Profile (optional)">
						<Input placeholder="https://www.linkedin.com/in/vitalie-cociug-39a80a145/" />
					</Form.Item>
				</AppCol>
				<AppCol>
					<Form.Item label="Website">
						<Input placeholder="www.yourWebsite.com" />
					</Form.Item>
				</AppCol>
			</AppRow>
			<AppRow>
				<AppCol>
					<Form.Item label="If a current employee at In The Pocket referred you, please list their name.">
						<Input placeholder="Greg Miller" type="file" />
					</Form.Item>
				</AppCol>
				<AppCol>
					<Form.Item label="Do you want to stay informed about our events? ">
						<Input placeholder="Smith" />
					</Form.Item>
				</AppCol>
			</AppRow>

			<Button htmlType="submit" type="primary" form="jobForm">
				Submit
			</Button>
		</Form>
	)
}

export default JobForm
