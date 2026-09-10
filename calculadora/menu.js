export default (() => {
  const button = document.querySelector('.button')
  const input = document.querySelector('.screen')

  button.addEventListener('click', (event) => {
    const value = event.target.textContent;

    if (event.target.classList.contains('button-number')) {
      input.value += value;
    }

    if (event.target.classList.contains('button-symbol')) {
      input.value += value;
    }

    if (event.target.classList.contains('button-symbol-delete')) {
      input.value = input.value.slice(0, -1);
      if (input.value === '') {
        input.value = '0';
      }
    }




    if (value === 'C') {
      input.value = '';
      if (input.value === '') {
        input.value = '0';
      }
    }

    if (value === '+') {
      input.value = '+'
    }

    if (value === '=') {
      let x = input.value
    }


  })

})();



//   const seven = document.querySelector('.button-number-seven')
//   const eight = document.querySelector('.button-number-eight')
//   const nine = document.querySelector('.button-number-nine')
//   const four = document.querySelector('.button-number-four')
//   const five = document.querySelector('.button-number-five')
//   const six = document.querySelector('.button-number-six')
//   const one = document.querySelector('.button-number-one')
//   const two = document.querySelector('.button-number-two')
//   const three = document.querySelector('.button-number-three')
//   const zero = document.querySelector('.button-number-zero')
//   const dot = document.querySelector('.button-number-dot')
//   const equal = document.querySelector('.button-number-equal')
//   const clear = document.querySelector('.button-clear')
//   const division = document.querySelector('.button-division')
//   const multiplication = document.querySelector('.button-multiplication')
//   const subtraction = document.querySelector('.button-subtraction')
//   const addition = document.querySelector('.button-addition')

//   seven.addEventListener('click', () => {
//     seven.classList.toggle("active")
//   })

//   eight.addEventListener('click', () => {
//     eight.classList.toggle("active")
//   })

//   nine.addEventListener('click', () => {
//     nine.classList.toggle("active")
//   })

//   four.addEventListener('click', () => {
//     four.classList.toggle("active")
//   })

//   five.addEventListener('click', () => {
//     five.classList.toggle("active")
//   })

//   six.addEventListener('click', () => {
//     six.classList.toggle("active")
//   })

//   one.addEventListener('click', () => {
//     one.classList.toggle("active")
//   })

//   two.addEventListener('click', () => {
//     two.classList.toggle("active")
//   })

//   three.addEventListener('click', () => {
//     three.classList.toggle("active")
//   })

//   zero.addEventListener('click', () => {
//     zero.classList.toggle("active")
//   })

//   dot.addEventListener('click', () => {
//     dot.classList.toggle("active")
//   })

//   equal.addEventListener('click', () => {
//     equal.classList.toggle("active")
//   })

//   clear.addEventListener('click', () => {
//     clear.classList.toggle("active")
//   })

//   division.addEventListener('click', () => {
//     division.classList.toggle("active")
//   })

//   multiplication.addEventListener('click', () => {
//     multiplication.classList.toggle("active")
//   })

//   subtraction.addEventListener('click', () => {
//     subtraction.classList.toggle("active")
//   })

//   addition.addEventListener('click', () => {
//     addition.classList.toggle("active")
//   })

// })();

