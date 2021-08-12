//Cancel Fixed NabBar

function cancelNavbar() {
  document.querySelector('.navbar').classList.remove('fixed');
  window.onscroll = () => {
    document.querySelector('.navbar').classList.remove('fixed');
  };
}

//GENERAL COUNTER FUCTION
const onlyNumbers = /^[ _]*[A-Z0-9][A-Z0-9 _]*$/;
const newRegNumbers = new RegExp(onlyNumbers);

const Conunter = function (incEl, decEl, num, cntr) {
  num.forEach((item) => {
    cntr = Number(item.value);
  });

  incEl.forEach((item, index) => {
    item.addEventListener('click', function (e) {
      e.stopPropagation();
      cntr++;
      num[index].value = cntr;
      if (num[index].value < 10) {
        num[index].value = '0' + cntr;
        num.forEach((item) => {
          item.value = '0' + cntr;
        });
      } else {
        num.forEach((item) => {
          item.value = cntr;
        });
      }
    });
  });

  decEl.forEach((item, index) => {
    item.addEventListener('click', function (e) {
      e.stopPropagation();
      if (cntr != 0) {
        cntr--;
        num[index].value = cntr;
      }

      if (num[index].value < 10) {
        num[index].value = '0' + cntr;
        num.forEach((item) => {
          item.value = '0' + cntr;
        });
      } else {
        num.forEach((item) => {
          item.value = cntr;
        });
      }
    });
  });
};
//GENERAL FUCNTION FOR CAROUSEL
const FireCarousel = function () {
  document.querySelectorAll('.cardscarousel .owl-carousel').forEach((item) => {
    $(item).owlCarousel({
      loop: false,
      margin: 15,
      // nav: true,
      // dots: false,
      //pullDrag:true,
      //responsiveClass: true,
      //freeDrag:true,
      // mergeFit:true,
      autoWidth: true,

      //stagePadding:50,

      responsive: {
        992: {
          items: 0,
        },
      },
    });
  });
};
////GENERAL FUCNTION FOR CAROUSEL FOR Tabs

const FireCarouselTabs = function () {
  document.querySelectorAll('.tabs-types .owl-carousel').forEach((item) => {
    $(item).owlCarousel({
      loop: false,
      margin: 5,

      //nav: false,
      //dots: false,
      startPosition: 0,
      //autoWidth: true,

      autoplayTimeout: 500,

      // autoplay: true,
      responsiveRefreshRate: 500,
      mergeFit: false,
      slideSpeed: 5000,

      //  autoplaySpeed: 3000,
      slideTransition: 'linear',

      responsive: {
        350: {
          items: 3,
        },
        400: {
          items: 3,
        },

        500: {
          items: 4,
        },

        600: {
          items: 4,
        },
        700: {
          items: 5,
        },
        768: {
          items: 5,
        },
        992: {
          items: 5,
        },
        1000: {
          items: 7,
        },
      },
    });
  });
};

//function scroll intview

const scrollToBottom = function () {
  const labelCard = document.querySelectorAll('.label-card');
  const lastItemLabelCard = labelCard[labelCard.length - 2];
  // document.documentElement.style.scrollBehavior = 'smooth';
  $('html, body').animate(
    {
      scrollTop: 0,
    },
    600,
    'swing',
    () => {
      $('html,body').animate(
        { scrollTop: $(lastItemLabelCard).offset().top - 450 },
        1100,
        'swing'
      );
    }
  );
  //window.scrollTo(0, lastItemLabelCard.offsetTop);
};
const UI = function () {
  //1-Curpo Page

  //fire caroseul
  const pathName = window.location.pathname;

  if (
    pathName.indexOf('Curpro') > -1 ||
    pathName.indexOf('Rostiboy') > -1 ||
    pathName.indexOf('Akai') > -1
  ) {
    FireCarouselTabs();
    const incrementEl = document.querySelectorAll('.increment');
    const decrementEl = document.querySelectorAll('.decrement');
    let realNum = document.querySelectorAll('.numcount');
    let x = 0;

    Conunter(incrementEl, decrementEl, realNum, x);

    window.onresize = function () {
      if (window.innerWidth < 992) {
        document
          .querySelectorAll('.cardscarousel .owl-carousel')
          .forEach((item) => {
            $(item).owlCarousel('destroy');
          });
      } else {
        FireCarousel();
      }
    };
    if (window.matchMedia('(min-width:992px)').matches) {
      FireCarousel();
    }

    const addActive = function () {
      document.querySelectorAll('.spantabs')[0].classList.add('active');

      const allItems = document.querySelectorAll('.tabs-types .spantabs');
      allItems.forEach((item) => {
        item.addEventListener('click', function () {
          for (const itemLink of allItems) {
            itemLink.classList.remove('active');
          }
          item.classList.add('active');
          scrollToBottom();
        });
      });
    };
    addActive();
    //show popup
    const curbanSection = document.querySelector('.curban-section');
    const mainLogo = document.querySelector('.logo');
    const navBarItem = document.querySelector('.navbar');
    const broweseText = document.querySelectorAll('.borwsetext');
    const inputCounter = document.querySelectorAll('.numcount');
    const fixedpopup = document.querySelectorAll('.closegenralpopup');

    const scrollWindow = function () {
      window.scrollTo({
        top: 0,

        behavior: 'smooth',
      });
    };

    const showAddSalad = function (containDiv, logo, navBar, txt) {
      let allLegendCard = document.querySelectorAll('.cubanbroscard');
      const allContent = document.querySelector('.allcontent');
      allLegendCard.forEach((item) => {
        item.addEventListener('click', (e) => {
          const popup = item.getAttribute('data-attribute');
          e.stopPropagation();
          document.querySelector(`.${popup}`).classList.add('show');
          containDiv.classList.add('show');
          logo.classList.add('show');
          navBar.classList.add('popup-nav');
          document.body.classList.add('fixedposition');
          txt.forEach((item) => {
            // item.innerHTML = '';
            item.innerHTML = `<span class="pink">CUSTOMIZE</span> YOUR ORDER`;
          });
          // scrollWindow();

          allContent.classList.remove('addMargin');
        });
      });
      //scrollWindow();
    };
    const removeUiSuperSalad = function (containDiv, logo, navBar, txt) {
      fixedpopup.forEach((item) => {
        item.classList.remove('show');
      });
      containDiv.classList.remove('show');
      logo.classList.remove('show');
      navBar.classList.remove('popup-nav');
      document.body.classList.remove('fixedposition');
      txt.forEach((item) => {
        item.innerHTML = '';
        item.innerHTML = `Browse <span>Menu </span>&amp;<span> Add</span>to Cart`;
      });
    };

    showAddSalad(curbanSection, mainLogo, navBarItem, broweseText);

    //Hide PopUp The Super Salad

    const hideSuperSalad = function () {
      const contentPopup = document.querySelectorAll('.CustomizePopup');
      const closeIcon = document.querySelectorAll(
        '.CustomizePopup .close-icon'
      );
      closeIcon.forEach((item) => {
        item.onclick = () => {
          removeUiSuperSalad(curbanSection, mainLogo, navBarItem, broweseText);
        };
      });
      const backBtn = document.querySelectorAll(
        '.CustomizePopup__footer--back a'
      );

      contentPopup.forEach((item) => {
        item.addEventListener('click', (e) => {
          e.stopPropagation();
        });
      });
      document.body.onclick = function (e) {
        removeUiSuperSalad(curbanSection, mainLogo, navBarItem, broweseText);
      };

      backBtn.forEach((item) => {
        item.onclick = (e) => {
          e.preventDefault();
          removeUiSuperSalad(curbanSection, mainLogo, navBarItem, broweseText);
        };
      });
    };
    hideSuperSalad();

    //add Fixed Position No NavBar On Scrolling

    window.onscroll = function () {
      const navBarItem = document.querySelector('.navbar');
      const allContent = document.querySelector('.allcontent');
      const tabsTypes = document.querySelector('.tabs-types');

      if (pageYOffset > 50) {
        if (typeof allContent != 'undefined' && allContent !== null) {
          allContent.classList.add('addMargin');
        }
        if (typeof tabsTypes != 'undefined' && tabsTypes !== null) {
          tabsTypes.classList.add('fixed');
        }
        if (typeof navBarItem != 'undefined' && navBarItem !== null) {
          navBarItem.classList.add('fixed');
        }


        
      } else {
        if (typeof allContent != 'undefined' && allContent !== null) {
          allContent.classList.remove('addMargin');
        }
       
        if (typeof tabsTypes != 'undefined' && tabsTypes !== null) {
          tabsTypes.classList.remove('fixed');
        }
        if (typeof navBarItem != 'undefined' && navBarItem !== null) {
          navBarItem.classList.remove('fixed');
        }
      }
    };
  }

  //Phone Number

  if (
    pathName.indexOf('Becomeloyal') > -1 ||
    pathName.indexOf('Welcomeback') > -1
  ) {
    const phoneNumFlag = function () {
      document.querySelectorAll('input[type="tel"]').forEach((item) => {
        $(item).intlTelInput({
          allowDropdown: true,
          autoPlaceholder: 'polite',
          preferredCountries: ['us', 'sg'],
          nationalMode: false,
        });
      });
    };

    phoneNumFlag();
  }

  //Focus OTP

  if (pathName.indexOf('Otp') > -1) {
    const focusOtp = function () {
      document
        .querySelectorAll('.otp__content--form .input-group input')
        .forEach((item, index) => {
          if (index < 3) {
            item.addEventListener('keyup', () => {
              if (item.value.match(newRegNumbers)) {
                item.nextElementSibling.focus();
              }
            });
          }
        });
    };
    focusOtp();
    document.body.classList.add('curba');
  } else {
    document.body.classList.remove('curba');
  }
  //fire functions on view Outlet PickUp
  if (window.location.pathname.indexOf('Outletpickup') > -1) {
    $(document).ready(function () {
      $('select').niceSelect();
    });
  }
  //fire functions on view Picktime

  if (window.location.pathname.indexOf('Picktime') > -1) {
    $(function () {
      $('#mydate').fdatepicker({
        format: 'mm-dd-yyyy hh:ii',
        disableDblClickSelection: true,
        language: 'vi',
        pickTime: true,
      });
    });
  }

  //Change Background for pages
  //1-Page Cuban-pros

  //Remove DatePicker
  if (!(window.location.pathname.indexOf('Picktime') > -1)) {
    if (
      document.getElementById('datepickers-container') != 'undefined' &&
      document.getElementById('datepickers-container') != null
    ) {
      document.getElementById('datepickers-container').remove();
    }
  }
  //Fire Counter On CheckOut Now

  if (window.location.pathname.indexOf('Checkoutnow') > -1) {
    for (
      let i = 0;
      i < document.querySelectorAll('.features__content').length;
      i++
    ) {
      const incrementEl = document
        .querySelectorAll('.features__content')
        [i].querySelectorAll('.features__content .increment');
      const decrementEl = document
        .querySelectorAll('.features__content')
        [i].querySelectorAll(' .features__content .decrement');
      let realNum = document
        .querySelectorAll('.features__content')
        [i].querySelectorAll('.features__content .numcount');
      Conunter(incrementEl, decrementEl, realNum);
    }
  }

  if (pathName.indexOf('Loyalty') > -1) {
    cancelNavbar();
  }

  if (
    pathName.indexOf('Pickup') > -1 ||
    pathName.indexOf('Outletpickup') > -1 ||
    pathName.indexOf('Picktime') > -1 ||
    pathName.length === 1
  ) {
    document.body.classList.add('fixed');
  } else {
    document.body.classList.remove('fixed');
  }


  
};

export default UI;
