let tombol = document.querySelectorAll(".filter_btn");
let gambar   = document.querySelectorAll(".gambar");

tombol.forEach((tombolsatu) => { 
    tombolsatu.addEventListener("click", () => {
    tombol.forEach((button) => button.classList.remove("active"));
    tombolsatu.classList.add("active");
    

        // Your click handler code here
        const filter = tombolsatu.getAttribute("data-filter");
    gambar.forEach((gambarsatu) => {
        if (filter === "all" || gambarsatu.classList.contains(filter)) {
            gambarsatu.style.display = "block";
        } else {
            gambarsatu.style.display = "none";
        } 

        });
    });
}); 