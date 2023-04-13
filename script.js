const img_pot = document.querySelectorAll('.img__pot');
const popup__container = document.querySelector('.popup__container');
const title_reward = document.querySelector('#title_reward');
const reward__img = document.querySelector('.reward__img');
const name__reward = document.getElementById('name__reward');
const cpntact__me = document.getElementById('cpntact__me');
const fruits = ["lose","Free Hug Ticket", "Free Kiss Ticket", "Free Date Ticket", "Free Sting Ticket", "Free Movie Date Ticket", "Free Mjas Account Ticket"];

img_pot.forEach((pot) => {
    pot.addEventListener('click', () => {
        pot.src = "break.png";
        let random = Math.floor(Math.random() * fruits.length);
        popup__container.classList.add('active');
        if (fruits[random] == fruits[0]) {
            title_reward.innerHTML =  "ព្យាយាមម្ដងទៀត";
            reward__img.src = "img/try" + ".gif";
            cpntact__me.innerHTML = "សាកម្ដងទៀតមែនទេ?";
        } else {
            name__reward.innerHTML = "អ្នកទទួលបានប័ណ្ណ " +  fruits[random] + " ចំនួន​​​​ ​១";
            reward__img.src = "/img/"+ fruits[random] + ".png";
        }




        


    });
});
