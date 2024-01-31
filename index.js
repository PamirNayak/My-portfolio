let tablinks=document.getElementsByClassName("tab-links");
let tabcontents=document.getElementsByClassName("tab-contents")
        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link")
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab")
            }
            event.currentTarget.classList.add("active-link");
            
            document.getElementById(tabname).classList.add("active-tab");
        }

        let sidemenu=document.getElementById("sidemenu");
        function openmenu(){
            sidemenu.style.right="0";
        }
        function closemenu(){
            sidemenu.style.right="-160px";
        }

        
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwJB3uRqafpXhUzvKD_xosqGjp3szHZCoeCA1JWqWpJ7KkgJTrlfNaRYYmC20DVFDCTFw/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message sent Successfully";
        setTimeout(() => {
            msg.innerHTML="";
        }, 5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

  let msg=document.getElementById("msg");

 
  