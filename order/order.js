let itemOrder = [
    {
        dipesan : false,
        harga : 15000,
        nama : 'Bakso',
    },
    {
        dipesan : false,
        harga : 25000,
        nama : 'Nasgor',
    },
    {
        dipesan : false,
        harga : 10000,
        nama : 'Wedang Jahe',
    },
    {
        dipesan : false,
        harga : 13000,
        nama : 'Soto Ayam',
    },
]


let totalOder = 0;

const itemTerpilih = document.getElementsByClassName
('item');

const textTotal = document.getElementById
('last-item');

for( let i = 0; i < itemTerpilih.length; i++){
    itemTerpilih[i].addEventListener('click', function(){
        setItemPemesanan(i, itemTerpilih[i]);

    });
}

function setItemPemesanan(index, elemen){
    if (itemOrder[index].dipesan == false){
        itemOrder[index].dipesan = true;
        elemen.style.backgroundColor = "gray";
        // elemen.style.color = "white";
        totalOder = totalOder + itemOrder[index].harga;
    }
    else {
        itemOrder[index].dipesan = false;
        elemen.style.backgroundColor = "darkgrey";
        elemen.style.color = "black";
        totalOder = totalOder - itemOrder[index].harga;
    }

    textTotal.innerHTML = "Total <span>= Rp" + totalOder + "</span>";
}
