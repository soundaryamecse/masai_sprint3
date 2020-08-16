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
            a.href="recipe.html?idMeal="+item.idMeal
            var box_div=document.createElement('div')
            box_div.setAttribute('class','card m-3')

            var h_tag=document.createElement('h4')
            h_tag.textContent=item.strMeal

            var img=document.createElement('img')
            img.setAttribute('src',item.strMealThumb)
            img.setAttribute('width',"250px")
            img.setAttribute("height","250px")
            
            box_div.append(h_tag,img)
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