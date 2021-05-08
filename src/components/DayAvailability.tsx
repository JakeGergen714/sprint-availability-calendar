/** @format */

import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Status } from "./Status";

interface DayAvailabilityProps {
   teamAvailability: Status;
   outages: any[];
}

interface DayAvailabilityState {}

const createCardStyle = (status: Status) => {
   return { backgroundColor: status };
};

export default class DayAvailability extends Component<DayAvailabilityProps, DayAvailabilityState> {
   render() {
      return <Card style={createCardStyle(this.props.teamAvailability)}>ello</Card>;
   }
}
