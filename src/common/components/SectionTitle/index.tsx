import { useDeviceType } from 'contexts/DeviceTypeProvider';
import { wrapper, labelVar, titleVar } from './style.css';

interface Props {
  label: string;
  title: string;
}

const SectionTitle = ({ label, title }: Props) => {
  const { deviceType } = useDeviceType();

  return (
    <div className={wrapper}>
      <p className={labelVar[deviceType]}>{label}</p>
      <h2 className={titleVar[deviceType]}>{title}</h2>
    </div>
  );
};

export default SectionTitle;
