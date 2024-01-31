function showSection(sectionId) {
  document.querySelectorAll('section').forEach(function(section) {
    section.classList.remove('active');
  });

  document.querySelectorAll('nav a').forEach(function(button) {
    button.classList.remove('active');
  });

  document.getElementById(sectionId).classList.add('active');
  document.getElementById(sectionId + 'Btn').classList.add('active');
}

function waMsg(link) {
  var cd = document.getElementById('countryCodeWa').value;
  var ph = document.getElementById('phoneNumberWa').value;
  window.open(link + cd + ph, "_blank");
}

function tMsg(link) {
  var cd = document.getElementById('countryCodeTg').value;
  var ph = document.getElementById('tgNumber').value;
  window.open(link + cd + ph, "_blank");
}

function iMsg(link) {
  var uname = document.getElementById('username').value;
  window.open(link + uname, "_blank");
}
