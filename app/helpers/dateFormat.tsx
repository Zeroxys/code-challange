const formatDate = (date: string | number | Date) => {
  const dateIso = new Date(date);
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return dateIso.toLocaleDateString('es-ES', options).split(',')[1];
};

export default formatDate;
