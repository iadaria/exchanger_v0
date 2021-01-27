import React from 'react';
import { useSelector } from 'react-redux';
import { IModalState } from './modalReducer';
import { IRootState } from '../../store/rootReducer';
import { UsernameForm } from '../../../features/profiles/components/UsernameForm';

export default function ModalManager() {
  const modalLookup = {
    UsernameForm,
  };
  const currentModal: IModalState | null = useSelector<IRootState>(
    (state) => state.modals,
  ) as IModalState;
  let renderModal = <></>;

  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookup[
      modalType! as keyof typeof modalLookup
    ] as React.ElementType;

    renderModal = <ModalComponent {...modalProps} />;
  }

  return renderModal;
}
