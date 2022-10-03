import moment from 'moment'

/*
utility to format date using moment
* @param {format}                 format, example : 'dddd' , 'MMM Do YY'
 * @param   {date}                date string
 * @returns {String}              The resolved value , example: Aug 31
 */
export const getFormattedDate = (date, format = 'YYYY-MM-DD') =>
  date ? moment(new Date(date)).format(format) : ''
