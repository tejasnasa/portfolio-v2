interface ToolWrapperProp {
  page: string;
  img: string;
  url: string;
}

const ToolWrapper = ({ page, img, url }: ToolWrapperProp) => {
  return (
    <a
      href={url}
      target="_blank"
      className={`hover:cursor-default ${
        page === "tools" ? "pointer-events-none" : undefined
      }`}
    >
      <img
        src={img}
        className={`m-2 ${page === "tools" ? "h-10" : "h-9"}`}
      />
    </a>
  );
};

export default ToolWrapper;
