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
  location.href = link + cd + ph;
}

function tMsg(link) {
  var cd = document.getElementById('countryCodeTg').value;
  var ph = document.getElementById('tgNumber').value;
  location.href = link + cd + ph;
}

function iMsg(link) {
  var uname = document.getElementById('username').value;
  location.href = link + uname;
}