/** @format */

import React, { Component } from "react";
import { Box, Flex, Text } from "rebass";

const boxStyles = {
   width: "100%",
   justifyContent: "center",
   alignItems: "center",
   flex: 1,
};

const lineBoxStyles = {
   width: "100%",
   flex: 2,
   justifyContent: "center",
   alignItems: "center",
};

export default class TimeOfDayDivider extends Component {
   render() {
      return (
         <Flex sx={{ flexDirection: "row", width: "100%"}}>
            <Box style={lineBoxStyles}>
               <hr style={{ width: "100%" }}></hr>
            </Box>
            <Box style={boxStyles}>
               <Text style={{ textAlign: "center", padding: 0, margin: 0 }}>9:30</Text>
            </Box>
            <Box style={lineBoxStyles}>
               <hr style={{ width: "100%" }}></hr>
            </Box>
         </Flex>
      );
   }
}
