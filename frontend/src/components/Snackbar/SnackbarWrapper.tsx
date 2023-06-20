import { snack } from '../../store/snackStore';
import { useStore } from '@nanostores/react';
import Snackbar from './Snackbar';

export default function SnackbarWrapper() {
  const $snack = useStore(snack);
  console.log('snackwrapper', $snack);
  return $snack.isOpen ? (
    <Snackbar message={$snack?.message} type={$snack?.type} />
  ) : null;
}
