import Textarea from '@components/Textarea';
import { useDeviceType } from 'contexts/DeviceTypeProvider';
import { sectionContainerVar, sectionTitleVar } from 'views/ApplyPage/style.css';
import { Answers } from 'views/ApplyPage/types';

import FileInput from '../FileInput';
import Info from '../Info';
import LinkInput from '../LinkInput';
import useGetDraft from 'views/ApplyPage/hooks/useGetDraft';
import useGetQuestions from 'views/ApplyPage/hooks/useGetQuestions';

interface CommonSectionProps {
  isReview?: boolean;
  refCallback: (elem: HTMLSelectElement) => void;
}

const CommonSection = ({ refCallback, isReview = false }: CommonSectionProps) => {
  const { deviceType } = useDeviceType();
  const { draftData } = useGetDraft();
  const { applicant, commonQuestions } = draftData?.data || {};

  const { questionsData } = useGetQuestions(applicant);
  const { commonQuestions: questions } = questionsData?.data || {};

  const commonQuestionsById = commonQuestions?.reduce(
    (acc, draft) => {
      acc ? (acc[draft.id] = draft) : undefined;
      return acc;
    },
    {} as { [key: number]: Answers } | undefined,
  );

  return (
    <section ref={refCallback} id="common" className={sectionContainerVar[deviceType]}>
      <h2 className={sectionTitleVar[deviceType]}>공통 질문</h2>
      {questions?.questions.map(({ urls, question, id, charLimit, isFile, placeholder, optional, isDescription }) => {
        const draftItem = commonQuestionsById?.[id];
        const defaultValue = draftItem ? draftItem.answer.answer : '';
        const defaultFile = { id, file: draftItem?.answer.file, fileName: draftItem?.answer.fileName };
        const onlyFileUpload = isFile ? !charLimit && !placeholder : false;

        return (
          <div key={question}>
            {isDescription && <Info value={question} />}
            {!isDescription && (!!charLimit || onlyFileUpload) && (
              <Textarea
                name={`common${id}`}
                defaultValue={defaultValue}
                maxCount={charLimit || 0}
                placeholder={
                  placeholder ||
                  (isFile
                    ? '링크로 제출할 경우, 이곳에 작성해주세요. (파일로 제출한 경우에는 ‘파일 제출’이라고 기재 후 제출해주세요.)'
                    : '')
                }
                extraInput={
                  isFile ? (
                    <FileInput section="common" id={id} isReview={isReview} defaultFile={defaultFile} />
                  ) : urls ? (
                    <LinkInput urls={urls} />
                  ) : undefined
                }
                required={!optional}
                disabled={isReview}
                onlyFileUpload={onlyFileUpload}>
                {question}
              </Textarea>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default CommonSection;
