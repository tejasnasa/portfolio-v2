interface ToolImageProp {
  img: string;
  url: string;
}

const ToolImage = ({ img, url }: ToolImageProp) => {
  return (
    <a href={url} target="_blank">
      <img src={img} className="m-2 h-8" />
    </a>
  );
};

export default ToolImage;
