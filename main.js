shares_btn = document.querySelectorAll('.shares');
icon_share_zone = document.querySelector('#icon_share_zone')
icon_share = document.querySelector('#icon_share')
desk = document.querySelector('#desk')
share_btn = document.querySelector('.share');


window.addEventListener('change', function (){
    alert(window.innerWidth);
});

share_btn.addEventListener('click', function () {
        let element = this;


        if (this.classList.contains('active')) {
            this.classList.remove('active');
            icon_share.style = 'display:none;';
            icon_share_zone.style = 'background-color: transparent;';
            desk.style = 'display:inline-block;';

        } else {
            this.classList.add('active');
            icon_share.style = 'display:inline-block;';
            if (window.innerWidth < 900) {

                icon_share_zone.style = 'background-color: var(--very-dark-grayish-blue);';
                desk.style = 'display:none;';


            }
        }


    });


//
// submit.addEventListener('click', function (e) {
//     if (submit_rating > 0) {
//         getform.style = 'display:none;';
//         postform.style = 'display:flex;';
//         response.innerHTML = "You selected " + submit_rating + " out of 5"
//     }
// });