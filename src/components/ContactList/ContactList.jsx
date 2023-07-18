import { useSelector, useDispatch } from 'react-redux';
import {
  selectfilteredContacts,
  selectLoading,
} from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import { Button, CircularProgress } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete"
import styles from './ContactList.module.css';
import {
  getContactsOperation,
  deleteContactOperation,
} from '../../redux/contacts/operations';


const ContactList = () => {
  const loading = useSelector(selectLoading);
  const filteredContacts = useSelector(selectfilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsOperation());
  }, [dispatch]);

  return (
    <>
      <ul className={styles.list}>
        {filteredContacts.length !== 0 &&
          filteredContacts.map(({ id, name, number }) => (
            <li key={id} className={styles.item}>
              <p className={styles.p}>
                {name}: {number}
              </p>
              <Button
              size="small"
              variant="outlined"
              startIcon={<DeleteIcon />}
                type="button"
                onClick={() => dispatch(deleteContactOperation(id))}
              >
                Delete
              </Button>
            </li>
          ))}
      </ul>
      {loading && <CircularProgress/>}
    </>
  );
};

export default ContactList;
