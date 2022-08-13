/* eslint-disable import/prefer-default-export */
import { toast, ToastOptions } from 'react-toastify';

import { ToasterType } from '../helpers/toaster.types';

const toaster = (
  message: string,
  type: ToasterType,
  options: ToastOptions = {}
) => {
  if (type === ToasterType.SUCCESS) {
    return toast.success(message, options);
  }
  if (type === ToasterType.ERROR) {
    return toast.error(message, options);
  }
  if (type === ToasterType.INFO) {
    return toast.info(message, options);
  }
  return toast.warn(message, options);
};

export { toaster };
