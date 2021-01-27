import { ReactNode } from 'react';
import { IAction } from '../../models/common';

/****************** CONST ***********************/
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

/**************** Actions ***********************/
export function openModal(payload: IModalState) {
  return {
    type: OPEN_MODAL,
    payload,
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
  };
}

/***************** Reducer ********************/

/**
 *
 * Interface of Modal State
 *
 * @param modalType A string name of modal window
 * @param modalProps A object props of modal window
 */
export interface IModalState {
  modalType?: string | null;
  // modalProps?: object | null;
  modalProps?: ReactNode | null;
}

const initialState: IModalState | null = null;

/* const initialState: IModalState = {
    modalType: null,
    modalProps: null,
}; */

export default function modalReducer(
  state: IModalState | null = initialState,
  { type, payload }: IAction = { type: '', payload: undefined },
): IModalState | null {
  switch (type) {
    case OPEN_MODAL:
      const { modalType, modalProps } = payload;
      return { modalType, modalProps };

    case CLOSE_MODAL:
      return null;

    default:
      return state;
  }
}
