(function () { // Closure - wrapping your code in a "safe-bubble"    
    const resource = {
        solar: {
            title: "Solar Energy",
            text: "Solar energy is not only sustainable, it is renewable and this means that we will never run out of it. It is about as natural a source of power as it is possible to generate electricity. There are continual advancements in solar panel technology which are increasing the efficiency and lowering the cost of production, thus making it even more cost effective.During operation solar electricity power plants produce zero emissions. ",
            image: "./img/solarenergy.jpg"
        },
        wind: {
            title: "Wind Power",
            text: "Wind power is the use of air flow through wind turbines to mechanically power generators for electric power. Wind power, as an alternative to burning fossil fuels, is plentiful, renewable, widely distributed, clean, produces no greenhouse gas emissions during operation, consumes no water, and uses little land. The net effects on the environment are far less problematic than those of nonrenewable power sources.",
            image: "./img/windpower.jpg"
        },
        hydro: {
            title: "Hydropower",
            text: "Wind power is the use of air flow through wind turbines to mechanically power generators for electric power. Wind power, as an alternative to burning fossil fuels, is plentiful, renewable, widely distributed, clean, produces no greenhouse gas emissions during operation, consumes no water, and uses little land. Since the early 20th century, the term has been used almost exclusively in conjunction with the modern development of hydroelectric power. ",
            image: "./img/hydropower.jpg"
        }
    };

    const buttons = document.querySelectorAll(".buttons button");
    const article = document.querySelector("article");

    function loadContent(ev) {
        let clickedBtn = ev.target;
        let key = clickedBtn.getAttribute("data-content");

        article.innerHTML = "";

        let h2 = document.createElement("h2");
        h2.textContent = resource[key].title;
        article.appendChild(h2);

        let p = document.createElement("p");
        p.textContent = resource[key].text;
        article.appendChild(p);

        let img = document.createElement("img");
        img.setAttribute("src", resource[key].image);
        article.appendChild(img);
    }

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", loadContent);
    }

}()); // Closing and invoking closure
