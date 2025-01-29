document.addEventListener("DOMContentLoaded", function () {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("icontent");

            data.forEach(item => {
                const card = document.createElement("div");
                item.class.split(" ").forEach(x => card.classList.add(x));

                card.innerHTML = `
                    <div class="card-body">
                        <a href="${item.link}" target="_blank">
                            <img src="${item.image}" class="${item.img_class}" alt="${item.title}"/>
                        </a><hr>
                        <h5 class="card-title">${item.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${item.subtitle}</h6>
                        <p class="card-text">
                            ${item.description ? item.description : ""}
                        </p>
                    </div>
                `;

                container.appendChild(card);
            });
        })
        .catch(error => console.error("Error loading data:", error));
});