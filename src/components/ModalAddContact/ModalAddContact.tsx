import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, Stack, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { contactsTypes } from '@/utills/options'
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";

interface Props {
  open: boolean,
  handleClose: () => void
  addContacts: (newContact: Icontact) => void
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
};

const schema = yup
  .object({
    name: yup.string().required('Required field'),
    text: yup.string().required('Required field'),
  })
  .required()

const ModalAddContact = ({ open, handleClose, addContacts }: Props) => {
  const [type, setType] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Icontact>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<Icontact> = (values) => {
    addContacts(values)
    handleClose()
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} component="form" onSubmit={handleSubmit(onSubmit)}>
        <Typography id="modal-modal-title" variant="h6" component="h2" mb={2}>
          Add custom contact
        </Typography>
        <Stack gap={2} mb={2}>
          <FormControl fullWidth>
            <InputLabel id="contact-select">Contact type</InputLabel>
            <Select
              labelId="contact-select-label"
              id="contact-select"
              value={type}
              label="Contact type"
              onChange={(e: any) => setType(e.target.value)}
              size="small"
            >
              {contactsTypes.map(item => (
                <MenuItem value={item.value} key={item.value}>{item.label}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField label="Name" size="small" {...register("name")} error={!!errors.name} />
          <TextField label="Text" size="small" {...register("text")} error={!!errors.text} />
          {type === 1 && (
            <TextField label="Link" size="small" {...register("link")} />
          )}
        </Stack>
        <Stack direction="row" justifyContent="flex-end" gap={1}>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" type="submit">
            Add contact
          </Button>
        </Stack>
      </Box>
    </Modal>
  )
}

export default ModalAddContact;