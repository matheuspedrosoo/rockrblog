import { format } from 'date-fns'

export function formatDate(date: string) {
  const newDate = date.replace('z', '')
  const dateFormatted = format(new Date(newDate), `MMM dd` + ', ' + `yyyy`)
  return dateFormatted
}
