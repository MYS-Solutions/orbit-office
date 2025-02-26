import {ReactNode} from 'react';
import { Card, CardContent, Typography, Avatar } from '@mui/material';

function ServiceCard({ icon, name, brief }: {icon: ReactNode, name: string, brief: string}) {
    return (
        <Card sx={{width: 300, mt: 1, transition: 'margin 0.2s ease-in-out', ':hover': {mb: 1, mt: 0}}}>
            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', ':hover>div': {backgroundColor: "primary.main"}}}>
                <Avatar sx={{backgroundColor: "secondary.main", transition: 'background-color 0.2s ease-in-out'}}>
                    {icon}
                </Avatar>
                <Typography variant="h5" component="h5">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {brief}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ServiceCard;