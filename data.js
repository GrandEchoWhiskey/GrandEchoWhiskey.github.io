document.addEventListener("DOMContentLoaded", function () {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("icontent");

            data.forEach(item => {
                const card = document.createElement("div");
                card.classList.add("card", "col-md-4", "col-xl-3", "my-2");

                card.innerHTML = `
                    <div class="card-body">
                        <a href="${item.link}" target="_blank">
                            <img src="${item.image}" class="card-img-top profile mx-auto d-block my-3" alt="${item.title}"/>
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