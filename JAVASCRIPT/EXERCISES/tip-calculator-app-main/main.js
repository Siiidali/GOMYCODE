// Dom elements :
const tip_amount = document.querySelector(".price-1");
const total = document.querySelector(".price-2");
const reset_btn = document.querySelector(".btn-reset");
const btn_5 = document.querySelector(".btn-5");
const btn_10 = document.querySelector(".btn-10");
const btn_15 = document.querySelector(".btn-15");
const btn_20 = document.querySelector(".btn-20");
const btn_25 = document.querySelector(".btn-25");
const btn_50 = document.querySelector(".btn-50");
const input_bill = document.querySelector("#bill_input");
const input_people = document.querySelector("#people_input");

let total_value, tip_amount_value, number_people, bill_value;

// reset functionality :

const resetThings = () => {
  tip_amount.textContent = "$0.00";
  total.textContent = "$0.00";
  input_bill.value = 0.0;
  input_people.value = 1;
};

// selecting the tip

reset_btn.addEventListener("click", () => {
  resetThings();
});

let percent;
const btns = [btn_5, btn_10, btn_15, btn_25, btn_50];

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("tip-activ");
    percent = Number(btn.textContent);
    btns.forEach((button) => {
      if (button !== btn) {
        button.classList.remove("tip-activ");
      }
    });
  });
});

document.querySelectorAll("input").forEach((inpt) => {
  inpt.addEventListener("change", (e) => {
    bill_value = Number(input_bill.value);
    number_people = Number(input_people.value);
    tip_amount_value = (bill_value * percent) / number_people / 100;
    total_value = bill_value / number_people + tip_amount_value;
    tip_amount.textContent = "$" + tip_amount_value.toFixed(2);
    total.textContent = "$" + total_value.toFixed(2);
  });
});
