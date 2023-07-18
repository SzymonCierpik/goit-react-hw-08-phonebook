import { Stack } from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

const HomePage = () => {
  return ( 
  <Stack
  direction={'row'}
  justifyContent={'center'}
  alignItems={'center'}
  spacing={3}
  >
 <ContactPhoneIcon color="primary" fontSize="large" />
      <h1>Contacts manager Page please LogIn or Register</h1>



  </Stack>
  )
};

export default HomePage;
