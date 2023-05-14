import { Row, RowProps } from 'antd'

const AppRow: React.FC<RowProps> = ({ children, ...props }) => {
	return (
		<Row justify={'space-between'} align={'bottom'} {...props}>
			{children}
		</Row>
	)
}

export default AppRow
