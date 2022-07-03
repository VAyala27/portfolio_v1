var data = [{
        name: "Supravi_V1",
        subname: "Ecommerce",
        img: "https://s8.gifyu.com/images/supravi_v1.gif",
        category: "Websites",
        code: "https://github.com/VAyala27/Supravi-Version-1",
        link: "https://vayala27.github.io/Supravi-Version-1/"
    },
    {
        name: "Supravi_V2",
        subname: "Ecommerce",
        img: "https://s8.gifyu.com/images/supravi_v2.gif",
        category: "Websites",
        code: "https://github.com/VAyala27/Supravi-Version-2",
        link: "https://supravi.netlify.app/"
    },
    {
        name: "Pure_Digital",
        subname: "Digital Agency",
        img: "https://s8.gifyu.com/images/pure_digital.gif",
        category: "Websites",
        code: "https://github.com/VAyala27/Pure_Digital",
        link: "https://puredigital.netlify.app/home"
    },
    {
        name: "Bugersio",
        subname: "Restaurant",
        img: "https://s8.gifyu.com/images/burgersio.gif",
        category: "Websites",
        code: "https://github.com/VAyala27/Burgersio",
        link: "https://burgersio.netlify.app/home"
    },
    {
        name: "Apple",
        subname: "Promotional",
        img: "https://s8.gifyu.com/images/apple_email.gif",
        category: "Emails",
        code: "https://github.com/VAyala27/apple-email",
        link: "https://vayala27.github.io/apple-email/"
    },
    {
        name: "Google-Play",
        subname: "Promotional",
        img: "https://s8.gifyu.com/images/google_email.gif",
        category: "Emails",
        code: "https://github.com/VAyala27/googleplay-email",
        link: "https://vayala27.github.io/googleplay-email/"
    },
    {
        name: "Steam",
        subname: "Transactional",
        img: "https://i.postimg.cc/jSfHd3k9/steam-email.png",
        category: "Emails",
        code: "https://github.com/VAyala27/steam-email",
        link: "https://vayala27.github.io/steam-email/"
    },
    {
        name: "Bitnami",
        subname: "Newsletter",
        img: "https://s8.gifyu.com/images/bitnami_email.gif",
        category: "Emails",
        code: "https://github.com/VAyala27/Bitnami",
        link: "https://vayala27.github.io/Bitnami/"
    },
    {
        name: "Mailchimp",
        subname: "Newsletter",
        img: "https://s8.gifyu.com/images/mailchimp_email.gif",
        category: "Emails",
        code: "https://github.com/VAyala27/mailchimp-email",
        link: "https://vayala27.github.io/mailchimp-email/"
    },
    {
        name: "Heroku",
        subname: "Welcome",
        img: "https://s8.gifyu.com/images/heroku_email.gif",
        category: "Emails",
        code: "https://github.com/VAyala27/heroku-email",
        link: "https://vayala27.github.io/heroku-email/"
    },
    {
        name: "Adobe Email",
        subname: "Promotional",
        img: "https://s8.gifyu.com/images/adobe_email.gif",
        category: "Emails",
        code: "https://github.com/VAyala27/Adobe-xd-email",
        link: "https://vayala27.github.io/Adobe-xd-email/"
    }
];

const toggle = document.querySelector('#toggle');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.closeBtn');
const darkOverlay = document.querySelector('.dark-overlay');

toggle.addEventListener('click', function () {
    darkOverlay.classList.add('active');
    sidebar.classList.add('is-active');
});

closeBtn.addEventListener('click', function () {
    darkOverlay.classList.remove('active');
    sidebar.classList.remove('is-active');
});

window.addEventListener('click', function (e) {
    if (e.target == darkOverlay) {
        darkOverlay.classList.remove('active');
        sidebar.classList.remove('is-active');
    }
})

$(document).ready(function (e) {
    displayWork(data);
    displayMenuButtons();
    $('#All').addClass('tabActive');
});

function displayWork(workItems) {
    let displayWork = workItems.map((work) => {
        return ` <div class="col-sm-6 pb-4" data-id="${work.category}">
  <div class="work-wrap" data-toggle="modal" data-target="#${work.name}" style=" z-index: 0; object-fit: cover; background: url('${work.img}')no-repeat top/cover" data-id="${work.category}">
    <div class="work-links">
      <a href="${work.code}"><i class="fab fa-github"></i></a>
      <a href="${work.link}"><i class="fas fa-link"></i></a>
    </div>
  </div>
  <h4 class="text-center">${work.name}</h4>
  <h6 class="text-center">${work.subname}</h6>
</div>`
    });
    displayWork = displayWork.join("");
    $('.work-container').html(displayWork)
}


const container = document.querySelector('.work-list');

function displayMenuButtons() {
    const categories = data.reduce((values, item) => {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ['All']);

    const categoryBtns = categories.map((category) => {
        return `<li class="work-item filter-btn d-inline-block mb-3" id=${category} data-id="${category}">${category}</li>`
    }).join("");
    container.innerHTML = categoryBtns;

    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const category = e.currentTarget.dataset.id;
            const itemCategory = data.filter((item) => {
                if (item.category == category) {
                    return item;
                }
            });

            if (category) {
                filterBtns.forEach((btn) => {
                    btn.classList.remove('tabActive');
                    e.target.classList.add('tabActive');
                });

                filterBtns.forEach((btn) => {
                    btn.classList.remove('tabActive');
                });

                const element = document.getElementById(category);
                console.log(element);
                element.classList.add('tabActive');
            }

            if (category == "All") {
                displayWork(data);
            } else {
                displayWork(itemCategory);
            }
        });
    });
}

var scroll = new SmoothScroll('a[href*="#"]');
