import { DeviceType } from '@hooks/useDevice';
import cardsImage from './sopt-final-result-cards.svg';

const IconSoptRecrutingLogo = ({ deviceType, className }: { deviceType: DeviceType; className?: string }) => {
  let width, height;
  switch (deviceType) {
    case 'DESK':
      width = 551;
      height = 308;
      break;
    case 'TAB':
      width = 377;
      height = 211;
      break;
    case 'MOB':
      width = 302;
      height = 169;
      break;
  }

  return <img className={className} src={cardsImage} width={width} height={height} alt="" aria-hidden="true" style={{ objectFit: 'contain' }} />;
};

export default IconSoptRecrutingLogo;
