let settingData = {}



function mousemasuk(x){
    x.style.overflow='auto'
}

function mousekeluar(x){
    x.style.overflow='hidden'
}

const icon= document.querySelector('article .iconbox')

function masukayat(x){
    x.querySelector('.iconbox').style.opacity='100'
}
function keluarayat(x){
    x.querySelector('.iconbox').style.opacity='0'

}


const aside = document.querySelector('aside')
const asideButton = document.querySelector('nav img:first-child')
let asideToggle = true;

asideButton.addEventListener('click',(e)=>{
    if(asideToggle){
        aside.style.display = 'block'
        asideToggle=false
    }else{
        aside.classList.add('keluarLeft')
        setTimeout(()=>{
            aside.style.display = 'none'
            asideToggle=true
        aside.classList.remove('keluarLeft')

        },501)

    }
})


const closesetting = document.querySelector('.closesetting')
const setting = document.querySelector('.setting')
const opensetting = document.querySelector('nav img:last-child')

closesetting.addEventListener('click',(e)=>{
    setting.classList.add('keluarRight')
    setTimeout(()=>{
        setting.style.display = 'none'
        settingToggle=true
    setting.classList.remove('keluarRight')

    },501)
})

opensetting.addEventListener('click',(e)=>{
    setting.style.display = 'block'

})






const saklar = document.querySelectorAll('.saklar input')

saklar.forEach(d=>{
    if(d.parentElement.getAttribute('data-cond')=='on'){
        saklaron(d)
    }else{
        saklaroff(d)

    }

    d.addEventListener('click',(e)=>{
        if(e.target.checked == true){
           e.target.parentElement.setAttribute('data-cond','on')
            saklaron(e.target)
            console.log('on')

        //    e.target.parentElement.querySelector('.bunder').style.transform= 'translateX(12px)'

        }else{
            e.target.parentElement.setAttribute('data-cond','off')
            console.log('off')
            saklaroff(e.target)

            // e.target.parentElement.querySelector('.bunder').style.transform= 'translateX(0)'

        }
        console.log(e.target)
    })

    function saklaron(x){
        x.parentElement.style.backgroundColor='#A4EBF3'
        x.parentElement.querySelector('.bunder').style.transform= 'translateX(12px)'
        updatesetting()
    }
    function saklaroff(x){
        x.parentElement.style.backgroundColor='white'

        x.parentElement.querySelector('.bunder').style.transform= 'translateX(0px)'
        updatesetting()
    }

})



function updatesetting(){
    console.log('setting updated')
    settingData = {
        'reading':{
            'translasi': document.querySelector('.translasi').getAttribute('data-cond'),
            'terjemahan':[
                document.querySelector('.terjemahan').getAttribute('data-cond'),
                document.querySelector('#terjemahanoption').value
            ],
            'tafsir':[
                document.querySelector('.tafsir').getAttribute('data-cond'),
                document.querySelector('#tafsiroption').value
            ],
            'gaya':document.querySelector('#gayaoption').value
        },
        'audio':{
            'qari':document.querySelector('#qarioption').value
        },
        'font':{
            'latin':document.querySelector('#latinoption').value,
            'arab':document.querySelector('#araboption').value,
        }
    }
    console.log(settingData)
}


const select = document.querySelectorAll('.menusetting select')

select.forEach(d=>{
    d.addEventListener('change',(e)=>{
        updatesetting()
        console.log('v ebsz')
    })
})



function rangearab(x){
    console.log(x.value)
    const fontarab = document.querySelectorAll('article section p:nth-child(2)')
    document.querySelector('.fontarabdis').innerHTML=x.value+'px'
    
    fontarab.forEach(e=>{
        e.style.fontSize = x.value+'px'
    })
}
function rangelatin(x){
    console.log(x.value)
    const fontlatin = document.querySelectorAll('article section p:not(p:nth-child(2)')
    document.querySelector('.fontlatindis').innerHTML=x.value+'px'
    
    fontlatin.forEach(e=>{
        e.style.fontSize = x.value+'px'
    })
}
