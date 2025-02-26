import {ReactNode} from 'react';
import { Card, CardContent, Box, Typography, Avatar } from '@mui/material';
import { CardActions, Button } from '@mui/material';

function OfferCard({ icon, name, description }: {icon: ReactNode, name: string, description: string}) {
    return (
        <Card  sx={{width: 300, mt: 1}}>
            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', ':hover>div>div': {backgroundColor: "primary.main"}}}>
                <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', mb: 1, gap:1}}>
                    <Avatar sx={{backgroundColor: "secondary.main", transition: 'background-color 0.2s ease-in-out'}}>
                        {icon}
                    </Avatar>
                    <Typography variant="h5" component="h5">
                        {name}
                    </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
};

export default OfferCard;