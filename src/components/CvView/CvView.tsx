import { useStore } from '@/store/store';
import * as s from './style'
import { Box } from '@mui/material';

const CvView = () => {
  const { fullName, jobTitle, contacts } = useStore(state => state.cv)
  return (
    <s.CvBox>
      <Box>
        {fullName}
      </Box>
      <Box>
        {jobTitle}
      </Box>
    </s.CvBox>
  )
}

export default CvView;