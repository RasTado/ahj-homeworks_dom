export default function troll() {
  const gameC = document.querySelector(".game_cont");
  const gameTable = `
    <table>
      <tbody>
        <tr>
          <td></td><td></td><td></td><td></td>
        </tr>
        <tr>
          <td></td><td></td><td></td><td></td>
        </tr> 
        <tr>
          <td></td><td></td><td></td><td></td>
        </tr>
        <tr>
          <td></td><td></td><td></td><td></td>
        </tr>
      </tbody>
    </table>
    `;
  gameC.insertAdjacentHTML("afterbegin", gameTable);

  const fields = gameC.querySelectorAll("td");
  setInterval(() => {
    let fda = gameC.querySelector(".troll");
    if (fda) {
      fda.classList.remove("troll");
    }
    let fd = fields[Math.floor(Math.random() * fields.length)];
    fd.classList.add("troll");
  }, 500);
}
