import Header from '@molecules/Header';

interface LayoutProps {
	children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
	return (
		<div className="layoutWrapper">
			<Header />
			{children}
		</div>
	);
}

export default Layout;
