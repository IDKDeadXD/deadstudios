const modal = document.getElementById("bugReportModal");

function openBugReportModal() {
  modal.classList.remove("hidden");
}

function closeBugReportModal() {
  modal.classList.add("hidden");
}

document.getElementById("bugReportForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Bug report submitted!");
  closeBugReportModal();
});
