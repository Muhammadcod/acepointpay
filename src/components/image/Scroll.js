const Scroll = ({
  width = 64,
  height = 64,
  strokeColor = "currentColor",
  ...props
}) => (
  <>
    <svg
      width={width}
      height={height}
      viewBox="0 0 128 128"
      fill="none"
      {...props}
    >
      <path
        fill="#d3d8dd"
        d="M101,29h20V19c0-5.5-4.5-10-10-10h0c-5.5,0-10,4.5-10,10V29z"
      />
      <path
        fill="#fff"
        d="M111,9H27c-5.5,0-10,4.5-10,10v100h74c5.5,0,10-4.5,10-10V19C101,13.5,105.5,9,111,9L111,9z"
      />
      <path
        fill="#d3d8dd"
        d="M81 62H37c-1.7 0-3-1.3-3-3s1.3-3 3-3h44c1.7 0 3 1.3 3 3S82.7 62 81 62zM71 32H47c-1.7 0-3-1.3-3-3s1.3-3 3-3h24c1.7 0 3 1.3 3 3S72.7 32 71 32z"
      />
      <path
        fill="#fff"
        d="M81,109V99H7v10c0,5.5,4.5,10,10,10h74C85.5,119,81,114.5,81,109z"
      />
      <path
        fill="#444b54"
        d="M111,6H27c-7.2,0-13,5.8-13,13v67c0,1.7,1.3,3,3,3s3-1.3,3-3V19c0-3.9,3.1-7,7-7h73c-1.3,2-2,4.4-2,7v90c0,3.9-3.1,7-7,7s-7-3.1-7-7V99c0-1.7-1.3-3-3-3H7c-1.7,0-3,1.3-3,3v10c0,7.2,5.8,13,13,13h74c7.2,0,13-5.8,13-13V19c0-3.9,3.1-7,7-7s7,3.1,7,7v7h-7c-1.7,0-3,1.3-3,3s1.3,3,3,3h10c1.7,0,3-1.3,3-3V19C124,11.8,118.2,6,111,6z M17,116c-3.9,0-7-3.1-7-7v-7h68v7c0,2.6,0.8,5,2,7H17z"
      />
      <path
        fill="#d3d8dd"
        d="M66.2 77h-29c-1.7 0-3-1.3-3-3s1.3-3 3-3h29c1.7 0 3 1.3 3 3S67.9 77 66.2 77zM81.2 77H81c-1.7 0-3-1.3-3-3s1.3-3 3-3h.2c1.7 0 3 1.3 3 3S82.9 77 81.2 77z"
      />
    </svg>
  </>
);

export default Scroll;