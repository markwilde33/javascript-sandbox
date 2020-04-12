const folks = [
  { name: 'booboo', silly: true },
  { name: 'hoohoo', silly: false },
  { name: 'looloo', silly: false },
  { name: 'googoo', silly: true },
  { name: 'noonoo', silly: true },
]

const getSillyFolks = (folks) => {
  return folks.filter(name => name.silly);
};

export{getSillyFolks, folks as default} 