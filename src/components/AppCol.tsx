import { Col, ColProps } from 'antd'

const AppCol: React.FC<ColProps> = ({ children, ...props }) => {
	return (
		<Col md={11} xs={24} {...props}>
			{children}
		</Col>
	)
}

export default AppCol
