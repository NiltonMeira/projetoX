let currentPage;
document.getElementById("btn1").addEventListener("click", function (event) {
  currentPage = 1;
  console.log(currentPage)
});

let themeSwitch = document.getElementById('theme-checkbox');
themeSwitch.addEventListener('change', function() {
  if(this.checked) {
      document.documentElement.classList.add('dark-mode');
      window.isDarkMode = true;
      
  } else {
      document.documentElement.classList.remove('dark-mode');
      window.isDarkMode = false;
     
  }
});