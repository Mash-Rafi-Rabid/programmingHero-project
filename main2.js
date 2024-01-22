const milestonesData = JSON.parse(data).data;  // data array 
console.log(milestonesData);


function loadMilestones(){
	const milestones = document.querySelector(" .milestones ");

	milestones.innerHTML = `${milestonesData.map(function(milestone){

	return `<div class="milestone border-b" id ="${milestone._id}">
                <div class="flex">
                  <div onclick ="doneModule(this,${milestone._id})" class="checkbox"><input type="checkbox" /></div>
                  <div onclick ="openHiddenPanal(this , ${milestone._id})">
                    <p>${milestone.name}<span><i class="fas fa-chevron-down"></i></span>
                    </p>
                  </div>
                </div>
              </div>
                
             <div class="hidden_panel">
              ${milestone.modules.map(function(module){

                return `<div class="module border-b">
                          <p>${module.name}</p>
                        </div>`;
              }).join("")}
            </div>`;

	}).join("")} `;
}
 


 function openHiddenPanal(milestoneElement,dataId){
   const hiddenPanal = milestoneElement.parentNode.parentNode.nextElementSibling ;
   const showPanal = document.querySelector(".show");
   const activeElement = document.querySelector(".active");
   

   if(!hiddenPanal.classList.contains("show") && showPanal)
     {showPanal.classList.remove("show");}
     hiddenPanal.classList.toggle('show');

    
  if(!milestoneElement.classList.contains("active") && activeElement){
          activeElement.classList.remove("active");
    }
         milestoneElement.classList.toggle("active");

   
   showImage(dataId);      
 }


  loadMilestones();


  function showImage(id){
     

     document.querySelector(".milestoneImage").src = `${milestonesData[id].image}`;
     document.querySelector(".milestoneImage").style.opacity = `0`;
     document.querySelector(".title").innerText = `${milestonesData[id].name}`; 
     document.querySelector(".details").innerText = `${milestonesData[id].description}`; 

     

  }

  document.querySelector(".milestoneImage").onload = function(){
    document.querySelector(".milestoneImage").style.opacity = `1`;
  };


  function doneModule(checkbox,id){
    

    const removeElem = document.getElementById(id);
    const milestonesDiv = document.querySelector(".milestones");
    if(checkbox.firstChild.checked){

      document.querySelector(".doneList").appendChild(removeElem);
      document.querySelector(".milestones").removeChild(removeElem);
    }else{
       //const childEnsert = document.querySelector(".milestones").childNodes[id];
       //document.querySelector(".milestones").insertBefore(removeElem,childEnsert);
       document.querySelector(".doneList").removeChild(removeElem);
       
       shortingMilestone(id ,milestonesDiv,removeElem);
}
    

  }

  function shortingMilestone(shoetId,shortMilestoneDiv,shortremoveElem){
    document.querySelector(".milestones").appendChild(shortremoveElem);
    const childMilestones = document.querySelector(".milestones").childNodes;
    const arrayMilestones = [];
   

    for(let i in childMilestones){
      if(childMilestones[i].nodeType == 1 && childMilestones[i].id){
        arrayMilestones.push(childMilestones[i]);
        }
    }

     arrayMilestones.sort(function(a,b){

      return a[id] - b[id] ;

    });

    return arrayMilestones.join(""); 
  


  }


