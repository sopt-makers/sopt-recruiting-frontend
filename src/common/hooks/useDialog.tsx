import { useRef } from 'react';

const useDialog = () => {
  const ref = useRef<HTMLDialogElement>(null);

  const handleShowDialog = () => {
    ref.current?.showModal();
  };

  const handleCloseDialog = () => {
    ref.current?.close();
  };

  return { ref, handleShowDialog, handleCloseDialog };
};

export default useDialog;
