document.addEventListener("DOMContentLoaded", function () {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementsByClassName("data");

            data.forEach(item => {
                const card = document.createElement("div");
                item.class.split(" ").forEach(x => card.classList.add(x));

                var category = window.location.href.toLowerCase().split("/").pop().split(".")[0];

                card.innerHTML = `
                    <div class="card-body">
                        <a href="${item.link}" target="_blank">
                            <img src="${item.image}" class="${item.img_class}" alt="${item.title}"/>
                        </a><hr>
                        <h5 class="card-title">${item.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${item.subtitle}</h6>
                        <p class="card-text" style="text-align: justify; text-justify: inter-word;">
                            ${item.description ? item.description : ""}
                        </p>
                    </div>
                `;

                if (category == "index") {
                    container.appendChild(card);
                } else {
                    if (item.category == category) {
                        container.appendChild(card);
                    }
                }
            });
        })
        .catch(error => console.error("Error loading data:", error));
});