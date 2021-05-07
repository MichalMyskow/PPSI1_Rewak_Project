import { Link } from 'react-router-dom';
import { Button } from '../../globalStyles';
import { InfoSec, Container, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img } from './ArtInfo.elements';

const ArtInfo = () => {
    return (
        <>
            <InfoSec>
                <Container>
                    <InfoRow>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine ></TopLine>
                                <Heading >Heading</Heading>
                                <Subtitle>Subtitle</Subtitle>
                                <Link to='/sing-up'>
                                    <Button>
                                        Przycisk
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper>
                                <Img src={require('./probne.jpg').default} alt='Project' />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    );
}

export default ArtInfo;