import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import SchoolIcon from '@mui/icons-material/School';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';

export default function LabelBottomNavigation({ value, setValue }) {

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation showLabels sx={{ width: 500 }} value={value} onChange={handleChange}>

            <BottomNavigationAction
                label="family"
                value="family"
                icon={<FamilyRestroomIcon />}
            />
            <BottomNavigationAction
                label="school"
                value="school"
                icon={<SchoolIcon />}
            />
            <BottomNavigationAction label="friend" value="friend" icon={<Diversity1Icon />} />
        </BottomNavigation>
    );
}
