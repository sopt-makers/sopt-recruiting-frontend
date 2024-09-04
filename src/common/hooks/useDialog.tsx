import { useRef } from 'react';

const useDialog = () => {
  const ref = useRef<HTMLDialogElement>(null);

  const handleShowDialog = () => {
    ref.current?.showModal();
  };

  return { ref, handleShowDialog };
};

export default useDialog;
