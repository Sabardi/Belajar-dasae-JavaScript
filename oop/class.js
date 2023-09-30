function mobil(merek, warna, maxSpeed, nomerpolisi) {
    this.merek = merek;
    this.warna = warna;
    this.maxSpeed = maxSpeed;
    this.nomerpolisi = nomerpolisi;
  }
  mobil.prototype.drive = function () {
    console.log(`${this.brand} ${this.color} is driving`);
  }

  const car1 = new mobil('Toyota',200,'Silver', 'to-1');
  car1.merek ='yamaha'
  car1.warna ='ping'
  car1.maxSpeed ='125'
  car1.nomerpolisi ='dr 55262 gh'
  console.log(car1)