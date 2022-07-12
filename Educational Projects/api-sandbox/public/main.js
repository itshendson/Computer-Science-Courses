const postButton = document.getElementById('submit-button');

let database = [];

postButton.addEventListener('click', async ()=> {
    const newFood = document.getElementById('input-of-food').value;

    const options = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
            foodName: newFood,
            foodId: foodId
        })
    }

    const response = await fetch('/api/v1/foods', options);
    const responseJson = await response.json();
    database.push(newFood);
    console.log(database);


})