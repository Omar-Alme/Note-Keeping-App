import React, {useState} from "react";
import Heading from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App(){

    const [items, setItems] = useState([]);

    function addNote(note){
        setItems((prevItems) => {
            return [...prevItems, note];
        });
    }

    function deleteNote(id){
      setItems(prevItems => {
         return prevItems.filter((noteItems, index) => {
              return index !== id;
          });
      });
    }

    return (
    <div>
        <Heading/>
        <CreateArea onAdd={addNote} />
        
       { items.map((noteItems, index) => {
            return <Note 
                     key={index}
                     id={index}
                     title={noteItems.title} 
                     content={noteItems.content}
                     onDelete={deleteNote}    
                     />;
        })}
        
        
        <Footer/>
    </div>
    );
}

export default App;



//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/