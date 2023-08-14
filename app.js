var tID;

function stop(){
    clearInterval(tID);
}

function animation(){
    var position = 256;
    const interval = 100;
    const diff = 256;

    tID = setInterval(() => {
        document.getElementById('img').style.backgroundPosition =`${position}px 0px`;
        if(position < 1536)
        {position = position + diff;}
        else
        { position = 256;}
     } 
     ,interval);
}

