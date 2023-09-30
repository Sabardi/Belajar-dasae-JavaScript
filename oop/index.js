const mobil = {
    // properties
    merek: 'yamaha',
    warna: 'merah',
    maxSpeed: 150,
    chassisNumber: 'DR 2345 AD',
    // methods
    drive: () => {
      console.log('driving');
    },
    reverse: () => {
      console.log('reversing');
    },
    turn: () => {
      console.log('turning');
    }
  }

  console.log(mobil.merek); // Ford
console.log(mobil.warna); // red
console.log(mobil.maxSpeed); // 200
console.log(mobil.chassisNumber); // DR 2345 AD

// untuk memeanggil properti nya
mobil.drive();
mobil.reverse();
mobil.turn();