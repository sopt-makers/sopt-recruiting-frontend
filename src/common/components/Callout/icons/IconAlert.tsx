interface Props {
  className?: string;
}

const IconAlert = ({ className }: Props) => (
  <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_3375_6249)">
      <circle cx="16" cy="16" r="16" fill="#FFDE8A" />
      <path
        d="M17.5458 8.84317C17.5458 8.02423 16.8517 7.36035 15.9955 7.36035C15.1394 7.36035 14.4453 8.02423 14.4453 8.84317V16.7516C14.4453 17.5705 15.1394 18.2344 15.9955 18.2344C16.8517 18.2344 17.5458 17.5705 17.5458 16.7516V8.84317Z"
        fill="#B57B1D"
      />
      <path
        d="M15.9955 20.6332C15.1394 20.6332 14.4453 21.2971 14.4453 22.1161C14.4453 22.935 15.1394 23.5989 15.9955 23.5989H16.0162C16.8724 23.5989 17.5664 22.935 17.5664 22.1161C17.5664 21.2971 16.8724 20.6332 16.0162 20.6332H15.9955Z"
        fill="#B57B1D"
      />
    </g>
    <defs>
      <clipPath id="clip0_3375_6249">
        <rect width="32" height="32" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default IconAlert;
