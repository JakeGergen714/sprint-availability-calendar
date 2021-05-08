/** @format */

export enum WeekDay {
   MONDAY = "Monday",
   TUESDAY = "Tuesday",
   WEDNESDAY = "Wednesday",
   THURSDAY = "Thursday",
   FRIDAY = "Friday",
   SATURDAY = "Saturday",
   SUNDAY = "Sunday",
   UNDEFINED = "UNDEFINED",
}

/**
 * Get the WorkDay associated with the index
 *
 * Returns:
 *  MONDAY when index = 1
 *  TUESDAY when index = 2
 *  WEDNESDAY when index = 3
 *  THURSDAY when index = 4
 *  FRIDAY when index = 5
 *  SATURDAY when index = 6
 *  SUNDAY when index = 7
 **/
export function getWeekDayFromIndex(index: number): WeekDay {
   switch (index) {
      case 1: {
         return WeekDay.MONDAY;
      }
      case 2: {
         return WeekDay.TUESDAY;
      }
      case 3: {
         return WeekDay.WEDNESDAY;
      }
      case 4: {
         return WeekDay.THURSDAY;
      }
      case 5: {
         return WeekDay.FRIDAY;
      }
      case 6: {
         return WeekDay.SATURDAY;
      }
      case 7: {
         return WeekDay.SUNDAY;
      }
      default:
         return WeekDay.UNDEFINED;
   }
}
