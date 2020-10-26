var data = [{
    name: "Supravi_V1",
    subname: "Ecommerce",
    img: "https://i.postimg.cc/MHKTbDw4/Supravi-V1.png",
    description: "An online shopping site where users can create an account and login. This info is store in local storage and includes form validation. Users can browse through the site and add item to cart and remove them from the cart. After the user selects an item they can checkout just by filling out some credit card information and click place order and a popup will appear of the name of the item and total cost.",
    technogies: "HTML, CSS, Javascript, jQuery",
    category: "Websites",
    code: "https://github.com/VAyala27/Supravi-Version-1",
    link: "https://vayala27.github.io/Supravi-Version-1/"
  },
  {
    name: "Drone",
    subname: "Single Page Website",
    img: "https://i.postimg.cc/x8PzKcVt/Screen-Shot-2020-10-22-at-1-57-50-AM.png",
    description: "A remade of a drone website using",
    technogies: "HTML, CSS, Bootstrap, Javascript, jQuery",
    category: "Websites",
    code: "https://github.com/VAyala27/Drone",
    link: "https://vayala27.github.io/Drone/"
  },
  {
    name: "Steam Restaurant & Drinks",
    subname: "Restaurant",
    img: "https://i.postimg.cc/qqrKh2SN/Screen-Shot-2020-10-22-at-1-57-32-AM.png",
    description: "A remake of a restaurant using dyanmic data for the menu item and testimonals. It also contains smooth scrolling which means a user clicks on the link it move to that location smoothly.",
    technogies: "HTML, CSS, Bootstrap, Javascript, jQuery",
    category: "Websites",
    code: "https://github.com/VAyala27/Restaurant",
    link: "https://vayala27.github.io/Restaurant/"
  },
  {
    name: "Rent-Cars",
    subname: "Promotional",
    img: "https://i.postimg.cc/xCQqqQ49/rentcar.png",
    description: " Remade a responsive Labor day car sale email by using",
    technogies: "HTML, CSS",
    category: "Emails",
    code: "https://github.com/VAyala27/Rent-Car-Email",
    link: "https://vayala27.github.io/Rent-Car-Email/"
  },
  {
    name: "Google-Play",
    subname: "Promotional",
    img: "https://i.postimg.cc/YCJvKYNG/googleplay.png",
    description: "Remade a responsive google play ad by using",
    technogies: "HTML, CSS",
    category: "Emails",
    code: "https://github.com/VAyala27/googleplay-email",
    link: "https://vayala27.github.io/googleplay-email/"
  },
  {
    name: "Electro",
    subname: "Transactional",
    img: "https://i.postimg.cc/x1kX4tmV/electro.png",
    description: "Remade a responsive ordering email by using",
    technogies: "HTML, CSS",
    category: "Emails",
    code: "https://github.com/VAyala27/Electro-Email",
    link: "https://vayala27.github.io/Electro-Email/"
  },
  {
    name: "Bitnami",
    subname: "Newsletter",
    img: "https://i.postimg.cc/xdMc08gs/bitnami.png",
    description: "Remade a responsive bitnami newsletter by using",
    technogies: "HTML, CSS",
    category: "Emails",
    code: "https://github.com/VAyala27/Bitnami",
    link: "https://vayala27.github.io/Bitnami/"
  },
  {
    name: "Adobe XD Email",
    subname: "Promotional",
    img: "https://i.postimg.cc/sDN2f9Hy/adobe-xd-email.png",
    description: "Remake of a Adobe XD email by using",
    technologies: "HTML, CSS",
    category: "Emails",
    code: "https://github.com/VAyala27/Adobe-xd-email",
    link: "https://vayala27.github.io/Adobe-xd-email/"
  }
];


$(document).ready(function (e) {
  displayWork(data);
  displayModalWork(data);
  displayMenuButtons();
  $('#All').addClass('tabActive');

  $win = $(window);
  $navbar = $("#header");
  $toggle = $(".toggle-button");
  var width = $navbar.width();
  toggle_onclick($win, $navbar, width);

  // resize event
  $win.resize(function () {
    toggle_onclick($win, $navbar, width);
  });

  $toggle.click(function (e) {
    $navbar.toggleClass("toggle-left");
  });
});

function toggle_onclick($win, $navbar, width) {
  if ($win.width() <= 768) {
    $navbar.css({
      left: `-${width}px`
    });
  } else {
    $navbar.css({
      left: "0px"
    });
  }
}

var typed = new Typed("#typed", {
  strings: ["Html Email Developer"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
});

document.querySelectorAll('a[href ^= "#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });

});

function displayWork(workItems) {
  let displayWork = workItems.map((work) => {
    return ` <div class="col-sm-4 pb-4" data-id="${work.category}">
  <div class="work-wrap" data-toggle="modal" data-target="#${work.name}" style=" z-index: 0; background: url('${work.img}')no-repeat top/cover" data-id="${work.category}">
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

function displayModalWork(workItems) {
  let displayModal = workItems.map((work) => {
    return `<div class="modal fade" id="${work.name}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div class="modal-dialog modal-xl" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${work.name}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body text-center">
        <img src="${work.img}" alt="${work.name}" class="img-fluid" />

        <h5 class="mt-3">About The Project</h5>
        <p>
          ${work.description}
          <br />
         ${work.technogies}
        </p>
      </div>
      <div class="modal-footer">
        <a href="${work.code}" class="btn outline-dark">See Code</a>
        <a href="${work.link}" class="btn outline-dark">Launch Project</a>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">
          Close
        </button>
      </div>
    </div>
  </div>
</div>`;
  });
  displayModal = displayModal.join("");
  $('body').append(displayModal);
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
    return `<li class="work-item filter-btn d-inline-block" id=${category} data-id="${category}">${category}</li>`
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
