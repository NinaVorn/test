function myFirstApp(name, age) {
  alert("Привет, меня зовут " + name + "и это моя первая программа!");
  function showSkills() {
      let skills = ["html", "css", "Ps"];

      for (let i = 0; i < skills.length; i++) {
        document.write ("Я владею " + skills[i] + '<br>')
      }
      
      
  }
  showSkills();

  function checkAge(age) {
      if (age > 18) {
          alert("Добро пожаловать!")
      }
      else {
         alert("До пенсии еще далеко.")
      }
      
  }
  checkAge(32);
  function calcPow(num) {
      console.log (num * num)
    //функционал квадрат числа

  }
  calcPow(4)
}

myFirstApp("Ivan", 32)

