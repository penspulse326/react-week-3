import { Img } from "./styled";

const CardSpot = (props: CardSpotProps) => {
  const { children, imgUrl } = props;

  return (
    <>
      <Img src={imgUrl} alt={children} />
      <p>{children}</p>
    </>
  );
};

type CardSpotProps = {
  children: string;
  imgUrl: string;
};

export default CardSpot;
