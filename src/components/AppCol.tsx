import { Col, ColProps } from 'antd'

const AppCol: React.FC<ColProps> = ({ children, ...props }) => {
	return (
		<Col md={10} span={11} {...props}>
			{children}
		</Col>
	)
}

export default AppCol
