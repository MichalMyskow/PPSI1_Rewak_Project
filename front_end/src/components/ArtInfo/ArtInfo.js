import { Link } from 'react-router-dom';
import { Button } from '../../globalStyles';
import { InfoSec, Container, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img } from './ArtInfo.elements';

const ArtInfo = ({title, content}) => {
    return (
        <>
            <InfoSec>
                <Container>
                    <InfoRow>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine >TopLine</TopLine>
                                <Heading >{title}</Heading>
                                <Subtitle>{content}</Subtitle>
                                <Link to='/'>
                                    <Button>
                                        Przycisk
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper>
                                <Img src={require('./probne.jpg').default} alt='Project' />
                                {/* <Img src={image} alt='Project_photo' /> */}
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    );
}

export default ArtInfo;