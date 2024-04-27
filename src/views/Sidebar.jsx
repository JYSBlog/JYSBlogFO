// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Sidebar(props) {
    const { description, social, title } = props;

    return (
        <Grid item display="flex" alignItems="flex-start">
            <Paper elevation={0} sx={{width: '850px', height: '300px', p: 2, bgcolor: 'grey.200'}}>
                <Typography variant="h6" gutterBottom>
                    {title}
                </Typography>
                <Typography>{description}</Typography>
                <div style={{textAlign: 'center',width: '820px'}}>
                    <Typography variant="h6" gutterBottom sx={{mt: 3}}>
                        Social
                    </Typography>
                    {social.map((network) => (
                        <Link
                            display="block"
                            variant="body1"
                            href="#"
                            key={network.name}
                            sx={{mb: 0.5,display: 'flex', justifyContent: 'center'}}
                        >
                            <Stack direction="row" spacing={1} alignItems="center">
                                <network.icon/>
                                <span>{network.name}</span>
                            </Stack>
                        </Link>
                    ))}
                </div>
            </Paper>
        </Grid>
    );
}

Sidebar.propTypes = {
    description: PropTypes.string.isRequired,
    social: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.elementType,
            name: PropTypes.string.isRequired,
        }),
    ).isRequired,
    title: PropTypes.string.isRequired,
};

export default Sidebar;