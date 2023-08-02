import type { ComponentStyleConfig } from '@chakra-ui/theme'

export const Button: ComponentStyleConfig = {
	// using the c (for custom) prefix to avoid conflicts with the default sizes
	sizes: {
		cxs: {
			px: 3,
			py: 1.5,
			fontSize: '2xs',
		},
		csm: {
			px: 4,
			py: 3,
			fontSize: 'xs',
		},
		cmd: {
			px: 5,
			py: 4,
			fontSize: 'sm',
		},
		clg: {
			px: 6,
			py: 5,
			fontSize: 'md',
		},
		cxl: {
			px: 8,
			py: 3,
			fontSize: '2xl',
		},
	},
	variants: {
		solid: {
			rounded: 'full',
		},
		outline: {
			rounded: 'full',
		},
		solidPrimary: {
			rounded: 0,
			textTransform: 'uppercase',
			fontFamily: 'heading',
			fontWeight: 'bold',
			bg: 'primary.600',
			color: 'white',
			_hover: {
				bg: 'primary.800',
				_disabled: {
					bgColor: 'primary.200',
				},
			},
			_loading: {
				_hover: {
					bg: 'primary.400',
				},
			},
			_active: {
				transform: 'scale(0.98)',
			},
		},
		outlinePrimary: {
			bg: 'transparent',
			border: '2px solid',
			borderColor: 'primary.700',
			color: 'primary.700',
			_active: {
				transform: 'scale(0.98)',
			},
		},
		ghostPrimary: {
			bg: 'transparent',
			color: 'primary.600',
			textDecoration: 'underline',
			_active: {
				transform: 'scale(0.98)',
			},
		},

		solidSecondary: {
			rounded: 0,
			textTransform: 'uppercase',
			fontFamily: 'heading',
			fontWeight: 'normal',
			bg: 'gray.500',
			color: 'white',
			_hover: {
				bgColor: 'gray.700',
				_disabled: {
					bgColor: 'gray.300',
				},
			},
			_loading: {
				_hover: {
					bg: 'gray.300',
				},
			},
			_active: {
				transform: 'scale(0.98)',
			},
		},
		outlineSecondary: {
			textTransform: 'uppercase',
			bg: 'transparent',
			fontFamily: 'heading',
			border: '2px solid',
			borderColor: 'secondary.700',
			color: 'secondary.700',
			_active: {
				transform: 'scale(0.98)',
			},
		},
		outlineNeutral: {
			textTransform: 'uppercase',
			bg: 'transparent',
			fontFamily: 'heading',
			border: '2px solid',
			_active: {
				transform: 'scale(0.98)',
			},
		},
		ghostSecondary: {
			bg: 'transparent',
			color: 'gray.700',
			textDecoration: 'underline',
			_hover: {
				color: 'gray.900',
				_disabled: {
					color: 'gray.500',
				},
			},
			_active: {
				transform: 'scale(0.98)',
			},
		},
	},
}
