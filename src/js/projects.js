import { projects } from "../data/projects.js";

const projectsContainer = document.querySelector("#projects-container");

projects.forEach((project) => {
  const card = document.createElement("div");
  card.classList.add(
    "bg-gray-800", // Updated gray background color
    "rounded-lg",
    "shadow-lg",
    "overflow-hidden",
    "transform",
    "transition-transform",
    "duration-300",
    "hover:scale-105",
    "max-w-xs", // Limit the width for a more rectangular look
    "w-full"
  );

  // Card content
  card.innerHTML = `
    <img src="${project.Image}" alt="${project.Title}" class="w-full h-48 object-cover">
    <div class="p-6">
      <h3 class="text-xl font-semibold text-gray-100">${project.Title}</h3>
      <p class="mt-2 text-gray-400">${project.Description}</p>
      <div class="mt-4 flex flex-wrap gap-2">
        ${project.Tags.map(tag => `<span class="inline-block bg-gray-600 text-sm text-gray-100 px-3 py-1 rounded-full">${tag}</span>`).join('')}
      </div>

      <!-- Bug Report Button -->
      <div class="mt-4">
        <a href="/bug-report?projectname=${encodeURIComponent(project.Title)}" class="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-200">
          Report a Bug
        </a>
      </div>

      <div class="mt-4 flex justify-between gap-4">
        <a href="${project.DOWNLOADLINK}" class="bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
          Download
        </a>
        <a href="${project.MCPEDLLINK}" class="bg-green-600 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200">
          MCPEDL
        </a>
      </div>
    </div>
  `;

  // Append card to the container
  projectsContainer.appendChild(card);
});
