const route =  (event) => {
    // use the value of event if available or
    // if not assume it's IE and use window.event,
    // the right hand expression is used for compatibility topics
    event = event || window.event;
    event.preventDefault();
    //history interface allows manipulation of the browser 
    //session history, that is the pages visited in 
    //the tab or frame that the current page is loaded in
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    404: "./pages/404.html",
    "/": "./pages/index.html",
    "/about": "./pages/about.html",
    "/lorem": "./pages/lorem.html"
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();



