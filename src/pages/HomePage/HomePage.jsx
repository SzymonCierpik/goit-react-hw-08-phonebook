import { Stack } from "@mui/material";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

const HomePage = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={3}
    >
      <ContactPhoneIcon fontSize="large" sx={{ fontSize: 200 }} />
    </Stack>
  );
};

export default HomePage;
