let countEl = document.getElementById("count-el");
let prevEl = document.getElementById('prev-el')

let currEntries = 0;
const increment = () => {
  currEntries += 1;
  countEl.innerText = currEntries;
};

const save = () => {
    prevEl.innerText += ` ${currEntries} -`
    currEntries = 0;
    countEl.innerText = currEntries;
};
