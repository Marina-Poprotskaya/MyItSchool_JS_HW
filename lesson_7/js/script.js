let contacts = function() {
    this.get = function() {
      this.name = prompt('Введите имя','');
      this.lastName = prompt('Введите фамилию','');
      this.phone = prompt('Введите номер телефона','+375**-***-**-**');
      this.mail = prompt('Введите ваш e-mail','');
      this.age = prompt('Введите ваш возраст','18');
      this.check();
    };
    this.check = function() {
      if (this.age < 18 && this.age > 0) {
       alert('Доступ закрыт');
      } else if ( this.age < 0 || !isFinite(this.age)) {      
       alert('Проверьте правильность ввода информации');
       this.getAge = function() {
        this.age = prompt('Введите ваш возраст','18');
       }
       this.getAge();
      }
      this.showResult();
    };
    this.showResult = function () {
      document.write('Имя: ' + this.name + '<br>'+ 'Фамилия: ' + this.lastName + '<br>'+ 'Возраст: ' + this.age +';' + '<br>'+ 'Контактые данные:' + '<br>'+ 'Телефон: ' + this.phone+ '<br>'+ 'Почта: '+  this.mail);
    };
  };
  let Contacts = new contacts();
  Contacts.get();
  