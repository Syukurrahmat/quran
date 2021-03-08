let idSurah = 1; 

async function dataayahFunc() {
    const res = await fetch(`https://api.quran.sutanlab.id/surah/${idSurah}`);
    return await res.json();
}
async function scriptFunc() {
    const res = await fetch(`https://api.quran.com/api/v4/quran/verses/${settingData.reading.gaya}?chapter_number=${idSurah}`);
    return await res.json();
}
async function script2Func() {
    const res = await fetch(`https://quranapi.idn.sch.id/surah/1`);
    return await res.json();
}
async function audioFunc() {
    const res = await fetch(`https://api.quran.com/api/v4/quran/recitations/${settingData.audio.qari}?chapter_number=${idSurah}`);
    return await res.json();
}

async function ambilayat(){
    dataayah = await dataayahFunc()
    script = await scriptFunc()
    script2 = await script2Func()
    audio = await audioFunc()
    
    script = script.verses
    
    dataayah = dataayah.data
    console.log('dataayah')
    console.log(dataayah)
    console.log('script')
    console.log(script)
    console.log('script2')
    console.log(script2)
    console.log('audio')
    console.log(audio)



// ambilayat()

let article = document.querySelector('article')

for(i=0;i<dataayah.numberOfVerses;i++){
    let sectionisi = document.createElement('section')
    sectionisi.setAttribute('onmouseover',"masukayat(this)")
    sectionisi.setAttribute('onmouseout',"keluarayat(this)")

    let scriptArr = Object.keys(script[i]).map(function(k) { return script[i][k] });

    sectionisi.innerHTML=`
    <div class="iconbox">
        <img src="img/Group 43.svg" alt="">
        <img src="img/heart.svg" alt="">
        <img src="img/card-heading.svg" alt="">
        <img src="img/send.svg" alt="">
        <img src="img/copy.svg" alt="">
    </div>
    <div class="ayatbox">
        <div class="nomorayat">${scriptArr[1]}</div>
        <p>
            ${scriptArr[2]}
        </p>
        <p>
           
        </p>
        <p>
            Wahai manusia! Bertasatu (Adam), dan (Allah) menciptakan pasangannya (Hawa) dariAllah memperkembangbiakkan laki-laki dan perempuan yang banyak. Bertakwalah kepada Allah yang dengan nama-Nya kamu saling meminta, dan (peliharalah) hubungan kekeluargaan. Sesungguhnya Allah selalu menjaga dan mengawasimu.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisoluptatum, quasi quas, quisdolorum facilis. Similique odio perspiciatis beatae quasi eius nobis eum officia qui voluptates aliquam cum nostrum dolore, voluptas voluptatibus natus aut soluta vel earum?
        </p>
    </div>
    `
    // console.log(sectionisi)
}

}


ambilayat()