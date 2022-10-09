// setando o contador inicial
let count = 0;

// Selecionando o valor e os botões
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
   btn.addEventListener('click', function(e){
      const styles = e.currentTarget.classList;
      if(styles.contains("decrease")){
         count--;
      }
      else if(styles.contains("increase")){
         count++;
      }
      value.textContent = count;
   })
});
