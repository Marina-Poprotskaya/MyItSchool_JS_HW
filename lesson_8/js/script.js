// Автомобиль. Возможные методы: ввод информации об авто (марка, номер), вкл./выкл.
// двигателя, вкл./выкл. передачи (вперед, назад, нейтральная), движение вперед и назад
// (ввод информации о скорости движения), расчет пройденных километров.

let Vehicle = function(horsepower) {        //СОЗДАЮ ПРОТОТИП

  let status = false;

  horsepower = horsepower || 0;

  this.startEngine = function() {
    status = true;
  };

  this.stopEngine = function() {
    status = false;
  };

  this.getStatus = function() {
    return status;
  };

  this.getHorsepower = function() {
    return horsepower;
  };
  
};


//Создаем автомобиль


let Car = function(horsepower, fuelTank) {             //Функциональное наследование, из транспорного средства делаем машину
  Vehicle.apply(this, arguments);

  let run = true;

  fuelTank = fuelTank || 50;

  this.fuelAmount = 0;

  this.setFuel = function(amount) {
    if(amount > 0 && amount <= fuelTank) {
      this.fuelAmount = amount;
    } else {
      this.fuelAmount = 0;
    }
  };

  this.getFuel = function() {
    return this.fuelAmount;
  }
                                               
  this.startEngine = function() {                   //используем, если хотим изменить/расширить метод родителя в наследнике
    Vehicle.call(this);                             // можно и через apply
    if (this.fuelAmount > 0) {
    this.status = true;
  } else this.stopEngine();
  };

  this.gearOn = function() {
    this.run = true;
  };

  this.gearOff = function() {
    this.run = false;
  };

  this.info = function() {
    return 'Лошадиные силы:' + horsepower + '. Объем топливного бака:' + fuelTank + '. Залито топлива:' + this.fuelAmount + '. Передача:' + (this.run ? 'включена' : 'нейтральная') + '. Двигатель:' + (this.getStatus() ? 'заведен' : 'заглушен') + '.';
  }

};

let car = new Car(120, 40);
console.log(car);



//Создаем грузовик

let Truck = function(horsepower, fuelTank, carrying) {
  Vehicle.apply(this,arguments);

let run = true;

fuelTank = fuelTank || 100;
carrying = carrying || 10;

this.fuelAmount = 0;
this.goodsWeight = 0;

this.setFuel = function(amount) {
  if(amount > 0 && amount <= fuelTank) {
    this.fuelAmount = amount;
  } else {
    this.fuelAmount = 0;
  }
};

this.setGoods = function(weight) {
  if (weight < carrying && weight > 0) {
    this.goodsWeight = weight;
  } else {
   alert ('Превышен максимальный вес');
}
};

this.startEngine = function() {
  Vehicle.call(this);
  if (this.fuelAmount > 0) {
  this.status = true;
} else this.stopEngine()
};


this.firstGearOn = function() {
  this.run = true;
};

this.secondGearOn = function() {
  if (this.firstGearOn == true) {
    this.run = true;
  } else alert ('Включите первую передачу')
};

this.thirdGearOn = function() {
  if (this.secondGearOn == true) {
    this.run = true;
  } else alert ('Включите вторую передачу')
};

this.gearOff = function() {
  this.run= false;
};

this.info = function() {
  return 'Лошадиные силы:' + horsepower + '. Объем топливного бака, литров: ' + fuelTank +  '. Грузоподъемность, тонн: ' + carrying + '. Залито топлива, литров: ' + this.fuelAmount + '. Загружено, тонн: '+ this.goodsWeight +'. Передача: ' + (this.run ? 'включена' : 'нейтральная') + '. Двигатель:' + (this.getStatus() ? 'заведен' : 'заглушен') + '.';
}

}

let truck = new Truck (400,120,20);
console.log(truck);