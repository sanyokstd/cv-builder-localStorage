import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form"
import * as s from './style'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useStore } from "@/store/store";

const schema = yup
  .object({
    userName: yup.string().required('Required field'),
  })
  .required()

type FormData = {
  userName: string
}

const AuthPage = () => {
  const setUserName = useStore(state => state.setUserName)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })
  const onSubmit: SubmitHandler<FormData> = ({ userName }) => {
    setUserName(userName)
  }

  return (
    <Container maxWidth="sm">
      <Paper elevation={3}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <s.FormBody gap={2}>
            <Typography variant="h4" align="center" mb="20px">
              Hello, what it is your name?
            </Typography>
            <TextField label="My name"
              error={!!errors.userName}
              {...register("userName")}
              helperText={errors.userName?.message}
            />
            <Button variant="contained" size="large" type="submit">
              Submit
            </Button>
          </s.FormBody>
        </form>

      </Paper>

    </Container>
  )
}

export default AuthPage;