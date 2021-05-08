/** @format */

import React, { Component } from "react";
import { Box, Heading } from "rebass";
import DayAvailability from "./DayAvailability";
import { Status } from "./Status";
import TimeOfDayDivider from "./TimeOfDayDivider";
import { WeekDay } from "./WorkDay";

interface DayColumnProps {
   day: WeekDay;
}
interface DayColumnState {}

const style = {
};

const headerStyle = {
   textAlign: "center",
   justifyContent: "center",
   fontSize: [1, 2, 3, 4],
};

export default class DayColumn extends Component<DayColumnProps, DayColumnState> {
   render() {
      return (
         <Box style={style}>
            <Heading sx={headerStyle}>{this.props.day}</Heading>
            <DayAvailability teamAvailability={Status.GREEN}></DayAvailability>
            <p>t1</p>
            <TimeOfDayDivider />
            <p>t2</p>
            <TimeOfDayDivider />
            <p>t3</p>
            <TimeOfDayDivider />
            <TimeOfDayDivider />
            <TimeOfDayDivider />
            <TimeOfDayDivider />
         </Box>
      );
   }
}
