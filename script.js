const daftar = document.querySelector('.daftar')
// inisiasi
listSurat()
// main
document.querySelector('.setting').style.display ='block'
// -----


const pilihandaftar = document.querySelectorAll('.pilihandaftar p')



pilihandaftar.forEach((d)=>{
    d.addEventListener('click',(e)=>{
        let underline = document.querySelector('.underline')
        if(e.target.innerHTML=='Surat'){
            underline.style.left = '0px'
        }else if(e.target.innerHTML=='Juz'){
            underline.style.left = '60px'
        }else{
            underline.style.left = '120px'

        }
        e.target.classList.add('terpilih')

        if(e.target.innerHTML=='Surat'){
            listSurat()
        }else if(e.target.innerHTML=='Juz'){
            listJuz()
        }

    })
    
})


//perubahan list



// list surat
function listSurat(){
    daftar.innerHTML=`<img class='loading' src="img/Ellipsis-1s-84px.svg" alt="">`;
    setTimeout(()=>{
        daftar.innerHTML=''
        for(i=0;i<dataSurat.length;i++){
            let newSection = document.createElement('section')
            newSection.setAttribute( 'data-id', `surat-${dataSurat[i].id}`)
            newSection.innerHTML = `
            <div class="nomordaftar">${dataSurat[i].id}</div>
            <div class="isidaftar">
                <p>${dataSurat[i].nama}</p>
                <p><span style="text-transform: capitalize; font-style: italic;">${dataSurat[i].tempat}</span> <span>|</span> ${dataSurat[i].ayat} ayat</p>
            </div>
            `
            daftar.appendChild(newSection)
        }
    },400)

    

}

function listJuz(){
    daftar.innerHTML=`<img class='loading' src="img/Ellipsis-1s-84px.svg" alt="">`;
    setTimeout(()=>{
        daftar.innerHTML=''
        for(i=0;i<dataJuz.length;i++){
            let newSection = document.createElement('section')
            newSection.setAttribute( 'data-id', `juz-${dataJuz[i].id}`)
            if(dataJuz[i].suratakhir[0]==dataJuz[i].suratawal[0]){
                g=''
                h= ''
            }else{
                g=':'
                h=dataJuz[i].suratakhir[0]
            }
            newSection.innerHTML = `
            <div class="nomordaftar">${dataJuz[i].id}</div>
            <div class="isidaftar">
                <p>Juz ${dataJuz[i].id}</p>
                <p>${dataJuz[i].suratawal[0]} : ${dataJuz[i].suratawal[1]} <span>-</span> ${h} ${g} ${dataJuz[i].suratakhir[1]}</p>
            </div>
            `
            daftar.appendChild(newSection)
        }

    },400)
    
    

}

// isiquran

let id = 114

header = document.querySelector('header')
header.innerHTML=`
<div class="headerkiri">
<div class="iconbox">
    <img src="img/Group 43.svg" alt="">
    <img src="img/heart.svg" alt="">
</div>
<div class="name">
        <p>${dataSurat[id-1].namaarab}</p>
        <p>${dataSurat[id-1].nama}</p>
        <p>${dataSurat[id-1].namaarti}</p>
</div>
</div>
<div class="headerkanan">
    <p><span style="text-transform: capitalize">${dataSurat[id-1].tempat}</span> | ${dataSurat[id-1].ayat} Ayat | Surat ke-${dataSurat[id-1].urutan}</p>
    <div class="jajar">
        <p>Ayat</p>
        <input type="number" name="" id="" min =1 max=${dataSurat[id-1].ayat}>
    </div>
    <div class="jajartebal">
        <p>Terkait Surat ${dataSurat[id-1].nama}</p>
        <img src="img/arrow-circle-right.svg" alt="">
    </div>
</div>
`



