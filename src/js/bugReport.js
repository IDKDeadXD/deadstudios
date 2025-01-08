document.getElementById("bugReportForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const projectName = document.getElementById("modalTitle").innerText.split(' - ')[1]; // Get the project name
    const image = document.getElementById("image").files[0];
  
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("project", projectName);
    if (image) formData.append("image", image);
  
    fetch("https://discord.com/api/webhooks/1325781361025618012/RHdDLYxs0M2t4Vdnhb2WW1rUG5iB4a6jfOt3YVJBAnYSfuYEsSR5kZwsxdPwf7V7-0O-", {
      method: "POST",
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      alert("Bug report submitted successfully!");
      closeBugReportModal();
    })
    .catch(error => {
      alert("There was an error submitting the report.");
      console.error(error);
    });
  });
  