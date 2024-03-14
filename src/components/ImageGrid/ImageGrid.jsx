import { Container, ImageWrapper, Image } from './ImageGrid.styles.jsx';
import grid1 from './../../assets/grid1.jpeg'
import grid2 from './../../assets/grid2.jpeg'
import grid3 from './../../assets/grid3.jpeg'
import grid4 from './../../assets/grid4.jpeg'
import grid5 from './../../assets/grid5.jpeg'
import grid6 from './../../assets/grid6.jpeg'


const ImageGrid = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image src={grid1} alt="Image 1" />
        <Image src={grid2} alt="Image 2" />
        <Image src={grid3} alt="Image 3" />
      </ImageWrapper>
      <ImageWrapper>
        <Image src={grid4} alt="Image 4" />
        <Image src={grid5} alt="Image 5" />
        <Image src={grid6} alt="Image 6" />
      </ImageWrapper>
    </Container>
  );
};

export default ImageGrid;
