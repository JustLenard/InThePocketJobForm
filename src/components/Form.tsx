import { Button, Col, Form, Input, InputNumber, Row, Space } from 'antd'
import { useForm } from 'antd/es/form/Form'
import AppCol from './AppCol'
import { Rule } from 'antd/es/form'
import TypedInputNumber from 'antd/es/input-number'

interface JobForm {
	firtName: string
	lastName: string
	email: string
	phone: number
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

const fieldRequiered = 'Please fill in value'

const stadartStringRules: Rule = {
	min: 2,
	max: 50,
}

const JobForm: React.FC = () => {
	const [form] = useForm<JobForm>()

	return (
		<Form
			form={form}
			layout="vertical"
			onFinish={(values) => handleSubmit(values)}
			name="jobForm"
		>
			<Row justify={'space-between'}>
				<AppCol>
					<Form.Item
						name="firstName"
						label="First Name"
						rules={[{ required: true, message: fieldRequiered }]}
					>
						<Input placeholder="Jhon" />
					</Form.Item>
				</AppCol>
				<AppCol>
					<Form.Item
						label="Last name"
						name="lastName"
						rules={[{ required: true, message: fieldRequiered }]}
					>
						<Input placeholder="Smith" />
					</Form.Item>
				</AppCol>
			</Row>
			<Row justify={'space-between'}>
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
					<Form.Item
						label="Phone"
						name="phone"
						rules={[{ required: true, message: fieldRequiered, type: 'number' }]}
					>
						<InputNumber placeholder="00 40 726 678 234" />
						{/* <Input type="number" placeholder="00 40 726 678 234" /> */}
					</Form.Item>
				</AppCol>
			</Row>
			<Row justify={'space-between'}>
				<AppCol>
					<Form.Item label="Resume">
						<Input placeholder=".doc, .docx or .pdf" />
					</Form.Item>
				</AppCol>
				<AppCol>
					<Form.Item label="Cover Later">
						<Input placeholder=".doc, .docx or .pdf" />
					</Form.Item>
				</AppCol>
			</Row>
			<Row justify={'space-between'}>
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
			</Row>
			<Row justify={'space-between'}>
				<AppCol>
					<Form.Item label="If a current employee at In The Pocket referred you, please list their name.">
						<Input placeholder="Greg Miller" />
					</Form.Item>
				</AppCol>
				<AppCol>
					<Form.Item label="Do you want to stay informed about our events? ">
						<Input placeholder="Smith" />
					</Form.Item>
				</AppCol>
			</Row>

			<Button htmlType="submit" type="primary" form="jobForm">
				Submit
			</Button>
		</Form>
	)
}

export default JobForm
