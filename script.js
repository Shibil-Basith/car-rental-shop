const pickup = document.getElementById("pickupDate");
const ret = document.getElementById("returnDate");
const today = new Date();
const iso = today.toISOString().split("T")[0];
pickup.min = iso;
ret.min = iso;

pickup.addEventListener("change", () => {
  ret.min = pickup.value || iso;
  if (ret.value && ret.value < pickup.value) ret.value = pickup.value;
});

document.getElementById("searchCars").addEventListener("click", () => {
  document.getElementById("cars").scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll(".filter").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    document.querySelectorAll(".car-card").forEach(card => {
      card.style.display = filter === "all" || card.dataset.type === filter ? "" : "none";
    });
  });
});

const modal = document.getElementById("rentModal");
const selectedCar = document.getElementById("selectedCar");
const modalPickup = document.getElementById("modalPickup");
const modalReturn = document.getElementById("modalReturn");
const message = document.getElementById("formMessage");

document.querySelectorAll(".rent-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    selectedCar.textContent = btn.dataset.car;
    modalPickup.value = pickup.value || "";
    modalReturn.value = ret.value || "";
    modalPickup.min = iso;
    modalReturn.min = modalPickup.value || iso;
    message.textContent = "";
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  });
});

modalPickup.addEventListener("change", () => {
  modalReturn.min = modalPickup.value || iso;
  if (modalReturn.value && modalReturn.value < modalPickup.value) modalReturn.value = modalPickup.value;
});

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}
document.querySelector(".close-modal").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

document.getElementById("confirmBooking").addEventListener("click", () => {
  if (!modalPickup.value || !modalReturn.value) {
    message.textContent = "Please select both pickup and return dates.";
    message.style.color = "#b45309";
    return;
  }
  message.textContent = `Great choice! ${selectedCar.textContent} is ready for your selected dates.`;
  message.style.color = "#3f6f64";
});

document.querySelector(".menu-btn").addEventListener("click", () => {
  const nav = document.querySelector(".nav-links");
  const open = nav.style.display === "flex";
  nav.style.cssText = open ? "" : "display:flex;position:absolute;top:82px;left:0;right:0;background:#f4f6f8;padding:20px 6vw;flex-direction:column;gap:18px;border-bottom:1px solid #e5e7eb;";
});

