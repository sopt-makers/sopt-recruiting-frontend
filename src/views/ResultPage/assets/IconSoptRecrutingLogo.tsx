import { DeviceType } from '@hooks/useDevice';

const IconSoptRecrutingLogo = ({ deviceType }: { deviceType: DeviceType }) => {
  let width, height;
  switch (deviceType) {
    case 'DESK':
      width = 234;
      height = 330;
      break;
    case 'TAB':
      width = 140;
      height = 196;
      break;
    case 'MOB':
      width = 117;
      height = 164;
      break;
  }

  return (
    <svg width={width} height={height} viewBox="0 0 237 356" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.5">
        <g filter="url(#filter0_n_378_5094)">
          <path
            d="M132.937 6.83395C154.626 10.5169 169.394 30.6744 166.591 52.3018L166.591 52.3017C164.309 69.9846 176.391 86.4665 194.129 89.4784C204.526 91.2439 214.614 88.0034 221.934 81.4936L224.4 84.2669L226.867 87.0401C217.936 94.9822 205.598 98.9544 192.886 96.796C171.197 93.1131 156.43 72.9555 159.232 51.3282L159.233 51.328C161.514 33.6452 149.432 17.1634 131.694 14.1515C113.508 11.0635 96.2621 23.3029 93.174 41.4891L85.8565 40.2466C89.6308 18.019 110.709 3.05967 132.937 6.83395ZM109.921 56.2314C112.586 60.904 117.236 64.3762 122.941 65.345L121.699 72.6625C113.708 71.3057 107.192 66.4298 103.473 59.9077L109.921 56.2314ZM181.178 54.9066C179.463 65.0101 186.262 74.5913 196.366 76.3069C206.469 78.0224 216.05 71.2227 217.766 61.1193L225.083 62.3618C222.682 76.5066 209.268 86.0262 195.123 83.6244C180.978 81.2226 171.459 67.8089 173.861 53.6641L181.178 54.9066ZM119.691 38.0936C124.705 34.5349 131.655 35.715 135.214 40.7294C138.772 45.7437 137.592 52.6935 132.578 56.2522C127.564 59.8108 120.614 58.6307 117.055 53.6164C113.497 48.602 114.677 41.6522 119.691 38.0936ZM192.991 49.7872C198.005 46.2285 204.955 47.4086 208.514 52.423C212.072 57.4374 210.892 64.3872 205.878 67.9458C200.863 71.5044 193.914 70.3243 190.355 65.31C186.796 60.2956 187.976 53.3458 192.991 49.7872ZM129.161 45.025C127.975 43.3536 125.658 42.9602 123.987 44.1464C122.315 45.3327 121.922 47.6493 123.108 49.3207C124.294 50.9921 126.611 51.3855 128.282 50.1993C129.954 49.0131 130.347 46.6965 129.161 45.025ZM202.461 56.7187C201.275 55.0472 198.958 54.6538 197.286 55.84C195.615 57.0263 195.222 59.3429 196.408 61.0143C197.594 62.6857 199.911 63.0791 201.582 61.8929C203.254 60.7067 203.647 58.3901 202.461 56.7187ZM130.727 21.498C144.689 24.0511 154.042 37.3657 151.659 51.4L144.342 50.1575L144.38 49.9206C145.938 39.9836 139.285 30.6081 129.39 28.7988L129.154 28.7572C119.051 27.0416 109.47 33.8413 107.754 43.9448L100.436 42.7022L100.495 42.3715C103.048 28.4094 116.362 19.0566 130.397 21.4397L130.727 21.498ZM203.821 32.4015C211.811 33.7584 218.327 38.6343 222.046 45.1563L215.598 48.8326C212.934 44.16 208.283 40.6878 202.578 39.7191C196.873 38.7503 191.337 40.4928 187.28 44.024L182.407 38.4254C188.07 33.4965 195.83 31.0447 203.821 32.4015Z"
            fill="url(#paint0_radial_378_5094)"
          />
        </g>
        <g filter="url(#filter1_n_378_5094)">
          <path
            d="M73.5923 206.942C76.8886 201.649 83.8518 200.03 89.1449 203.326C94.438 206.623 96.0568 213.586 92.7605 218.879C89.4643 224.172 82.5011 225.791 77.208 222.495C71.9149 219.198 70.2961 212.235 73.5923 206.942ZM85.166 209.716C83.4016 208.617 81.0804 209.157 79.9817 210.921C78.8829 212.685 79.4226 215.006 81.1869 216.105C82.9512 217.204 85.2724 216.664 86.3712 214.9C87.4698 213.135 86.9303 210.814 85.166 209.716ZM6.69264 150.214C16.844 147.92 27.506 148.238 37.6316 151.272C52.9811 155.873 65.8457 166.343 73.385 180.392C75.9199 185.115 77.7826 190.113 78.9593 195.246L75.2911 196.087L71.6228 196.928C70.5949 192.444 68.9678 188.078 66.7528 183.951C60.1663 171.678 48.9175 162.512 35.4707 158.482C26.6001 155.824 17.2543 155.544 8.35191 157.556L7.5223 153.885L6.69264 150.214ZM124.826 126.615L125.701 130.275C116.824 132.397 108.56 136.77 101.772 143.069C91.4815 152.617 85.4293 165.805 84.9322 179.725C84.7651 184.406 85.2307 189.042 86.2861 193.519L82.623 194.383L78.96 195.246C77.7517 190.12 77.2188 184.813 77.4101 179.456C77.9791 163.522 84.9057 148.451 96.6519 137.551C104.4 130.361 113.829 125.373 123.951 122.954L124.826 126.615ZM26.566 163.384C32.9001 164.256 39.0442 166.45 44.5767 169.895C54.9135 176.332 62.2698 186.612 65.0272 198.473L57.6958 200.178C55.3903 190.261 49.24 181.667 40.5978 176.285C35.9723 173.404 30.8359 171.57 25.5397 170.841L26.0528 167.113L26.566 163.384ZM114.031 146.66L116.136 149.779C111.704 152.77 107.904 156.682 105.023 161.307C99.6413 169.949 97.913 180.376 100.218 190.292L92.8869 191.997C90.1295 180.136 92.1967 167.665 98.6339 157.328C102.079 151.796 106.626 147.117 111.926 143.54L114.031 146.66ZM74.2712 158.458L66.9397 160.163L55.0087 108.842L62.3402 107.138L74.2712 158.458Z"
            fill="url(#paint1_radial_378_5094)"
          />
        </g>
        <g filter="url(#filter2_n_378_5094)">
          <path
            d="M89.1771 296.307C92.6042 316.976 108.588 334.344 130.472 338.589C149.229 342.228 167.569 335.307 179.3 321.984L185.14 327.125C171.651 342.446 150.555 350.411 128.99 346.227C103.831 341.346 85.4468 321.372 81.5018 297.58L89.1771 296.307ZM103.137 280.781C99.1465 301.35 112.562 321.245 133.088 325.227C143.486 327.245 153.711 324.796 161.801 319.209L166.223 325.61C156.484 332.337 144.143 335.297 131.606 332.865C106.852 328.063 90.6923 304.076 95.4989 279.299L103.137 280.781ZM148.797 264.593L145.155 282.916L156.237 275.51L160.56 281.978L150.202 288.901L162.168 291.28L160.651 298.911L148.083 296.412L155.062 306.854L148.593 311.178L141.613 300.734L138.188 317.968L130.557 316.451L133.862 299.822L123.719 306.602L119.396 300.134L130.263 292.87L117.189 290.272L118.706 282.641L131.176 285.119L123.97 274.337L130.438 270.013L137.644 280.794L141.166 263.077L148.797 264.593ZM157.479 260.297L134.565 255.852L136.047 248.214L158.961 252.659L157.479 260.297ZM144.521 224.525C149.863 220.919 157.117 222.326 160.723 227.668C164.33 233.01 162.922 240.265 157.58 243.871C152.238 247.477 144.984 246.07 141.378 240.727C137.771 235.385 139.179 228.131 144.521 224.525ZM154.275 232.021C153.073 230.241 150.655 229.772 148.874 230.974C147.093 232.176 146.624 234.594 147.826 236.374C149.028 238.155 151.446 238.624 153.227 237.422C155.008 236.22 155.477 233.802 154.275 232.021Z"
            fill="url(#paint2_radial_378_5094)"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_n_378_5094"
          x="85.8564"
          y="6.25195"
          width="141.01"
          height="91.127"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="2.5426981449127197 2.5426981449127197"
            stitchTiles="stitch"
            numOctaves="3"
            result="noise"
            seed="6073"
          />
          <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
          <feComponentTransfer in="alphaNoise" result="coloredNoise1">
            <feFuncA
              type="discrete"
              tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "
            />
          </feComponentTransfer>
          <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped" />
          <feFlood flood-color="rgba(255, 255, 255, 0.25)" result="color1Flood" />
          <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
          <feMerge result="effect1_noise_378_5094">
            <feMergeNode in="shape" />
            <feMergeNode in="color1" />
          </feMerge>
        </filter>
        <filter
          id="filter1_n_378_5094"
          x="6.69238"
          y="107.139"
          width="119.009"
          height="117.064"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="2.5426981449127197 2.5426981449127197"
            stitchTiles="stitch"
            numOctaves="3"
            result="noise"
            seed="6073"
          />
          <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
          <feComponentTransfer in="alphaNoise" result="coloredNoise1">
            <feFuncA
              type="discrete"
              tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "
            />
          </feComponentTransfer>
          <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped" />
          <feFlood flood-color="rgba(255, 255, 255, 0.25)" result="color1Flood" />
          <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
          <feMerge result="effect1_noise_378_5094">
            <feMergeNode in="shape" />
            <feMergeNode in="color1" />
          </feMerge>
        </filter>
        <filter
          id="filter2_n_378_5094"
          x="81.502"
          y="222.525"
          width="103.638"
          height="124.809"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="2.5426981449127197 2.5426981449127197"
            stitchTiles="stitch"
            numOctaves="3"
            result="noise"
            seed="6073"
          />
          <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
          <feComponentTransfer in="alphaNoise" result="coloredNoise1">
            <feFuncA
              type="discrete"
              tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "
            />
          </feComponentTransfer>
          <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped" />
          <feFlood flood-color="rgba(255, 255, 255, 0.25)" result="color1Flood" />
          <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
          <feMerge result="effect1_noise_378_5094">
            <feMergeNode in="shape" />
            <feMergeNode in="color1" />
          </feMerge>
        </filter>
        <radialGradient
          id="paint0_radial_378_5094"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(158.41 51.5835) rotate(-16.9236) scale(116.1 87.6515)">
          <stop stop-color="#FF5976" />
          <stop offset="1" stop-color="#FEEAA7" stop-opacity="0.8" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_378_5094"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(78.3851 192.777) rotate(-65.0285) scale(110.886 100.535)">
          <stop stop-color="#FF5976" />
          <stop offset="1" stop-color="#FEEAA7" stop-opacity="0.8" />
        </radialGradient>
        <radialGradient
          id="paint2_radial_378_5094"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(132.973 314.149) rotate(-47.1686) scale(117.604 105.295)">
          <stop stop-color="#FF5976" />
          <stop offset="1" stop-color="#FEEAA7" stop-opacity="0.8" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default IconSoptRecrutingLogo;
