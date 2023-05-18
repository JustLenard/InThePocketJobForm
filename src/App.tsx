import { Card, Col, Row } from 'antd'
import Form from './components/Form'
import F2 from './components/f'

const App: React.FC = () => {
	return (
		<Row justify="center">
			<Col xs={24} md={10}>
				<Card
					title="Excited? Join our team!"
					headStyle={{
						textAlign: 'center',
					}}
				>
					<Form />
					{/* <F2 /> */}
				</Card>
			</Col>
		</Row>
	)
}

export default App
