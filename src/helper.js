export function display(t) {
  const a = document.createElement("div");
  a.innerHTML = t;
  document.getElementById("app").appendChild(a);
}
