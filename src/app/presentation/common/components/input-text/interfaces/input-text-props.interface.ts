export interface InputTextProps {
	placeholder: string;
	onChange: (value: string) => void;
	error?: boolean;
	value?: string;
}
