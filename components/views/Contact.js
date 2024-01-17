import html from "html-literal";
export default () => html`
 <main>
    <h1>Contact</h1>
    <fieldset>
      <form action="https://formspree.io/f/xrgwgooa"   method="POST">
        <label for="firstName">First Name:</label><br><br>
        <input type="text" name="firstName" id="firstName" placeholder="John" required><br><br>
        <label for="lastName">Last Name:</label><br><br>
        <input type="text" name="lastName" id="lastName" placeholder="Doe" required><br><br>
        <label for="email">Email:</label><br><br>
        <input type="text" name="email" id="email" placeholder="your email@gmail.com" required><br><br>
        <legend>Reason For contact:</legend><br>
        <label for="copyrightClaim">
          <input type="radio" name="reasonForContact" value="copy-rightClaim" aria-label="Copy Right"> copy-right</label>
        <label for="factCorrection">
          <input type="radio" name="reasonForContact" value="factCorrection"> Fact Correction</label>
        <label for="other">
          <input type="radio" name="reasonForContact" value="other">other</label><br><br>
        <label for="message">Leave a message:<br><br>
          <textarea id="message" name="message" rows="5" cols="40" placeholder="I feel so empty..."></textarea>
        </label><br><br>
        <label for="submit" name="submit"value="submit"><input type="submit"></label>
        </fieldset>
    </form>
  </main>`;
