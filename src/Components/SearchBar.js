import { Paper, TextField } from "@material-ui/core";
import { useState } from "react";

export default function SearchBar() {
   const [searchTerm, setSearchTerm] = useState("");
   //for taking input from user
   const handleChange = (e) => setSearchTerm(e.target.value);

   //for taking values from the state when user click serch button
   function handleSubmit(e) {
      e.preventDefault();
      onFormSubmit(searchTerm);
   }
   return (
      <Paper elevation={6} style={{ padding: "25px" }}>
         <form onSubmit={handleSubmit}>
            <TextField fullWidth label="Search" onChange={handleChange}></TextField>
         </form>
      </Paper>
   );
}
