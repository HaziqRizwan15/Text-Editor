var text = document.getElementById('text')
var btns = document.getElementsByClassName('action_btn')
var fontOptions = document.getElementById('font-family')
var fontsSize = document.getElementById('font-size')
console.log("fontOptions-->", fontOptions)
fontOptions.addEventListener('change',function(){
    console.log("options=>", this.value)
    if(this.value === 'monospace') {
        text.style.fontFamily = 'monospace'
    }
    if(this.value === 'serif') {
        text.style.fontFamily = 'serif'
    }
    if(this.value === 'san-serif') {
        text.style.fontFamily = 'sans-serif'
    }
})
fontsSize.addEventListener('change',function(){
    console.log("options=>", this.value)
    if(this.value === 'heading') {
        text.style.fontSize = '41px'
    }
    if(this.value === 'subHeading') {
        text.style.fontSize = '25px'
    }
    if(this.value === 'normal') {
        text.style.fontSize = '16px'
    }
})
for (var i = 0; i < btns.length; i++){
    btns[i].addEventListener('click' , function(){
        // console.log("this=>", this.innerText)
        switch (this.innerText) {
            case 'bold':
                if(text.style.fontWeight == 'bold') {
                   text.style.fontWeight = 'normal'
                } else {
                   text.style.fontWeight = 'bold'
                }
                break;
            case 'italic':
                if(text.style.fontStyle == 'italic') {
                    text.style.fontStyle = 'normal'
                 } else {
                    text.style.fontStyle = 'italic'
                 }
                break;
            case 'underline':
                if(text.style.textDecorationLine == 'underline') {
                    text.style.textDecorationLine = 'none'
                 } else {
                    text.style.textDecorationLine = 'underline'
                 }
                break;
            case 'right':
                text.style.textAlign = 'right'
                break;
            case 'left':
                text.style.textAlign = 'left'
                break;
            case 'center':
                text.style.textAlign = 'center'
                break;   
            case 'justify':
                text.style.textAlign = 'justify'
                break;
             
            default:
                break;
        }
    })
}