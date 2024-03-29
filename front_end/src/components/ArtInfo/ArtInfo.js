import {
	InfoSec,
	Container,
	InfoRow,
	InfoColumn,
	TextWrapper,
	Heading,
	Subtitle,
	ImgWrapper,
	Img
} from './ArtInfo.elements';

const ArtInfo = ({ title, content, photoLink }) => {
	return (
		<>
			<InfoSec>
				<Container>
					<InfoRow>
						<InfoColumn>
							<TextWrapper>
								<Heading>{title}</Heading>
								<Subtitle>{content}</Subtitle>
							</TextWrapper>
						</InfoColumn>
						<InfoColumn>
							<ImgWrapper>
								<Img src={photoLink} alt='Project_photo' />
							</ImgWrapper>
						</InfoColumn>
					</InfoRow>
				</Container>
			</InfoSec>
		</>
	);
};

export default ArtInfo;
