import React from 'react';
import { Section, Container, ColumnLeft, ColumnRight } from './ArticleTemplate.elements';

const Article = () => {
    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <h1>Lorum ipsum</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla porta dui sit amet dictum bibendum. Nullam facilisis quam sit amet faucibus varius.
                        Nam ultricies ante sit amet eros sollicitudin, eu eleifend augue porttitor.
                        Aliquam mattis varius hendrerit. Cras metus eros, dapibus ac ligula a, imperdiet fringilla ligula.
                        Nulla consequat varius lectus, vel condimentum erat facilisis at. Aenean semper, lectus eget lacinia congue,
                        nisi nunc tristique leo, ut condimentum augue odio nec ipsum. Aliquam elementum lacinia urna, at fringilla velit ultrices at.
                        Ut vel augue lobortis lacus consectetur feugiat quis eget sem. Sed rhoncus libero sed neque rhoncus euismod.
                        Integer gravida lacus in lorem fermentum, eget fringilla augue dignissim.
                        Nulla imperdiet est sit amet lacinia consequat.
                        Pellentesque tincidunt sodales nibh, sed placerat sem efficitur sit amet.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla porta dui sit amet dictum bibendum. Nullam facilisis quam sit amet faucibus varius.
                        Nam ultricies ante sit amet eros sollicitudin, eu eleifend augue porttitor.
                        Aliquam mattis varius hendrerit. Cras metus eros, dapibus ac ligula a, imperdiet fringilla ligula.
                        Nulla consequat varius lectus, vel condimentum erat facilisis at. Aenean semper, lectus eget lacinia congue,
                        nisi nunc tristique leo, ut condimentum augue odio nec ipsum. Aliquam elementum lacinia urna, at fringilla velit ultrices at.
                        Ut vel augue lobortis lacus consectetur feugiat quis eget sem. Sed rhoncus libero sed neque rhoncus euismod.
                        Integer gravida lacus in lorem fermentum, eget fringilla augue dignissim.
                        Nulla imperdiet est sit amet lacinia consequat.
                        Pellentesque tincidunt sodales nibh, sed placerat sem efficitur sit amet.</p>
                </ColumnLeft>
                <ColumnRight>
                    <img src={require("./dziewczyna_w_cieniu.jpg").default} alt='Bedzie obrazek' />
                </ColumnRight>
            </Container>
        </Section>
    );
}

export default Article;