import { useFormContext } from 'react-hook-form';

import SelectBox from '@components/Select';
import Textarea from '@components/Textarea';
import { useDeviceType } from 'contexts/DeviceTypeProvider';
import { sectionContainerVar, sectionTitleVar } from 'views/ApplyPage/style.css';
import { Answers } from 'views/ApplyPage/types';

import FileInput from '../FileInput';
import Info from '../Info';
import LinkInput from '../LinkInput';
import useGetDraft from 'views/ApplyPage/hooks/useGetDraft';
import useGetQuestions from 'views/ApplyPage/hooks/useGetQuestions';

interface PartSectionProps {
  isReview?: boolean;
  refCallback: (elem: HTMLSelectElement) => void;
}

const PartSection = ({ refCallback, isReview = false }: PartSectionProps) => {
  const { deviceType } = useDeviceType();
  const { getValues } = useFormContext();

  const { draftData } = useGetDraft();
  const { applicant, partQuestions } = draftData?.data || {};
  const { part } = applicant || {};

  const { questionsData } = useGetQuestions(applicant);
  const { partQuestions: questions } = questionsData?.data || {};

  const partOptions = questions ? questions.map((q) => q.part) : [];
  const selectedPart: string = getValues('part');
  const filteredQuestions = questions?.find((item) => item.part === selectedPart)?.questions;
  const partQuestionsById = partQuestions?.reduce(
    (acc, draft) => {
      acc ? (acc[draft.id] = draft) : undefined;
      return acc;
    },
    {} as { [key: number]: Answers } | undefined,
  );
  const hasDescription = filteredQuestions?.some(({ isDescription }) => isDescription);

  return (
    <section ref={refCallback} id="partial" className={sectionContainerVar[deviceType]}>
      <h2 className={sectionTitleVar[deviceType]}>파트별 질문</h2>
      <SelectBox
        defaultValue={part}
        label="지원파트"
        name="part"
        placeholder="지원하고 싶은 파트를 선택해주세요."
        options={partOptions || []}
        size="lg"
        required
        disabled={isReview}
      />
      {filteredQuestions?.map(
        ({ question, charLimit, id, urls, isFile, placeholder, optional, isDescription }, index) => {
          const draftItem = partQuestionsById?.[id];
          const defaultValue = draftItem ? draftItem.answer.answer : '';
          const defaultFile = { id, file: draftItem?.answer.file, fileName: draftItem?.answer.fileName };
          const onlyFileUpload = isFile ? !charLimit && !placeholder : false;

          return (
            <div key={question}>
              {isDescription && <Info value={question} />}
              {!isDescription && (
                <Textarea
                  name={`part${id}`}
                  defaultValue={defaultValue}
                  maxCount={charLimit ?? null}
                  placeholder={
                    placeholder ||
                    (isFile
                      ? '링크로 제출할 경우, 이곳에 작성해주세요. (파일로 제출한 경우에는 ‘파일 제출’이라고 기재 후 제출해주세요.)'
                      : '')
                  }
                  extraInput={
                    isFile ? (
                      <FileInput section="part" id={id} isReview={isReview} defaultFile={defaultFile} />
                    ) : urls ? (
                      <LinkInput urls={urls} />
                    ) : undefined
                  }
                  required={!optional}
                  disabled={isReview}
                  onlyFileUpload={onlyFileUpload}
                  questionOrder={isDescription ? undefined : hasDescription ? index : index + 1}>
                  {question}
                </Textarea>
              )}
            </div>
          );
        },
      )}
    </section>
  );
};

export default PartSection;
