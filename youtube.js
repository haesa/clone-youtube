function moreBtn () {
    const metaTitle = document.querySelector('.info .meta .titleAndView .title');
    const moreBtn = document.querySelector('.info .meta .moreBtn');
    metaTitle.classList.toggle('clamp');
    moreBtn.classList.toggle('clicked');
}

function like() {
    const like = document.querySelectorAll('.info .action .like-dislike')[0];
    const dislike = document.querySelectorAll('.info .action .like-dislike')[1];  
    const actionColor = "rgb(4, 95, 212)";
    const nonActionColor = "rgb(144, 144, 144)";
    like.style.color = (like.style.color == actionColor) ? nonActionColor : actionColor;
    dislike.style.color = nonActionColor;
}

function dislike() {
    const like = document.querySelectorAll('.info .action .like-dislike')[0];
    const dislike = document.querySelectorAll('.info .action .like-dislike')[1];
    const actionColor = "rgb(4, 95, 212)";
    const nonActionColor = "rgb(144, 144, 144)";
    dislike.style.color = (dislike.style.color == actionColor) ? nonActionColor : actionColor;
    like.style.color = nonActionColor;
}

function subscribe() {
    const subscribeBtn = document.querySelector('.info .channel .subscribe');
    subscribeBtn.classList.toggle('clicked');
    subscribeBtn.innerHTML = (subscribeBtn.innerHTML == "SUBSCRIBE") ? "SUBSCRIBED" : "SUBSCRIBE";
}