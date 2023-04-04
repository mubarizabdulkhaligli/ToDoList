let btn = document.querySelector(".btn");
let alertBox = document.querySelector(".alert");
let infoBox = document.querySelector(".info-box");
let taskCount = document.querySelector(".task-count");
let count = 0;

btn.onclick = function () {
  let value = document.querySelector(".form input").value;
  if (value.trim() !== "") {
    count++;
    if (count > 0) {
      infoBox.classList.add("d-none");
      taskCount.classList.remove("d-none");
      taskCount.innerHTML = `<h5 class="text-white">You have ${count} tasks</h5>`;
    }
    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    let button = document.createElement("button");
    h3.innerHTML = value;
    button.innerHTML = "Remove";
    button.className = "btn btn-danger";
    div.className = "d-flex justify-content-between list-box";
    div.append(h3, button);
    document.querySelector(".list").appendChild(div);
    alertBox.classList.remove("d-none");
    setTimeout(() => {
      alertBox.classList.add("d-none");
    }, 1000);

    button.onclick = function () {
      if (count > 0) {
        count--;
        taskCount.innerHTML = `<h5 class="text-white">You have ${count} tasks</h5>`;
      }
      if (count === 0) {
        taskCount.classList.add("d-none");
        infoBox.classList.remove("d-none");
      }
      div.remove();
    };
  }

  document.querySelector(".form input").value = "";
};
