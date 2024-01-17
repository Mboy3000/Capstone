import html from "html-literal";
export default()=>html`
<main>
<h1>This is The Budget Page.</h1>
<fieldset>
  <form>
<label for ="firstName"> First Name: <input type="text" name="firstName"id="firstName"  required></label><br><br>
<label for ="lastName"> Last Name:<input type="text" name="lastName"id="lastName" required></label><br><br>
<label for ="income">Monthly Income: <input type="text" name="income" id="income"  required></label><br><br>
<label for ="expenses">Monthly expenses: <input type="text" name="expenses" id="expenses"  required></label><br><br>
</form>
</fieldset>
</main>
`;
