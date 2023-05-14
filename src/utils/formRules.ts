import { Rule } from 'antd/es/form'

interface RulesObj {
	stringRequired: Rule
	emailRequired: Rule
	numberRequired: Rule
	stringRequiredLong: Rule
	required: Rule
	phone: Rule
}

export const formRules: RulesObj = {
	required: { required: true },
	stringRequired: { required: true, min: 1, max: 30 },
	stringRequiredLong: { required: true, min: 1, max: 300 },
	emailRequired: {
		type: 'email',
		required: true,
		max: 256,
	},
	numberRequired: { type: 'number', required: true, max: 10000 },
	phone: { required: true, min: 5, max: 20 },
}

export const validateMessages = {
	required: 'Field required!',

	types: {
		email: 'Invalid email format',
		number: 'Invalid number',
	},
	number: {
		range: '${label}' + 'must be between' + '${min}' + 'and' + '${max}',
	},
}
