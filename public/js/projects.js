export const projects = [
    {
      Image: "./assets/obsidian-essentials.png",
      Title: "Obsidian Essentials",
      Description: "Obsidian Essential, the ultimate add-on for enhancing your Minecraft Bedrock experience! Enjoy features like announcements, custom warps, instant TPA, and powerful admin tools. Streamline your realm management and elevate gameplay with Obsidian Essential—your world, your way!",
      Tags: ["Minecraft", "Essentials", "Add-On"],
      HomePageView: true,
      projectSlug: "realm-essentials", // Slug for API lookup
      MCPEDLLINK: "https://mcpedl.com/realm-essentials/",
      DOWNLOADLINK: "https://www.mediafire.com/folder/jtlpl10wk86py/Obsidian_Essentials",
    },

    {
      Image: "./assets/livesplus.png",
      Title: "Lives+",
      Description: "Lives+ introduces a customizable lives and revival system to your Minecraft world. Players start with a set number of lives and, once exhausted, are moved to spectator mode until they are revived. With this add-on, you can create your own 3rd Life",
      Tags: ["Survival", "Third Life", "Roleplay"],
      HomePageView: true,
      projectSlug: "lives-plus",
      MCPEDLLINK: "https://mcpedl.com/lives/",
      DOWNLOADLINK: "https://www.mediafire.com/folder/hu5pkbzbc68ue/Lives%2B"
    },

    /*
    {
      Image: "",
      Title: "",
      Description: "",
      Tags: [""],
      HomePageView: false,
      projectSlug: "",
      MCPEDLLINK: "",
      DOWNLOADLINK: ""
    },
      */
    // Add more projects as needed
  ];
  

  const container = document.getElementById("projects-container");

projects.forEach((project) => {
  const card = document.createElement("div");
  card.classList.add("bg-gray-800", "p-4", "rounded-lg", "shadow-md");
  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}" class="rounded-t-lg w-full h-40 object-cover">
    <h3 class="mt-2 text-lg font-semibold">${project.title}</h3>
    <p>${project.description}</p>
  `;
  container.appendChild(card);
});