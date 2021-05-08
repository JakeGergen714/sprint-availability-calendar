/** @format */

import React, { Component } from "react";
import { Box, Flex } from "rebass";
import { getWeekDayFromIndex } from "./WorkDay";
import DayColumn from "./DayColumn";

const boxStyles = {
   mx: "auto",
   borderLeft: "1px solid gray",
   px: "10px",
   width: "100%",
   height: "10%",
};

export default class WeeklyLayout extends Component {
   render() {
      return (
         <Flex sx={{ flexDirection: "column" }}>
            <Flex
               sx={{
                  flex: 1,
                  flexDirection: ["column", "row"],
                  justifyContent: "center",
               }}>
               <Box sx={boxStyles}>
                  <DayColumn day={getWeekDayFromIndex(1)} />
               </Box>

               <Box sx={boxStyles}>
                  <DayColumn day={getWeekDayFromIndex(2)} />
               </Box>

               <Box sx={boxStyles}>
                  <DayColumn day={getWeekDayFromIndex(3)} />
               </Box>

               <Box sx={boxStyles}>
                  <DayColumn day={getWeekDayFromIndex(4)} />
               </Box>

               <Box sx={boxStyles}>
                  <DayColumn day={getWeekDayFromIndex(5)} />
               </Box>

               <Box sx={boxStyles}>
                  <DayColumn day={getWeekDayFromIndex(6)} />
               </Box>
               <Box sx={boxStyles}>
                  <DayColumn day={getWeekDayFromIndex(7)} />
               </Box>
            </Flex>
         </Flex>
      );
   }
}
