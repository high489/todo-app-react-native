export const getFullFormattedDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
  }).format(date)
}