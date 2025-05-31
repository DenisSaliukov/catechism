(() => {
    "use strict";
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const links = document.querySelectorAll(".page__link");
    const pageFile = document.querySelector(".page__file");
    const fileName = document.querySelector(".page__name");
    const audio = document.querySelector(".page__audio");
    const subtitle = document.querySelector(".page__subtitle");
    for (let i = 0; i < links.length; i++) links[i].addEventListener("click", (function(e) {
        let linkName = links[i].innerHTML;
        console.log(linkName);
        window.sessionStorage.setItem("number", i);
        window.sessionStorage.setItem("name", linkName);
    }));
    if (pageFile) {
        fileName.innerHTML = window.sessionStorage.getItem("name");
        audio.innerHTML = `<audio controls>\n                            <source src="files/${Number(window.sessionStorage.getItem("number")) + 1}.mp3">\n                        </audio>`;
        subtitle.innerHTML = `Шаг ${Number(window.sessionStorage.getItem("number")) + 1} из 68`;
        if (Number(window.sessionStorage.getItem("number")) + 1 == 20) pageFile.insertAdjacentHTML("beforeEnd", `<div class="page__20">\n                        <span class="page__span">Минимально необходимый, на наш взгляд, список святых отцов для научения\n                            практике духовной жизни:\n                        </span>\n                        <ol class="page__20-list 20-list">\n                            <li class="20-list__item">Иоанн Лествичник,</li>\n                            <li class="20-list__item">Иоанн Златоуст,</li>\n                            <li class="20-list__item">Феофан Затворник,</li>\n                            <li class="20-list__item">Игнатий Брянчанинов,</li>\n                            <li class="20-list__item">Варсануфий и Иоанн,</li>\n                            <li class="20-list__item">Макарий Великий,</li>\n                            <li class="20-list__item">Василий Великий,</li>\n                            <li class="20-list__item">Ефрем Сирин,</li>\n                            <li class="20-list__item">Исаак Сирин,</li>\n                            <li class="20-list__item">Авва Дорофей,</li>\n                            <li class="20-list__item">Никодим Святогорец,</li>\n                            <li class="20-list__item">Иоанн Кронштадтский.</li>\n                        </ol>\n                        <span>Удобным способом обучения духовной жизни также является сайт <a\n                                href="https://ioann.ru">ioann.ru</a></span>\n                    </div>`);
        if (Number(window.sessionStorage.getItem("number")) + 1 == 50) pageFile.insertAdjacentHTML("beforeEnd", `<div class="page__50">\n                        <iframe src="https://vk.com/video_ext.php?oid=-191007457&id=456239655&hash=dd26a39f61897aa2"\n                            width="640" height="360" frameborder="0" allowfullscreen="1"\n                            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"></iframe>\n                    </div>`);
    }
    window["FLS"] = true;
})();