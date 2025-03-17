
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				corporate: {
					navy: '#0A2342',
					gold: '#E6AF2E',
					lightgold: '#F4D488',
					lightgray: '#F5F5F5',
					darkgray: '#1A1F2C',
					darkblue: '#121A29',
				}
			},
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'gold-sm': '0 1px 2px 0 rgba(230, 175, 46, 0.05)',
				'gold': '0 1px 3px 0 rgba(230, 175, 46, 0.1), 0 1px 2px 0 rgba(230, 175, 46, 0.06)',
				'gold-md': '0 4px 6px -1px rgba(230, 175, 46, 0.1), 0 2px 4px -1px rgba(230, 175, 46, 0.06)',
				'gold-lg': '0 10px 15px -3px rgba(230, 175, 46, 0.1), 0 4px 6px -2px rgba(230, 175, 46, 0.05)',
				'gold-xl': '0 20px 25px -5px rgba(230, 175, 46, 0.1), 0 10px 10px -5px rgba(230, 175, 46, 0.04)',
				'gold-2xl': '0 25px 50px -12px rgba(230, 175, 46, 0.25)',
				'gold-inner': 'inset 0 2px 4px 0 rgba(230, 175, 46, 0.06)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				'pulse-gold': {
					'0%, 100%': { boxShadow: '0 0 0 0 rgba(230, 175, 46, 0.4)' },
					'50%': { boxShadow: '0 0 0 10px rgba(230, 175, 46, 0)' }
				},
				'progress-fill': {
					'0%': { width: '0%' },
					'100%': { width: 'var(--progress-width)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'pulse-gold': 'pulse-gold 2s infinite',
				'progress-fill': 'progress-fill 1.5s ease-out forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
