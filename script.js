const d = document.getElementsByClassName('content-box');

        for (i = 0; i < d.length; i++) {
            d[i].addEventListener('click', function () {
                this.classList.toggle('active')
            })
        }