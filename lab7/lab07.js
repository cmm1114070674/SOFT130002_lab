const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];

function MyElement(tag, { className, styleText, src }, children) {
    const elt = document.createElement(tag);
    if (className != undefined) elt.className = className;
    if (styleText != undefined) elt.style.cssText = styleText;
    if (src !== undefined) elt.src = src;
    if (Array.isArray(children)) children.forEach(child => elt.append(child));
    return elt;
}

function PhotoList({ photos }) {
    return new MyElement("div", { 
        className: 'inner-box'
    }, [
        new MyElement("h3", {}, [ "Popular Photos" ])
    ].concat(photos.map(photo => 
        new MyElement("img", { className: "photo", src: photo })
    )));
}

function Item({ author, lifetime, photos, tips }) {
    const item = document.createElement("div");
    item.classList.add("item");
    item.append(
        new MyElement("h4", {}, [ `Genre: ${tips}` ]),
        new MyElement("div", { 
            className: 'inner-box', 
            styleText: 'display: flex; align-items: baseline;'
        }, [
            new MyElement("h3", { styleText: 'white-space: nowrap; margin-right: 10px;' }, [ author ]),
            new MyElement("p", {}, [ `lifetime: ${lifetime}` ])
        ]),
        new PhotoList({ photos }),
        new MyElement("button", {}, [ "Visit" ])
    );
    return item;
}

/**
 * Main Part
 * */
const container = document.querySelector("div.flex-container.justify");

const items = works.map(work => 
    new Item(work)
);

items.forEach(item => container.appendChild(item));