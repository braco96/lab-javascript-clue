// ITERATION 1

// Suspects Array
// Creamos un arreglo con todos los sospechosos posibles del juego. Cada
// objeto contiene la información necesaria para poder mostrar detalles en
// la solución del misterio.
 
const suspectsArray = [
  {
    // Jacob Green es un empresario con muchos contactos
    firstName: 'Jacob', // nombre de pila del sospechoso
    lastName: 'Green', // apellido del sospechoso
    occupation: 'Entrepreneur', // a qué se dedica
    age: 45, // edad del personaje
    description: 'He has a lot of connections', // breve descripción
    image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg', // enlace a su imagen
    color: 'green' // color con el que se identifica en el tablero
  },
  {
    // Doctor Orchid, científica experta en toxicología
    firstName: 'Doctor',
    lastName: 'Orchid',
    occupation: 'Scientist',
    age: 26,
    description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'white'
  },
  {
    // Victor Plum, diseñador de videojuegos
    firstName: 'Victor',
    lastName: 'Plum',
    occupation: 'Designer',
    age: 22,
    description: 'Billionaire video game designer',
    image: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
    color: 'purple'
  },
  {
    // Kasandra Scarlet, actriz famosa
    firstName: 'Kasandra',
    lastName: 'Scarlet',
    occupation: 'Actor',
    age: 31,
    description: 'She is an A-list movie star with a dark past',
    image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'red'
  },
  {
    // Eleanor Peacock, socialité adinerada
    firstName: 'Eleanor',
    lastName: 'Peacock',
    occupation: 'Socialité',
    age: 36,
    description: 'She is from a wealthy family and uses her status and money to earn popularity',
    image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    color: 'blue'
  },
  {
    // Jack Mustard, exjugador de fútbol
    firstName: 'Jack',
    lastName: 'Mustard',
    occupation: 'Retired Football player',
    age: 62,
    description: 'He is a former football player who tries to get by on his former glory',
    image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
    color: 'yellow'
  }
];

// Rooms Array
// Listado de las diferentes estancias de la mansión donde pudo ocurrir el crimen
 
const roomsArray = [
  { name: 'Dining Room' },
  { name: 'Conservatory' },
  { name: 'Kitchen' },
  { name: 'Study' },
  { name: 'Library' },
  { name: 'Billiard Room' },
  { name: 'Lounge' },
  { name: 'Ballroom' },
  { name: 'Hall' },
  { name: 'Spa' },
  { name: 'Living Room' },
  { name: 'Observatory' },
  { name: 'Theater' },
  { name: 'Guest House' },
  { name: 'Patio' }
];

// Weapons Array
// Posibles armas utilizadas en el asesinato junto con su peso para dar más detalles
 
const weaponsArray = [
  { name: 'rope', weight: 10 },
  { name: 'knife', weight: 8 },
  { name: 'candlestick', weight: 2 },
  { name: 'dumbbell', weight: 30 },
  { name: 'poison', weight: 2 },
  { name: 'axe', weight: 15 },
  { name: 'bat', weight: 13 },
  { name: 'trophy', weight: 25 },
  { name: 'pistol', weight: 20 }
];


// ITERATION 2
// Función que recibe un arreglo y devuelve un elemento aleatorio del mismo
function selectRandom(cards) {
  // Si el arreglo está vacío no hay carta que devolver
  if (!cards.length) return undefined;
  // Math.random() genera un número entre 0 y 1; lo multiplicamos por la longitud
  // y usamos Math.floor para obtener un índice válido
  const randomIndex = Math.floor(Math.random() * cards.length);
  return cards[randomIndex]; // devolvemos la carta en la posición calculada
}

function selectRandom() {}

function pickMystery() {}
// Crea un objeto con un sospechoso, un arma y una habitación elegidos al azar
function pickMystery() {
  return {
    suspect: selectRandom(suspectsArray), // seleccionamos un sospechoso
    weapon: selectRandom(weaponsArray), // seleccionamos un arma
    room: selectRandom(roomsArray) // seleccionamos una habitación
  };
}


// ITERATION 3

function revealMystery() {}
// A partir de un objeto misterio, construye la frase que revela el crimen
function revealMystery(envelope) {
  const { suspect, weapon, room } = envelope; // extraemos cada carta para facilitar la lectura
  // Construimos el mensaje final siguiendo el formato solicitado
  return `${suspect.firstName} ${suspect.lastName} killed Mr. Boddy using the ${weapon.name} in the ${room.name}!`;
}
