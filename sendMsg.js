function sendMsg(){
    const msg_container = document.querySelector(".js-chat__container");
    const msgInput = document.querySelector(".js-input");
    const msgBtn = document.querySelector(".js-msgBtn");
    msgBtn.addEventListener("click",function (e){
        e.preventDefault();
        submitEvent();
    });

    msgBtn.addEventListener("keydown", function(e){
        e.preventDefault();
    })

    function submitEvent(){
        if(msgInput.value) {
            const div1 =document.createElement("div");
            const div2 = document.createElement("div");
            const div3 = document.createElement("div");
            const span2 =document.createElement("span");
            const span3 =document.createElement("span");
            div1.classList ="message-row--own";
            div2.classList ="message-row__content";
            div3.classList = "message__info";
            span2.classList = "message__bubble";
            span2.innerText = msgInput.value;
            span3.classList = "message__time";
            span3.innerText =document.querySelector(".js-clock").innerText;

            div1.appendChild(div2);
            div2.appendChild(div3);
            div3.appendChild(span2);
            div3.appendChild(span3);
            window.scrollTo(0,window.innerHeight);
            msg_container.appendChild(div1);
            msgInput.value = "";
        };
    };
};

sendMsg();