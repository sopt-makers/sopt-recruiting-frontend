import { useRef } from 'react';

import { CompleteDialog } from 'views/dialogs';

const PasswordPage = () => {
  const dialog = useRef<HTMLDialogElement>(null);

  const handleOpenDialog = () => {
    dialog.current?.showModal();
  };

  return (
    <div>
      <button onClick={handleOpenDialog}>Open Modal</button>
      <CompleteDialog ref={dialog} />
    </div>
  );
};

export default PasswordPage;
