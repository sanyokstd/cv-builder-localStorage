import { Stack } from "@mui/material";
import * as s from './style'
import { CvEdit, CvView } from "@/components";
const BuildPage = () => {
  return (
    <Stack direction="row">
      <s.Left>
        <CvEdit />
      </s.Left>
      <s.Right>
        <CvView />
      </s.Right>
    </Stack>
  )
}

export default BuildPage;