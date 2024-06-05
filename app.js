

 var paragraph = document.getElementById("para")
 var buttons = document.getElementsByClassName("action_btn")
 var fontOptions = document.getElementById("font_family")
 var fontSize = document.getElementById("font-size")
//  console.log(fontOptions);
//  console.log(paragraph)
// console.log(buttons)


   fontOptions.addEventListener("change" , function(){
    console.log(this.value)
    if(this.value === 'monospace'){
        paragraph.style.fontFamily = 'monospace'
    }
    if(this.value === 'serif'){
        paragraph.style.fontFamily = 'serif'
    }
    if(this.value === 'san-serif'){
        paragraph.style.fontFamily = 'sans-serif'
    }
   })

   
   fontSize.addEventListener("change" , function(){
    console.log(this.value)
    if(this.value === 'heading'){
        paragraph.style.fontSize = '43px'
    }
    if(this.value === 'subheading'){
        paragraph.style.fontSize = '26px'
    }
    if(this.value === 'normal'){
        paragraph.style.fontSize = '14px'
    }
   })

  for (let  i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click" , function(){
        // console.log(this.innerText)

        switch (this.innerText) {
            case 'Bold':
                console.log(paragraph.style.fontWeight);
                if(paragraph.style.fontWeight == 'bold'){
                    paragraph.style.fontWeight = 'normal'
                }else{
                    paragraph.style.fontWeight = "bold"
                }
                break;
        
                case 'Italic':
                    if(paragraph.style.fontStyle == 'italic'){
                        paragraph.style.fontStyle = 'normal'
                    }else{
                        paragraph.style.fontStyle = 'italic'
                    }
                    break;

                    case 'Underline':
                        if(paragraph.style.textDecorationLine == 'underline'){
                            paragraph.style.textDecorationLine = 'none'
                        }else{
                            paragraph.style.textDecorationLine = 'underline'
                        }
                        break;    

                    
            case 'Right':
                paragraph.style.textAlign = 'right'
                break;
        
                case 'Left':
                    paragraph.style.textAlign = 'left'
                    break;

                    case 'Center':
                        paragraph.style.textAlign = 'center'
                        break;      
                        
                    case 'Justify':
                        paragraph.style.textAlign = "justify"    
            default:
                break;
        }
    })
    
  }