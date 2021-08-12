//Validate Form

const regNames = /^[a-z][a-z\s]*$/gi;
const newRegNams = new RegExp(regNames);
const regPhoneNum = /^\+(?:[0-9] ?){6,14}[0-9]$/;
const email =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const onlyNumbers = /^[ _]*[A-Z0-9][A-Z0-9 _]*$/;
const newRegNumbers = new RegExp(onlyNumbers);
/*firstform */
let validname = false;
let validNumber = false;
let validEmail = false;
/*secondform */
let validAddress = false;
let validUnitNumber = false;
let validPostalCode = false;
/*paymentform*/

let holdername = false;
let validCardNumber = false;
let validExpire = false;
let validitorCvv = false;

const validateForm = {
  validEmpty: function (inputel, errortxt, checkmark) {
    if (!inputel.value.trim().match(newRegNams)) {
      inputel.style.border = "2px solid #fe724c";
      errortxt.textContent = "Please Type Your Name";
      checkmark.style.opacity = "0";
      validname = false;
      holdername = false;
    } else {
      inputel.style.border = "2px solid #1dc156";
      errortxt.textContent = "";
      checkmark.style.opacity = "1";
      validname = true;
      holdername = true;
    }
  },
  validPhoneNum: function (inputPhone, errortxt, check) {
    if (!inputPhone.value.match(regPhoneNum)) {
      inputPhone.style.border = "2px solid #fe724c";
      errortxt.textContent = "Please Type Valid Phone Number";
      check.style.opacity = "0";
      validNumber = false;
    } else {
      inputPhone.style.border = "2px solid #1dc156";
      errortxt.textContent = "";
      check.style.opacity = "1";
      validNumber = true;
    }
  },
  validEmail: function (input, errortxt) {
    if (email.test(input.value.trim())) {
      input.style.border = "2px solid #1dc156";
      errortxt.nextElementSibling.style.opacity = "1";
      errortxt.textContent = "";
      validEmail = true;
    } else {
      input.style.border = "2px solid #fe724c";
      errortxt.textContent = "Please Type Valid Email Address";
      errortxt.nextElementSibling.style.opacity = "0";
      validEmail = false;
    }
  },
  validLabel: function (inputChecked, errortxt) {
    if (inputChecked.checked === false) {
      errortxt.style.color = "#fe724c";
      errortxt.style.fontWeight = "bold";
    }
  },
  validAddress: function (inputAddress, errortxt, validMark) {
    if (inputAddress.value == "") {
      inputAddress.style.border = "2px solid #fe724c";
      errortxt.textContent = "Please Type Your Address";
      validMark.style.opacity = "0";
      validAddress = false;
    } else {
      errortxt.textContent = "";
      inputAddress.style.border = "2px solid #1dc156";
      validMark.style.opacity = "1";
      validAddress = true;
    }
  },
  validNumbers: function (inputNumber, errornumber, validMark) {
    if (!inputNumber.value.match(newRegNumbers)) {
      inputNumber.style.border = "2px solid #fe724c";

      errornumber.textContent = "Please Type Valid Numbers";
      validUnitNumber = false;
      validMark.style.opacity = "0";
    } else {
      errornumber.textContent = "";
      inputNumber.style.border = "2px solid #1dc156";
      validUnitNumber = true;
      validMark.style.opacity = "1";
    }
  },
  validpostalCode: function (inputNumber, errornumber, validMark) {
    if (inputNumber.value == "") {
      inputNumber.style.border = "2px solid #fe724c";

      errornumber.textContent = "Please Type Postal Code";
      validPostalCode = false;
      validMark.style.opacity = "0";
    } else {
      errornumber.textContent = "";
      inputNumber.style.border = "2px solid #1dc156";
      validPostalCode = true;
      validMark.style.opacity = "1";
    }
  },

  validExpiryDate: function (input, errortxt, checkmark) {
    if (input.value.length < 5) {
      input.style.border = "2px solid #fe724c";
      errortxt.textContent = "Pleas Type Valid Expire Date";
      checkmark.style.opacity = "0";
      validExpire = false;
    } else {
      input.style.border = "2px solid #1dc156";
      errortxt.textContent = "";
      checkmark.style.opacity = "1";
      validExpire = true;
    }
  },
  validCvv: function (input, errortxt, checkmark) {
    if (input.value.length < 4) {
      input.style.border = "2px solid #fe724c";
      errortxt.textContent = "Pleas Type Valid CVV";
      checkmark.style.opacity = "0";
      validitorCvv = false;
    } else {
      input.style.border = "2px solid #1dc156";
      errortxt.textContent = "";
      checkmark.style.opacity = "1";
      validitorCvv = true;
    }
  },
  validcardNum: function (input, errortxt, checkmark) {
    if (input.value.length === 19) {
      checkmark.style.opacity = "1";
      errortxt.textContent = "";
      input.style.border = "2px solid #1dc156";
      validCardNumber = true;
    } else {
      checkmark.style.opacity = "0";
      errortxt.textContent = "Please Type Your Credit Card Number";
      input.style.border = "2px solid #fe724c";
      validCardNumber = false;
    }
  },
};

function validMyform() {
  const inputName = document.querySelector("input.nameLoyal");
  const telInput = document.querySelector("#phonenumber");
  const errorPhone = document.querySelector(".input-group.middle .error");
  const emailInput = document.querySelector(".emailInput");
  const trueMark = document.querySelector(".icon-checkmark");
  const labelInput = document.querySelector('input[type="checkbox"]');

  validateForm.validPhoneNum(
    telInput,
    errorPhone,
    errorPhone.nextElementSibling
  );
  validateForm.validEmpty(inputName, inputName.nextElementSibling, trueMark);
  validateForm.validEmail(emailInput, emailInput.nextElementSibling);
  validateForm.validLabel(labelInput, labelInput.previousElementSibling);
  if (validEmail && validname && validNumber && labelInput.checked) {
    return true;
  } else {
    return false;
  }
}

function validAddressPage() {
  const inputAddress = document.querySelector(".inputaddress");
  const unitNumbers = document.querySelector(".unitnumbers");
  const postalCode = document.querySelector(".postalcode");
  const checkmark = document.querySelectorAll(".icon-checkmark");
  validateForm.validAddress(
    inputAddress,
    inputAddress.nextElementSibling,
    checkmark[0]
  );
  validateForm.validNumbers(
    unitNumbers,
    unitNumbers.nextElementSibling,
    checkmark[1]
  );
  validateForm.validpostalCode(
    postalCode,
    postalCode.nextElementSibling,
    checkmark[2]
  );
  if (validAddress && validUnitNumber && validPostalCode) {
    return true;
  } else {
    return false;
  }
}

function validNameHolder() {
  const inputName = document.querySelector(".nameholder");
  const validPayment = document.querySelectorAll(".icon-checkmark");

  validateForm.validEmpty(
    inputName,
    inputName.nextElementSibling,
    validPayment[0]
  );
  if (holdername) {
    return true;
  } else {
    return false;
  }
}

function formatCardNumber(e) {
  const inputCard = document.querySelector(".cardnumber");
  const data = document.getElementById("raw_data");
  const validPayment = document.querySelectorAll(".icon-checkmark");

  if (e.key == 8) return;
  let str = inputCard.value.replace(/[^0-9]+/g, "");
  data.value = str;
  let set = str.match(/[0-9]{1,4}/g);
  if (set === null) {
    inputCard.value = "";
  } else {
    let sets = "";
    let c = 1;
    set.forEach((num) => {
      sets += num.length == 4 && c != 4 ? num + " " : num;
      c++;
    });
    inputCard.value = sets;
  }
  if (inputCard.value.length === 19) {
    inputCard.style.border = "2px solid #1dc156";
    inputCard.nextElementSibling.textContent = "";
    validPayment[1].style.opacity = "1";
  } else {
    inputCard.style.border = "2px solid #fe724c";
    validPayment[1].style.opacity = "0";
    inputCard.nextElementSibling.textContent = "Please Type Credit Card Number";
  }
}
function validExpireDate() {
  const inputExpire = document.querySelector(".expirydate");
  const checkMark = document
    .querySelector(".datacard")
    .querySelector(".icon-checkmark");
  validateForm.validExpiryDate(
    inputExpire,
    inputExpire.nextElementSibling,
    checkMark
  );
  if (validExpire) {
    return true;
  } else {
    return false;
  }
}
function creditCVV() {
  const inputCVV = document.querySelector(".cvv");
  const checkMark = document
    .querySelector(".input-group__cvv")
    .querySelector(".icon-checkmark");
  validateForm.validCvv(inputCVV, inputCVV.nextElementSibling, checkMark);
  if (validitorCvv) {
    return true;
  } else {
    return false;
  }
}
function validCardInput() {
  const input = document.querySelector(".cardnumber");
  const error = document
    .querySelector(".input-group.middle")
    .querySelector(".error");
  const mark = document
    .querySelector(".input-group.middle")
    .querySelector(".icon-checkmark");

  validateForm.validcardNum(input, error, mark);
  if (validCardNumber) {
    return true;
  } else {
    return false;
  }
}
//validate expire date

function formatString(e) {
  var inputChar = String.fromCharCode(e.code);
  var code = e.keyCode;
  var allowedKeys = [8];
  if (allowedKeys.indexOf(code) !== -1) {
    return;
  }

  e.target.value = e.target.value
    .replace(
      /^([1-9]\/|[2-9])$/g,
      "0$1/" // 3 > 03/
    )
    .replace(
      /^(0[1-9]|1[0-2])$/g,
      "$1/" // 11 > 11/
    )
    .replace(
      /^([0-1])([3-9])$/g,
      "0$1/$2" // 13 > 01/3
    )
    .replace(
      /^(0?[1-9]|1[0-2])([0-9]{2})$/g,
      "$1/$2" // 141 > 01/41
    )
    .replace(
      /^([0]+)\/|[0]+$/g,
      "0" // 0/ > 0 and 00 > 0
    )
    .replace(
      /[^\d\/]|^[\/]*$/g,
      "" // To allow only digits and `/`
    )
    .replace(
      /\/\//g,
      "/" // Prevent entering more than 1 `/`
    );
}
import UI from "./views/Ui.js";

async function fetchWithui(url) {
  await fetch(url)
    .then((response) => response.text())
    .then((data) => (document.getElementById("app").innerHTML = data))
    .then(() => {
      window.scrollTo({
        top: 0,

        behavior: "smooth",
      });
    })
    .then(() => {
      UI();
    });
}

function addClassOnBody(nameClass) {
  document.body.className = nameClass;
}

const Pickup = function () {
  fetchWithui("/static/html/pick-or-delivery.html");
};
const Placeorder = function () {
  fetchWithui("/static/html/place-your-order.html");
  //
};
const Outletpickup = function () {
  fetchWithui("/static/html/outletpickup.html");
};
const Picktime = function () {
  fetchWithui("/static/html/picktime.html");
};
const Selectmenu = function () {
  fetchWithui("/static/html/select_restaurant.html").then(() => {
    addClassOnBody("bluebkground");
  });
};
const Curpro = function () {
  fetchWithui("/static/html/cuban_pros.html").then(() => {
    addClassOnBody("lightblue");
  });
};
const Akai = function () {
  fetchWithui("/static/html/AcaiKing.html").then(() => {
    addClassOnBody("violet");
  });
};
const Rostiboy = function () {
  fetchWithui("/static/html/rosti-boy.html").then(() => {
    addClassOnBody("cooper");
  });
};
const Loyalty = function () {
  fetchWithui("/static/html/loyaltymember.html").then(() => {
    addClassOnBody("lightblue");
  });
};

const Becomeloyal = function () {
  fetchWithui("/static/html/becomeloyal.html").then(() => {
    addClassOnBody("lightblue");
  });
};
const Otp = function () {
  fetchWithui("/static/html/enterotp.html").then(() => {
    addClassOnBody("lightblue");
  });
};
const Amazing = function () {
  fetchWithui("/static/html/amazing.html").then(() => {
    addClassOnBody("lightblue");
  });
};
const Welcomeback = function () {
  fetchWithui("/static/html/welcomeBack.html").then(() => {
    addClassOnBody("lightblue");
  });
};
const Checkoutnow = function () {
  fetchWithui("/static/html/checkoutnow.html").then(() => {
    addClassOnBody("lightblue");
  });
};
const DeliveryAddress = function () {
  fetchWithui("/static/html/deliveryaddress.html").then(() => {
    addClassOnBody("lightblue");
  });
};
const Awesome = function () {
  fetchWithui("/static/html/awesome.html").then(() => {
    addClassOnBody("lightblue");
  });
};
const Payment = function () {
  fetchWithui("/static/html/payment.html").then(() => {
    addClassOnBody("lightblue");
  });
};
const Confirmed = function () {
  fetchWithui("/static/html/confirmed.html").then(() =>
    addClassOnBody("lightblue")
  );
};

//import Placeorder from "./views/Placeorder.js";
//import Pickup from "./views/Pickup.js";
//import Selectmenu from "./views/Selectmenu.js";
//import Curpro from "./views/Curpros.js";
//import Rostiboy from "./views/Rostiboy.js";
//import Akai from "./views/AkaiKing.js";
//import Loyalty from "./views/Loyalty.js";
//import Becomeloyal from "./views/Becomeloyal.js";
//import Otp from "./views/Otp.js";
//import Welcomeback from "./views/Welcomeback.js";
//import Outletpickup from "./views/Outletpickup.js";
//import Amazing from "./views/Amazing.js";
//import Checkoutnow from "./views/Checkoutnow.js";
//import DeliveryAddress from "./views/DeliveryAddress.js";
//import Awesome from "./views/Awesome.js";
//import Payment from "./views/Payment.js";
//import Picktime from "./views/Picktime.js";

const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );

  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    })
  );
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    //loadingPage

    { path: "/Placeorder", view: Placeorder },

    { path: "/Pickup", view: Pickup },
    { path: "/Selectmenu", view: Selectmenu },
    { path: "/Curpro", view: Curpro },
    { path: "/Rostiboy", view: Rostiboy },
    { path: "/Akai", view: Akai },
    { path: "/Loyalty", view: Loyalty },
    { path: "/Becomeloyal", view: Becomeloyal },
    { path: "/Otp", view: Otp },
    { path: "/Welcomeback", view: Welcomeback },
    { path: "/Outletpickup", view: Outletpickup },
    { path: "/Amazing", view: Amazing },
    { path: "/Checkoutnow", view: Checkoutnow },
    { path: "/DeliveryAddress", view: DeliveryAddress },
    { path: "/Awesome", view: Awesome },
    { path: "/Payment", view: Payment },
    { path: "/Picktime", view: Picktime },
    { path: "/Confirmed", view: Confirmed },
  ];

  // Test each route for potential match
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  );

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }

  const view = new match.route.view(getParams(match));

  // document.querySelector("#app").innerHTML = await view.getHtml();

  //await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});

//Navigate to CheckOut
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
  
    if (e.target.parentElement.classList.contains("checkoutform")) {
      e.preventDefault();
      navigateTo("/Loyalty");
    }
    if (e.target.parentElement.classList.contains("submitContinue")) {
      e.preventDefault();

      validMyform();
      if (validMyform() === true) {
        navigateTo("/Otp");
        router();
      }
    }
    if (
      e.target.parentElement.classList.contains(
        "formwelcome"
      )
    ) {
      e.preventDefault();
      navigateTo("/Otp");

      router();
    }
    if (e.target.parentElement.classList.contains("form-checkoutnow")) {
      e.preventDefault();
      navigateTo("/DeliveryAddress");
      router();
    }
    if (e.target.classList.contains("proceed")) {
      e.preventDefault();
      validAddressPage();
      if (validAddressPage() === true) {
        navigateTo("/Awesome");

        router();
      }
    }

    if (e.target.classList.contains("outletBtn")) {
      //pickTimeBtn
      e.preventDefault();
      navigateTo("/Picktime");
      router();
    }
    if (e.target.classList.contains("pickTimeBtn")) {
      //
      e.preventDefault();
      navigateTo("/Selectmenu");
      router();
    }
    if (e.target.classList.contains("paymnetBtn")) {
      e.preventDefault();
      validNameHolder();
      validExpireDate();
      creditCVV();
      validCardInput();

      if (
        validNameHolder() &&
        validExpireDate() &&
        creditCVV() &&
        validCardInput()
      ) {
        document.querySelector(".containerloading").classList.add("show");
        setTimeout(() => {
          document.querySelector(".containerloading").classList.remove("show");
          navigateTo("/Confirmed");
          router();
        }, 4000);
      }
    }
  });
  router();

  //
});

window.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("keyup", (e) => {
    if (e.target.classList.contains("nameLoyal")) {
      validMyform();
    }
    if (e.target.id === "phonenumber") {
      validMyform();
    }
    if (e.target.classList.contains("emailInput")) {
      validMyform();
    }
    if (e.target.classList.contains("inputaddress")) {
      validAddressPage();
    }
    if (e.target.classList.contains("unitnumbers")) {
      validAddressPage();
    }
    if (e.target.classList.contains("postalcode")) {
      validAddressPage();
    }
    if (e.target.classList.contains("cardnumber")) {
      formatCardNumber(e);
    }
    if (e.target.classList.contains("nameholder")) {
      validNameHolder();
    }
    if (e.target.classList.contains("expirydate")) {
      formatString(e);
      validExpireDate();
    }
    if (e.target.classList.contains("cvv")) {
      e.target.value = e.target.value.replace(/[^\d\/]|^[\/]*$/g, "");
      creditCVV();
    }
  });
});

//route to amazing by enter dummy otp

const redirectToOtp = function () {
  let x, y, z, f;
  document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("keyup", (e) => {
      let total = [];
      if (
        e.target.tagName === "INPUT" &&
        e.target.getAttribute("maxlength") == 1
      ) {
        document
          .querySelectorAll(".input-group input")
          .forEach((item, index) => {
            if (index === 0) {
              if (item.value.match(newRegNumbers)) {
                item.style.border = "1px solid transparent";
                item.style.color = "#0599ab";
                x = item.value;
                total.push(x);
              } else {
                item.style.border = "1px solid #fe724c";
              }
            }
            if (index === 1) {
              if (item.value.match(newRegNumbers)) {
                item.style.border = "1px solid transparent";
                y = item.value;
                total.push(y);
                item.style.color = "#0599ab";
              } else {
                item.style.border = "1px solid #fe724c";
              }
            }
            if (index === 2) {
              if (item.value.match(newRegNumbers)) {
                item.style.border = "1px solid transparent";
                z = item.value;
                total.push(z);
                item.style.color = "#0599ab";
              } else {
                item.style.border = "1px solid #fe724c";
              }
            }
            if (index === 3) {
              if (item.value.match(newRegNumbers)) {
                item.style.border = "1px solid transparent";
                f = item.value;
                total.push(f);
                item.style.color = "#0599ab";
              } else {
                item.style.border = "1px solid #fe724c";
              }
            }
          });
      }
      if (e.target.tagName === "INPUT" && e.target.id === "forth") {
        if (total.length === 4) {
          const showProcessing = () => {
            document.querySelector(".verifyotp").classList.add("show");
            setTimeout(() => {
              document.querySelector(".verifyotp").classList.remove("show");
            }, 2000);
          };
          showProcessing();
          setTimeout(() => {
            navigateTo("/Amazing");
          }, 2000);

          //
        }
      }
    });
  });
};

redirectToOtp();

//Preload IMages

const setImages = async function () {
  const imgs = [
    "img0",
    "img1",
    "img2",
    "img3",
    "img4",
    "img5",
    "img6",
    "img7",
    "img8",
    "img9",
    "img10",
    "img11",
    "img12",
    "img13",
    "img14",
    "img15",
  ];

  imgs.forEach((item, index) => {
    item = new Image();

    item.src = `/static/imgs/img-${index}.png`;
  });
  const legendimage = new Image();
  legendimage.src = "/static/imgs/legend.png";

  const imgSvg1 = new Image();
  imgSvg1.src = "/static/imgs/logo1.svg";

  const imgSvg2 = new Image();
  imgSvg2.src = "/static/imgs/logo-2.svg";

  const imgSvg3 = new Image();
  imgSvg3.src = "/static/imgs/logo-3.svg";

  const imgSvg4 = new Image();
  imgSvg4.src = "/static/imgs/logo-4.svg";

  const imgSvg5 = new Image();
  imgSvg5.src = "/static/imgs/logo-5.svg";

  const imgSvg6 = new Image();
  imgSvg6.src = "/static/imgs/logo-6.svg";

  const imgSvg7 = new Image();
  imgSvg7.src = "/static/imgs/logo-7.svg";

  const imgSvg8 = new Image();
  imgSvg8.src = "/static/imgs/logo-8.svg";

  const imgSvg9 = new Image();
  imgSvg9.src = "/static/imgs/logo-9.svg";

  const imgSvg10 = new Image();
  imgSvg10.src = "/static/imgs/logo-10.svg";
};
setImages();

/*function laoding Page*/
