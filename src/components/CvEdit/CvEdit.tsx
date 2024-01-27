import { Accordion, AccordionDetails, AccordionSummary, IconButton, Stack, TextField, Tooltip, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import { ModalAddContact } from '@/components'
import { useForm } from "react-hook-form";
import { useStore } from "@/store/store";

const CvEdit = () => {
  const cvValues = useStore(state => state.cv)
  const setCv = useStore(state => state.setCv)
  const [openAddContact, setOpenAddContact] = useState(false);
  const handleOpenAddContact = () => setOpenAddContact(true);
  const handleCloseAddContact = () => setOpenAddContact(false);

  const {
    register,
    watch,
    setValue
  } = useForm<ICv>({
    defaultValues: cvValues || {
      fullName: '',
      jobTitle: '',
      contacts: []
    },
  })
  const values = watch()

  useEffect(() => {
    setCv(values)
  }, [values.fullName, values.jobTitle, values.contacts])

  const addContacts = (newContact: Icontact) => {
    setValue('contacts', [...values.contacts, newContact])
  }

  const deleteContact = () => {
    const withoutLast = values.contacts.slice(0, -1)
    setValue('contacts', withoutLast)
  }

  return (
    <>
      <form>
        <Stack gap={1}>
          <Accordion defaultExpanded elevation={2}>
            <AccordionSummary

              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography fontWeight={500}>
                Main info
              </Typography>

            </AccordionSummary>
            <AccordionDetails>
              <Stack gap={2}>
                <TextField label="Full name" fullWidth size="small" {...register("fullName")} />
                <TextField label="Job title" fullWidth size="small" {...register("jobTitle")} />
              </Stack>
            </AccordionDetails>
          </Accordion>

          <Accordion elevation={2}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography fontWeight={500}>
                Contacts
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack gap={2}>
                {values.contacts.map((item, index) => (
                  <TextField key={index} label={item.name} fullWidth size="small" value={item.text} {...register(`contacts.${index}.text`)} helperText={item.link && item.link} />
                ))}
                <Stack direction="row" justifyContent="flex-end">
                  {values.contacts.length > 0 && (
                    <Tooltip title="Delete contact" placement="top" onClick={deleteContact}>
                      <IconButton color="error">
                        <ClearIcon />
                      </IconButton>
                    </Tooltip>
                  )}

                  <Tooltip title="Add contact" placement="top">
                    <IconButton color="success" onClick={handleOpenAddContact}>
                      <AddIcon />
                    </IconButton>
                  </Tooltip>
                </Stack>
              </Stack>
            </AccordionDetails>
          </Accordion>
        </Stack>
      </form>
      {openAddContact && (
        <ModalAddContact open={openAddContact} handleClose={handleCloseAddContact} addContacts={addContacts} />
      )}
    </>
  )
}

export default CvEdit;