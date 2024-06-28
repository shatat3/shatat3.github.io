let projectsdiv=document.getElementById("projects");
for (let i= 0; i < PROJECT.length; i++) {
    var curentProject=PROJECT[i];

    //div
    let projectDiv=document.createElement("div");
    let divStyle=document.createAttribute("style");
    divStyle.value="display:inline-block; width:300px; margin: 10px;";
    projectDiv.setAttributeNode(divStyle);

    //h3
    let title=document.createElement("h3");
    let titlenode=document.createTextNode(curentProject.title);
    title.appendChild(titlenode);

    //img
    let image =document.createElement("img");
    let source= document.createAttribute('src');
    source.value="./images/"+curentProject.img;
    image.setAttributeNode(source);
    let imagestyle=document.createAttribute("style");
    imagestyle.value="width:180px; height:100px;";
    image.setAttributeNode(imagestyle);

    //p
    let p=document.createElement("p");
    let pNode=document.createTextNode(curentProject.discription);
    p.appendChild(pNode);

    projectDiv.appendChild(title);
    projectDiv.appendChild(image);
    projectDiv.appendChild(p);

    projectsdiv.appendChild(projectDiv);

    
    
}