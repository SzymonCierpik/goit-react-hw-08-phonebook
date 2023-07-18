import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Paper, Stack, TextField, Button } from "@mui/material";
import { postContactOperation } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const nameInputRef = useRef(null);
  const numberInputRef = useRef(null);

  const formSubmit = (event) => {
    event.preventDefault();
    const name = nameInputRef.current.value;
    const number = numberInputRef.current.value;
    const newContact = { name, number };
    contacts.some((contact) => name === contact.name)
      ? alert(`${name} is already in contacts.`)
      : dispatch(postContactOperation(newContact));
    nameInputRef.current.value = "";
    numberInputRef.current.value = "";
  };

  return (
    <Paper elevation={3} sx={{ p: 2, mt: 5 }}>
      <Box onSubmit={formSubmit} component="form" autoComplete="off">
        <Stack direction={"column"} spacing={3}>
          <TextField
            fullWidth
            required
            id="standard-basic"
            label="Name"
            variant="standard"
            type="text"
            name="name"
            color="success"
            inputRef={nameInputRef}
          />
          <TextField
            fullWidth
            required
            id="standard-basic"
            label="Number"
            variant="standard"
            type="tel"
            name="number"
            color="success"
            inputRef={numberInputRef}
          />

          <Button
            variant="contained"
            color="success"
            type="submit"
            sx={{ m: 1, width: 150 }}
          >
            Add contact
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
};

export default ContactForm;
