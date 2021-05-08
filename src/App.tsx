/** @format */

import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Box, Flex } from "rebass";
import WeeklyLayout from "./components/WeeklyLayout";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

function App() {
   return (
      <div>
         <Flex sx={{ flexDirection: "column"}}>
            <Box>Header</Box>

            <Flex
               sx={{
                  flex: 1,
                  flexDirection: ["column", "row"],
               }}>
               <Box
                  sx={{
                     flexBasis: ["auto", 64],
                     order: 1,
               
                  }}>
                  Nav
               </Box>

               <Box
                  sx={{
                     flex: 1,
                     minWidth: 0,
                     order: 2,
                  }}>
                  <WeeklyLayout></WeeklyLayout>
                  <hr />
                  <WeeklyLayout></WeeklyLayout>
               </Box>
            </Flex>

            <Box>Footer</Box>
         </Flex>
      </div>
   );
}

export default App;
