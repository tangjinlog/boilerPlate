import styled from '@emotion/styled';
import { flexCenter } from '@styles/mixins';

const Wrapper = styled.div`
	${flexCenter};
`;

const Message = styled.p``;

interface LoadingProps {
	type: 'wiki' | 'other';
}

function Loading({ type }: LoadingProps) {
	const content = {
		wiki: `목록을\n불러오고 있습니다.`,
		other: `로딩중입니다...`,
	};

	return (
		<Wrapper>
			<Message>{content[type]}</Message>
		</Wrapper>
	);
}

export default Loading;
