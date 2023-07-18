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
      <ContactPhoneIcon
        color="primary"
        sx={{ fontSize: 500, color: "red" }}
      />
    </Stack>
  );
};

export default HomePage;
