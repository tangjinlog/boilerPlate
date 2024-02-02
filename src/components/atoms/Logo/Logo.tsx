import Image from 'next/image';

interface LogoProps {
	size: 'big' | 'mid';
}

function Logo({ size }: LogoProps) {
	switch (size) {
		case 'big':
			return (
				<Image src={``} width={150} height={51} alt="Home Logo" priority />
			);
		case 'mid':
			return <Image src={``} height={32} alt="Home Logo" />;
	}
}

export default Logo;
