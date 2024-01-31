export const headerLinks = [
    {
      label: 'Inicio',
      route: '/',
    },
    {
      label: 'Crear Evento',
      route: '/events/create',
    },
    {
      label: 'Mi Cuenta',
      route: '/profile',
    },
  ]
  
  export const eventDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
  }