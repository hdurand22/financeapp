import { Box, useTheme } from '@mui/material';

// eslint-disable-next-line
type Props = {}

const Dashboard = (props: Props) => {
    const { palette } = useTheme();
  
    return (
    <Box color={palette.grey[300]}>Dashboard</Box>
  )
}

export default Dashboard