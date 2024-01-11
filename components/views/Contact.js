import html from "html-literal";
export default()=>html`
 <main>
    <h1>Contact</h1>
    <form>
      <label for="firstName">First Name:</label>
      <input type="text" name="firstName" id="firstName"><br><br>
      <label for="lastName">Last Name:</label>
      <input type="text" name="lastName" id="lastName"><br><br>
      <label for="email">Email:</label>
      <input type="text" name="email" id="email"><br>
      <label for="reasonForContact">Reason For contact:</label>
      <input type="radio" name="reasonForContact" value="copy-rightClaim" aria-label="Copy Right">copy-right
      <input type="radio" name="reasonForContact" value="factCorrection"> Fact Correction<br>
      <input type="radio" name="reasonForContact" value="">
    </form>
  </main>`;
