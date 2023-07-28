const source = document.getElementById("entry-template").innerHTML;
const template = Handlebars.compile(source);
const context = { title: "My New Post", body: "This is my first post!", imgURL:"https://robohash.org/martina"

};
const html = template(context);

document.querySelector("body").innerHTML=html