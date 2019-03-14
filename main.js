const btn = document.querySelector('button');
const section = document.querySelector('section');

const signs = 'abcdefghij1234567890';
const codesNumber = 1000;
const signsNumber = 10;


const signsGenerator = () => {
    for (let i = 0; i < codesNumber; i++) {
        let code = '';
        for (let i = 0; i < signsNumber; i++) {
            const index = Math.floor(Math.random() * signs.length);
            code += signs[index];
        }
        const div = document.createElement('div');
        div.textContent = code;
        section.appendChild(div);
    }
}

btn.addEventListener('click', signsGenerator)




































// const chars = 'ABCDEFGIJK0123456789';

// const btn = document.querySelector('button');
// const section = document.querySelector('section');

// const codesNumber = 1000;
// const charsNumber = 12;

// const codesGeneretor = () => {
//  for (let i = 0; i < codesNumber; i++) {
//   let code = "";
//   for (let i = 0; i < charsNumber; i++) {
//    const index = Math.floor(Math.random() * 20)
//    code += chars[index];
//   }
//   const div = document.createElement('div');
//   div.textContent = code;
//   section.appendChild(div)
//  }
// }

// btn.addEventListener('click', codesGeneretor)