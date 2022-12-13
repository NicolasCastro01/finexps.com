export interface ModalProps {
	children: React.ReactNode;
	title: string;
	isOpen: boolean;
	onClose: () => void;
}
