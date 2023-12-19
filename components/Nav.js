import html from "html-literal";
export default links=>html`
<nav class="navbar">
  <div class="brand-title">TIM</div>
  <a href="#" class="toggle-button">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
  </a>
  <div class="navbar-links">
      <ul>
          <li><a href="homePage.html">Home</a></li>
          <li><a href="BudgetPage.html">Budget</a></li>
          <li><a href="schedulePage.html">Schedule</a></li>
          <li><a href="AboutPage.html">About</a></li>
          <li><a href="Adulting101Page.html">Adulting 101</a></li>
          <li><a href="ContactPage.html">Contact</a></li>
          <li class="active"><a href="DisclaimerPage.html">Disclaimer</a></li>
      </ul>
  </div>
</nav>
</header>`;
