const handlecategory =async()=>{

const response = await fetch("https://openapi.programming-hero.com/api/videos/categories");
const data=await response.json();

const tabcontainer=document.getElementById("tab-container");
data.data.forEach((category)=>{
console.log(category)

const div=document.createElement("div");
div.innerHTML=`<a onclick="handlevideos('${category.category_id}')" class="tab bg-base-200 gap-2 mr-2">${category.category}</a>`;
// all the category names  are dynamic as tabs
//the handlevideos function is called then,
//once clicked on a category {category.category } then the corresponding array of that category{category.category_id} is shown
tabcontainer.appendChild(div);});
}
const handlevideos=async(id)=>{   
const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
const data=await response.json();

const cardcontainer= document.getElementById("card-container")

cardcontainer.innerHTML="";// once you click on each tab the videos will be shown according to that tab  clearing the previous tab videos
if (data.data && data.data.length > 0) {
data.data?.forEach((category)=>{

const div=document.createElement("div");
div.innerHTML=`  <div class="grid grid-cols-4 gap-2" id="card-container">
<div class="card w-80 bg-base-100 " >
<div class="card-body">
<img src=${category.thumbnail} />
<div class="flex gap-2">
<div class="avatar">
<div class="w-12 rounded-full">
<img src=${category.authors[0].profile_picture}/></div></div>
  <h2 class="card-title ">${category.title}</h2></div>
  <div class="flex">
  <h2 class="ml-14 -my-2">${category.authors[0].profile_name}</h2>
   ${category.authors[0].verified ? '<i class="fas fa-check-circle text-blue-500 ml-2"></i>' : ''}</h2>
  
  </div>

  <h2 class="mx-14">${category.others.views} views</h2>
  
</div></div>
</div>`;
cardcontainer.appendChild(div);


});


} else {
  // No content in this category, display "Oops, no content"
  const noContentDiv = document.createElement("div");
  cardcontainer.appendChild(noContentDiv);
}

console.log(data.data);
};



handlevideos(1000);

handlecategory();
