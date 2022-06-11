import React from "react";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Fab from "@material-ui/core/Fab";

function Note(props){

    function eraseNote (){
       props.onDelete(props.id);
    }


    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <Fab onClick = {eraseNote}><RemoveCircleIcon/></Fab>
        </div>
    );  
}

export default Note;