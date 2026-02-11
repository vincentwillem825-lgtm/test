// Load the JSON metadata
fetch("data/items.json")
  .then(response => response.json())
  .then(items => {
    window.items = items; // store globally
    renderItems(items);
  })
  .catch(err => console.error("Error loading items.json:", err));

// Function to render media items
function renderItems(list) {
  const container = document.getElementById("media-list");
  container.innerHTML = "";

  list.forEach(item => {
    const el = document.createElement("div");
    el.style.marginBottom = "20px";
    el.innerHTML = `
      <h3>${item.title}</h3>
      ${ item.file.endsWith(".mp4")
        ? `<video controls width="480" src="${item.file}"></video>`
        : `<img src="${item.file}" width="480"/>`
      }
      <p>${item.tags.join(", ")}</p>
      <p>${item.description}</p>
    `;
    container.appendChild(el);
  });
}
