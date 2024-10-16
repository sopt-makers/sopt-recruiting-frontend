import { differenceInSeconds } from 'date-fns/differenceInSeconds';
import { format } from 'date-fns/format';
import { isAfter } from 'date-fns/isAfter';
import { isBefore } from 'date-fns/isBefore';
import { ko } from 'date-fns/locale/ko';
import { subMinutes } from 'date-fns/subMinutes';
import { _differenceInSeconds, _isAfter, _isBefore, _subMinutes } from './dateFormatter';

const dateTest = () => {
  const isBefore라브 = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11));
  const isBefore유틸 = _isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11));
  console.log('🚀isBefore Test:', isBefore라브 === isBefore유틸);

  const isAfter라브 = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11));
  const isAfter유틸 = _isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11));
  console.log('🚀isAfter Test:', isAfter라브 === isAfter유틸);

  const dIS라브 = differenceInSeconds(new Date(2014, 6, 2, 12, 30, 20, 700), new Date(2014, 6, 2, 12, 30, 7, 999));
  const dIS유틸 = _differenceInSeconds(new Date(2014, 6, 2, 12, 30, 20, 700), new Date(2014, 6, 2, 12, 30, 7, 999));
  console.log('🚀differenceInSeconds Test:', dIS라브 === dIS유틸);

  const subMinutes라브 = subMinutes(new Date(2014, 6, 10, 12, 0), 30);
  const subMinutes유틸 = _subMinutes(new Date(2014, 6, 10, 12, 0), 30);
  console.log('🚀subMinutes Test:', subMinutes라브.getTime() === subMinutes유틸.getTime());

  const result5 = format(new Date(2014, 1, 11, 6), 'M월 dd일 (E) aaa HH시', { locale: ko });
  // const formattedApplicationStart = format(new Date(applicationStart || ''), 'M월 dd일 (E) aaa HH시 mm분', {
  //   locale: ko,
  // });
  console.log('🚀format:', result5); //=> '02/11/2014';
};

export default dateTest;
