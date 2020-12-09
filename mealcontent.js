window.addEventListener('load',function()
{
    var query=new URLSearchParams(location.search)
    var strCategory=query.get("strCategory")
    var xhr=new XMLHttpRequest()
    var url="https://www.themealdb.com/api/json/v1/1/filter.php?c="
    xhr.open('GET',url+strCategory)
    xhr.send();
    xhr.onload=function()
    {
        if(this.status===200)
        {
        var response=JSON.parse(this.response)
        console.log(response)
        var res=document.getElementById('res')
        var loading_content=response.meals
        Array.from(response.meals).forEach(function(item)
        {
            //console.log(item.strMeal)
            var a=document.createElement('a')
            a.style.textDecoration="none"
            a.href="recipe.html?idMeal="+item.idMeal
            var box_div=document.createElement('div')
            box_div.setAttribute('class','card m-3')
            box_div.style.width="220px"  
            box_div.style.overflow="hidden"
            box_div.style.textOverflow="ellipsis"
           
            let div=document.createElement('div')
            div.style.width="220px"  
            div.style.overflow="hidden"
            div.style.textOverflow="ellipsis"
            div.style.height="23px"

            var h_tag=document.createElement('h6')
            h_tag.textContent=item.strMeal
            h_tag.style.color="black"
            
            div.append(h_tag)
            

            var img=document.createElement('img')
            img.setAttribute('src',item.strMealThumb)
            img.setAttribute('width',"200px")
            img.setAttribute("height","200px")
            img.style.objectFit="contain"
            
            box_div.style.padding="10px"
            box_div.style.borderRadius="10px"
            box_div.style.boxShadow="10px 10px 10px lightgrey"

            box_div.append(div,img)
            a.append(box_div)
            res.append(a)

        }
        )
    }
    else  if(this.status>=400)
    {
        var res=document.getElementById('res')
        res.setAttribute('class','display-1')
        res.innerText="Error:User Not Found"
    }

    }
     
}
)