k=['aqua','aqua','aquamarine','aquamarine','violet','violet',
    'beige','beige','yellow','yellow','orange','orange',
    'red','red','lime','lime','olive','olive','pink',
    'pink','green','green','blue','blue',
    'lightblue','lightblue','chocolate','chocolate','brown',
    'brown'
]

function ig(a){return document.getElementById(a)}
function ie(a){return document.createElement(a)}
function ii(a,b){a.id=b}
function ic(a,b){a.classList.add(b)}
function it(a,b){a.textContent=b}
function ap(a,b){a.appendChild(b)}

function ix(a,b,c){
    if(a==0)b.style.width=c+'px'
    else b.style.height=c+'px'
}

function ibn(a){a.style.border='none'}
function irg(a,b){a.style.margin=b+'px'}
function idm(a,b){
    a.style.width=b+'px'
    a.style.height=b+'px'
}

function dpn(a){a.style.display='none'}
function dpb(a){a.style.display='block'}
function dpi(a){a.style.display='inline'}

function mt(a,b){return Math.floor(Math.random()*a)+b}

function m0(a){
    for(let i=0;i<a.length;i++)cn(a[i])
}

function al(a){alert(a)}
function cn(a){console.log(a)}

function c0(a,b){a.style.backgroundColor=b}
function c1(a,b){a.style.color=b}

function au(a){return new Audio(a)}

function ncr(){
    let a=mt(220,0)
    let b=mt(220,0)
    let c=mt(256,0)
    return 'rgb('+a+','+b+','+c+')'
}


function bdr(a,b){a.style.border=b}

function sorte(a){
    a.sort(()=>Math.random()-.5)
}