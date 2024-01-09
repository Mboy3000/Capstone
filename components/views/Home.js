import html from "html-literal";
export default ()=>html`
<main>
<h1>
  Quick Overview
</h1>
<div class="viewBox1">
  <h2>The Schedule Box</h2>
  <button class="ScheduleButton homePage">Calender View</button>
  <button class="ScheduleButton homePage">List view</button>
  <button class="ScheduleButton homePage">Pie View</button>
  <button class="ScheduleButton homePage">Eisenhower-Matrix</button>
  <p>This is were the first view box will be. </p>
  <canvas width="1016" height="508" style="display: block; box-sizing: border-box; height: 254px; width: 508px;"></canvas>

</div>

<div class="viewBox2">
  <h2>The Budget BOX</h2>
<p> This is were the second view box will be.</p>
    <button>Pie Chart</button>
    <button>Bar Graph</button>
    <button>Linear-graph</button>
  </main>`;
