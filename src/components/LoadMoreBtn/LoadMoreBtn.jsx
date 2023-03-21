import { Button } from "./LoadMoreBtn.styled";

const LoadMoreButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      Load More
    </Button>
  );
};



export default LoadMoreButton;