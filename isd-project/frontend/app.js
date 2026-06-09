fetch("http://localhost:3000/books")
  .then(response => response.json())
  .then(data => {

    const container = document.getElementById("book-list");

    data.forEach(book => {
      const div = document.createElement("div");

      div.className = "book";

      div.innerHTML = `
        <h3>${book.title}</h3>
        <p>${book.author}</p>
      `;

      container.appendChild(div);
    });

  });
