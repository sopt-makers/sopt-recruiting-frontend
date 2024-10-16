import { differenceInSeconds } from 'date-fns/differenceInSeconds';
import { format } from 'date-fns/format';
import { isAfter } from 'date-fns/isAfter';
import { isBefore } from 'date-fns/isBefore';
import { ko } from 'date-fns/locale/ko';
import { subMinutes } from 'date-fns/subMinutes';
import { _differenceInSeconds, _format, _isAfter, _isBefore, _subMinutes } from './dateFormatter';

const dateTest = () => {
  const sampleDate = '2024-06-20T15:27:45.000Z';

  const isBefore라브 = isBefore(sampleDate, new Date(1987, 1, 11));
  const isBefore유틸 = _isBefore(sampleDate, new Date(1987, 1, 11));
  console.log('🚀isBefore Test:', isBefore라브 === isBefore유틸);

  const isAfter라브 = isAfter(sampleDate, new Date(1987, 1, 11));
  const isAfter유틸 = _isAfter(sampleDate, new Date(1987, 1, 11));
  console.log('🚀isAfter Test:', isAfter라브 === isAfter유틸);

  const dIS라브 = differenceInSeconds(sampleDate, new Date(2014, 6, 2, 12, 30, 7, 999));
  const dIS유틸 = _differenceInSeconds(sampleDate, new Date(2014, 6, 2, 12, 30, 7, 999));
  console.log('🚀differenceInSeconds Test:', dIS라브 === dIS유틸);

  const subMinutes라브 = subMinutes(new Date(sampleDate), 30);
  const subMinutes유틸 = _subMinutes(new Date(sampleDate), 30);
  console.log('🚀subMinutes Test:', subMinutes라브.getTime() === subMinutes유틸.getTime());

  const format라브 = format(sampleDate, 'M월 dd일 (E) aaa HH시 mm분', { locale: ko });
  const format유틸 = _format(sampleDate, 'M월 dd일 (E) aaa HH시 mm분');
  console.log('🚀format Test:', format유틸 === format라브);
};

export default dateTest;
