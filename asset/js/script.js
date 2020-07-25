const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const linksContainer = document.querySelector('.links-container')

const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();

navToggle.addEventListener('click', function(){
    linksContainer.classList.toggle('show-links');
    navToggle.classList.toggle('show-icon')
})


// tabbed content
const tabs = document.querySelector(".tabs");
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', function(e){
	if (e.target.tagName == 'LI') {
		const targetPanel = document.querySelector(e.target.dataset.target);
		panels.forEach(function(panel){
			if(panel == targetPanel) {
				panel.classList.add('active');
			} else{
				panel.classList.remove('active');
				
			}
		});
	}
});


// tabbed image
function myFunction(imgs) {
  let expandImg = document.getElementById("expandedImg");
  let imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}


