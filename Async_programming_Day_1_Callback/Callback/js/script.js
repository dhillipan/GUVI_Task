const body = document.getElementsByTagName("body")[0];
body.style.display = "flex";
body.style.justifyContent = "space-around";
body.style.marginTop = "100px";

const root = document.getElementById("root");

root.innerHTML = "";

root.className = "root";
root.style.backgroundColor = "grey";
root.style.width = "fit-content";
root.style.padding = "10px";
root.style.borderRadius = "5px";

let newTag = document.createElement("h1");
newTag.style.textAlign = "center";
newTag.style.color = "black";
newTag.style.padding = "20px";
newTag.style.fontFamily = "arial";
newTag.style.fontSize = "100px";
root.appendChild(newTag);

setTimeout(() => {
  newTag.innerHTML = "10";
  setTimeout(() => {
    newTag.innerHTML = "09";
    setTimeout(() => {
      newTag.innerHTML = "08";
      setTimeout(() => {
        newTag.innerHTML = "07";
        setTimeout(() => {
          newTag.innerHTML = "06";
          setTimeout(() => {
            newTag.innerHTML = "05";
            setTimeout(() => {
              newTag.innerHTML = "04";
              setTimeout(() => {
                newTag.innerHTML = "03";
                setTimeout(() => {
                  newTag.innerHTML = "02";
                  setTimeout(() => {
                    newTag.innerHTML = "01";
                    setTimeout(() => {
                      newTag.innerHTML = "Happy Independence Day";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
