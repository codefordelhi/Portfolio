console.log("IT’S ALIVE!");

const ARE_WE_HOME = document.documentElement.classList.contains("home");

function $$ (selector, context = document) {
	return Array.from(context.querySelectorAll(selector));
}

// let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname);
// currentLink?.classList.add("current");

let pages = [
	{url: "", title: "Home"},
	{url: "projects/", title: "Projects"},
];
let nav = document.createElement("nav");
document.body.prepend(nav);

for (let p of pages) {
        let url = p.url;
        let title = p.title;
        nav.insertAdjacentHTML("beforeend", `<a href="${ url }">${ title }</a>` );
        url = !ARE_WE_HOME && !url.startsWith("http") ? "../" + url : url;
}