// script.js
const calculate = () => {
    const name = document.getElementById('name').value;
    let price = Number(document.getElementById('startingBid').value);

    if (!name || isNaN(price)) {
        alert("Please enter a valid name and starting bid.");
        return;
    }

    // Образование
    const education = Number(document.getElementById('education').value);
    price *= education;

    // Семейное состояние
    const netWorth = Number(document.getElementById('netWorth').value);
    price *= netWorth;

    // Кастовая принадлежность
    const caste = Number(document.getElementById('caste').value);
    price += caste;

    // Навыки
    const skills = Array.from(document.getElementsByClassName('skills'));
    const skillsBonus = skills
        .filter(skill => skill.checked)
        .reduce((sum, skill) => sum + Number(skill.value), 0);
    price += skillsBonus;

    // Возраст
    const age = Array.from(document.querySelectorAll('input[name="age"]'));
    age.forEach(option => {
        if (option.checked) {
            price *= Number(option.value);
        }
    });

    // Репутация
    const reputation = Array.from(document.getElementsByClassName('reputation'));
    reputation.forEach(rep => {
        if (rep.checked) {
            price *= Number(rep.value);
            if (rep.value == -20) {
                price += Number(rep.value);
            }
        }
    });

    // Любовное письмо
    const loveLetter = document.getElementById('loveLetter').value;

    // Создаем объект
    const person = {
        bride_name: name,
        bride_price: price,
        letter_to_bride: loveLetter
    };

    // Отображаем результат
    document.getElementById('result').innerHTML = `
        <p>Your price for ${person.bride_name} is $${person.bride_price.toFixed(2)}</p>
        <p>${person.letter_to_bride ? "Love Letter: " + person.letter_to_bride : ""}</p>
    `;
};

// Event listener
document.getElementById('calculateButton').addEventListener('click', calculate);

