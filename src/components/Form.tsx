import { UploadOutlined } from '@ant-design/icons'
import { Button, Col, Form, Input, Select, Typography, Upload } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { DefaultOptionType } from 'antd/es/select'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { validateMessages } from '../utils/formRules'
import AppCol from './AppCol'
import AppRow from './AppRow'

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

	// Create a test FormData object
	const formData = new FormData()
	formData.append('key1', 'value1')
	formData.append('key2', 'value2')

	console.log('This is formData', formData)

	// Display the key/value pairs
	for (var pair of formData.entries()) {
		console.log(pair[0] + ', ' + pair[1])
	}
	// let formData = new FormData()
	// formData.append('key1', 'value1')
	// formData.append('key2', 'value2')
	// const i = formData.getAll('key')
	// console.log('This is formData', formData)
	// console.log('This is i', i)

	// let formaData = new FormData()
	// formaData.append('ddasdf', 'asdf')

	// for (let key in values) {
	// 	console.log('This is key', key)
	// 	// formaData.append(key, values[key])
	// 	formaData.append(key, 'as')
	// }
	// formaData.append('asdf', 'as')

	// console.log('This is formaData', formaData)

	// if
}

const normFile = (e: any) => {
	console.log('This is e', e)
	if (Array.isArray(e)) {
		return e
	}
	return e?.fileList
	// return 'fuck'
}

const handleUplaod = (e: React.ChangeEvent<HTMLInputElement>) => {
	console.log('This is e.target.files', e.target.files)
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
					<Form.Item label="Last name" name="lastName" rules={[]}>
						<Input placeholder="Smith" />
					</Form.Item>
				</AppCol>
			</AppRow>
			<AppRow>
				<AppCol>
					<Form.Item
						label="Email"
						name="email"
						rules={[{ message: 'Please type a valid emai.', type: 'email' }]}
					>
						<Input placeholder="Jhon.Smith@gmail.com" />
					</Form.Item>
				</AppCol>
				<AppCol>
					<Form.Item label="Phone" name="phone" rules={[]}>
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
						name="coverLater"
						label="Cover later"
						valuePropName="fileList"
						getValueFromEvent={normFile}
					>
						<Upload
							name="coverlateer"
							listType="text"
							maxCount={1}
							beforeUpload={() => false}
						>
							<Button icon={<UploadOutlined />}>Click to upload</Button>
						</Upload>
					</Form.Item>
				</AppCol>
				<AppCol>
					<Form.Item
						name="resume"
						label="Resume"
						valuePropName="fileList"
						getValueFromEvent={normFile}
					>
						<Upload name="logo" listType="text" maxCount={1} beforeUpload={() => false}>
							<Button icon={<UploadOutlined />}>Click to upload</Button>
						</Upload>
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
				<Col span={24}>
					<Typography.Paragraph>
						We strive to be the best workplace for digital talent. That's why we embrace
						a remote-friendly way of working. At home, abroad or at our offices, you
						decide where and when you want to work. Surround yourself with a bunch of
						talented people at our studios, enjoy the work from the comfort of your own
						home or mix it up. It's up to you.
					</Typography.Paragraph>
					<Form.Item name="referencedBy" label="Which office do you live closest to? ">
						<Select
							// onChange={handleChange}
							options={offices}
							placeholder={offices[0].label}
						/>
					</Form.Item>
				</Col>
			</AppRow>

			<AppRow>
				<AppCol>
					<Form.Item
						name="referencedBy"
						label="If a current employee at In The Pocket referred you, please list their name."
					>
						<Input placeholder="Greg Miller" />
					</Form.Item>
				</AppCol>
				<AppCol>
					<Form.Item name="stayInformed" label="How did you hear about this job? ">
						<Select
							// onChange={handleChange}
							options={heardFrom}
							placeholder={heardFrom[0].label}
						/>
					</Form.Item>
				</AppCol>
			</AppRow>
			<AppRow>
				<AppCol>
					<Form.Item
						name="question_37812807"
						label="Do you want to stay informed about our events? "
					>
						<Select options={yesOrNo} placeholder={yesOrNo[0].label} />
					</Form.Item>
				</AppCol>
			</AppRow>

			<Button htmlType="submit" type="primary" form="jobForm">
				Submit
			</Button>
		</Form>
	)
}

const heardFrom: DefaultOptionType[] = [
	{ value: '122207354', label: 'In The Pocket Employee' },
	{ value: '122207355', label: 'Word of mouth' },
	{ value: '122207356', label: 'Google search' },
	{ value: '122207357', label: 'Indeed' },
	{ value: '122207358', label: 'Linkedin' },
	{ value: '122207359', label: 'School' },
	{ value: '122207360', label: 'Instagram' },
	{ value: '122207361', label: 'Facebook' },
	{ value: '122207362', label: 'NXT.UP' },
	{ value: '122207363', label: 'Studio Shift' },
	{ value: '122207364', label: 'Meet-up' },
	{ value: '122207365', label: 'Other' },
]

const offices: DefaultOptionType[] = [
	{ value: '122207350', label: 'Ghent' },
	{ value: '122207351', label: 'Leuven' },
	{ value: '122207352', label: 'Antwerp' },
	{ value: '126322157', label: 'Bucharest' },
	{ value: '126322215', label: 'Lisbon' },
	{ value: '126322273', label: 'I prefer to work remote' },
]

const yesOrNo: DefaultOptionType[] = [
	{ value: 1, label: 'Yes' },
	{ value: 0, label: 'No' },
]

export default JobForm
