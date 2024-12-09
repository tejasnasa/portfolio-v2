interface LinkButtonProps {
  url: string;
}

const LinkButton = ({ url }: LinkButtonProps) => {
  return (
    <a href={url} target="_blank">
      <div className="bg-gray-300 dark:bg-gray-700 w-10 h-10 rounded-full flex justify-center items-center hover:ring-4 ring-gray-200 dark:ring-gray-400 hover:transition duration-700 ease-in-out">
        <svg
          id="Arrow.7"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 18.256 18.256"
        >
          <g
            id="Group_7"
            data-name="Group 7"
            transform="translate(5.363 5.325)"
          >
            <path
              id="Path_10"
              data-name="Path 10"
              d="M14.581,7.05,7.05,14.581"
              transform="translate(-7.05 -7.012)"
              fill="none"
              stroke="#0D1117"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            ></path>
            <path
              id="Path_11"
              data-name="Path 11"
              d="M10,7l5.287.037.038,5.287"
              transform="translate(-7.756 -7)"
              fill="none"
              stroke="#0D1117"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            ></path>
          </g>
          <path
            id="Path_12"
            data-name="Path 12"
            d="M0,0H18.256V18.256H0Z"
            fill="none"
          ></path>
        </svg>
      </div>
    </a>
  );
};

export default LinkButton;
