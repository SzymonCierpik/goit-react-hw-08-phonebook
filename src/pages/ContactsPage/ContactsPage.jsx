import ContactList from '../../components/ContactList/ContactList';
import ContactForm from "../../components/ContactForm/ContactForm";
import Filter from "../../components/Filter/Filter";
import styles from './ContactsPage.module.css';

const ContactsPage = () => {
  return (
    <div className={styles.wrapper}>
      <ContactForm />
      <h2 className={styles.title}>Kontakty</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
