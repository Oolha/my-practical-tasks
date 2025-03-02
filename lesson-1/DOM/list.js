document.querySelectorAll(".item").forEach((item) => {
  item.addEventListener("click", function () {
    let img = this.querySelector("img");

    if (!img) {
      img = document.createElement("img");
      img.src = this.getAttribute("data-image");
      img.alt = this.textContent;
      this.appendChild(img);

      setTimeout(() => {
        this.classList.add("expanded");
      }, 50);
    } else {
      if (this.classList.contains("expanded")) {
        this.classList.remove("expanded");
        setTimeout(() => {
          if (img && !this.classList.contains("expanded")) {
            img.remove();
          }
        }, 500);
      } else {
        this.classList.add("expanded");
      }
    }
  });
});
