var map = L.map('map').setView([29.76328, -95.36327], 15);

const marker = L.marker([29.76328, -95.36327])
    .bindPopup("Hello <b>Leaflet GL</b>!<br>Whoa, it works!")
    .addTo(map);

var gl = L.mapboxGL({
    accessToken: 'pk.eyJ1IjoianRlc3NlbnNvaG4iLCJhIjoiY2tsYmFjc3BjMzZkeTJ1dDdkZ2V2MGw2OSJ9.2sHkZptFduoI2liDVuNxIQ',
    // get your own MapTiler token at https://cloud.maptiler.com/ or use MapBox style
    style: 'https://api.maptiler.com/maps/topo/style.json?key=gbetYLSD5vR8MdtZ88AQ'
}).addTo(map);



let searchForm = document.querySelector("#searchForm")
searchForm.addEventListener("submit", function (event) {
    let name = document.querySelector("#textbox").value;
    apiGet("geoname", "name=" + name).then(function (data) {
        let message = "Name not found";
        if (data.status == "OK") {
            message = data.name + ", " + data.country;
            lon = data.lon;
            lat = data.lat;
            firstLoad();
        }
        document.getElementById("info").innerHTML = `${message}`;
    });
    event.preventDefault();
});

function firstLoad() {
    apiGet(
        "radius",
        `radius=1000&limit=${pageLength}&offset=${offset}&lon=${lon}&lat=${lat}&rate=2&format=count`
    ).then(function (data) {
        count = data.count;
        offset = 0;
        document.getElementById(
            "info"
        ).innerHTML += `<p>${count} objects with description in a 1km radius</p>`;
        loadList();
    });
}

function loadList() {
    apiGet(
        "radius",
        `radius=1000&limit=${pageLength}&offset=${offset}&lon=${lon}&lat=${lat}&rate=2&format=json`
    ).then(function (data) {
        let list = document.getElementById("list");
        list.innerHTML = "";
        data.forEach(item => list.appendChild(createListItem(item)));
        let nextBtn = document.getElementById("next_button");
        if (count < offset + pageLength) {
            nextBtn.style.visibility = "hidden";
        } else {
            nextBtn.style.visibility = "visible";
            nextBtn.innerText = `Next (${offset + pageLength} of ${count})`;
        }
    });
}
function createListItem(item) {
    let a = document.createElement("a");
    a.className = "list-group-item list-group-item-action";
    a.setAttribute("data-id", item.xid);
    a.innerHTML = `<h5 class="list-group-item-heading">${item.name}</h5>
            <p class="list-group-item-text">${getCategoryName(item.kinds)}</p>`;

    a.addEventListener("click", function () {
        document.querySelectorAll("#list a").forEach(function (item) {
            item.classList.remove("active");
        });
        this.classList.add("active");
        let xid = this.getAttribute("data-id");
        apiGet("xid/" + xid).then(data => onShowPOI(data));
    });
    return a;
}


function onShowPOI(data) {
    const position = new L.LatLng(data.point.lat, data.point.lon)
    marker.setLatLng(position)
    let poi = document.getElementById("poi");
    map.flyTo(position, 20)
    poi.innerHTML = "";
    poi.style.display = "block";
    if (data.preview) {
        poi.innerHTML += `<img src="${data.preview.source}" class = "card-img-top">`;
    }
    const content = data.wikipedia_extracts

        ? data.wikipedia_extracts.html
        : data.info
            ? data.info.descr
            : "No description";

    poi.innerHTML += '<div class = "card-body">' + content + `<p><a target="_blank" href="${data.otm}">Show more at OpenTripMap</a></p>` + "</div>"
}

document
    .getElementById("next_button")
    .addEventListener("click", function () {
        offset += pageLength;
        loadList();
    });