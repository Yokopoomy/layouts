import React from 'react';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

const IconSwitch = ({icon, onSwitch}) => {
    return (
        <div className="flex justify-end content-center my-4 mx-12">
            <button type="button" onClick={onSwitch}>
                {icon === "view_list" ? <ViewListIcon fontSize="large" color="action"/> : <ViewModuleIcon fontSize="large" color="action"/>}
            </button>
        </div>
    );
};

export default IconSwitch;