import html from "html-literal";
export default()=>html`
<main>
      <h1>Adulting 101</h1>
          <section class="howToSection">
            <h2>How Do I...</h2>
            <Ul>
              <li>
                  <figure>
                    <a href="HowToChangeATire.html">
                      <img src="images\Mechanic Changing Car.jpg"height="200px"width="200px">
                    </a>
                    <figcaption>How to Change a Tire </figcaption>
                  </figure>
              </li>
              <li>
                <figure>
                  <a href="HowToTieATie.html">
                    <img src="images/Man Adjusting tie.jpg"height="200px"width="200px">
                  </a>
                  <figcaption>How to Tie a Tie </figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <a href="howToBalanceABudget.html">
                    <img src="images/Piggy Bank.jpg" alt="A piggy Bank, As a symbol for budgetting">
                  </a>
                  <figcaption>How to Balance a Budget.</figcaption>
                </figure>
              </li>
            </Ul>
        </section>
        <section class="Health">
          <h2>Health (physical)</h2>
        </section>
        <section class="MentalHealth">
          <h2>Health (Mental)</h2>
        </section>
        <section class="FinanceSection">
          <h2>Finances</h2>
        </section>
        <section class="CarrerBuilding">
          <h2></h2>
          <section class="SocialSituations">
            <h2>Social Situations</h2>
          </section>
        </section>
        <section class="Family">
          <h2>Family</h2>
        </section>
        <section class="WhatDoIdowhen">
          <h2>What Do I Do When...</h2>
          <ul>
          <li>
            <a href="WhatDoIdowhenIGetArrested.html">
              <img src="images/Dad.jpg" alt="mugshot of my dad"
              height="200px"width="200px">
            </a>
            <figcaption>What Do I Do When I get Arrested?</figcaption>
            </li>
            <a href="WhatDoIDoWhenILoseSomeoneCloseToMe.html">
              <img src="" alt=""
              height="200px" width="200px">
              <figcaption>What Do I Do When I Lose Someone Close?</figcaption>
            </a>
          </ul>
        </section>
  </main>`;
