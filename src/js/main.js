// src/js/main.js
import { projects } from "../data/projects.js";

const projectsContainer = document.querySelector("#projects-container");

projects.forEach((project) => {
  if (project.HomePageView) {
    const card = document.createElement("div");
    card.classList.add(
      "bg-white",
      "rounded-lg",
      "shadow-lg",
      "overflow-hidden",
      "transform",
      "transition-transform",
      "duration-300",
      "hover:scale-105"
    );

    // Card content
    card.innerHTML = `
      <img src="${project.Image}" alt="${project.Title}" class="w-full h-48 object-cover">
      <div class="p-6">
        <h3 class="text-xl font-semibold text-gray-800">${project.Title}</h3>
        <p class="mt-2 text-gray-600">${project.Description}</p>
        <div class="mt-4 flex flex-wrap gap-2">
          ${project.Tags.map(tag => `<span class="inline-block bg-gray-200 text-sm text-gray-800 px-3 py-1 rounded-full">${tag}</span>`).join('')}
        </div>
      </div>
    `;
    
    // Append card to the container
    projectsContainer.appendChild(card);
  }
});
