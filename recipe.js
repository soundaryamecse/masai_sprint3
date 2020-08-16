function get_recipe()
{
    var query=new URLSearchParams(location.search)
    var idMeal=query.get("idMeal")
    var xhr=new XMLHttpRequest()
    var url="https://www.themealdb.com/api/json/v1/1/lookup.php?i="
    xhr.open('GET',url+idMeal)
    xhr.send()
    xhr.onload=function()
    {
        var response=JSON.parse(this.response)
        console.log(response.meals)
        var res=document.getElementById('res')
        Array.from(response.meals).forEach(function(item)
        {
            var main_div=document.createElement('div')
            main_div.setAttribute('class','card m-3')

            var h_tag=document.createElement('h4')
            h_tag.textContent=item.strMeal

            var img=document.createElement('img')
            img.setAttribute('src',item.strMealThumb)
            img.setAttribute('width',"250px")
            img.setAttribute("height","250px")

            var p_tag=document.createElement('p')
            p_tag.setAttribute('class','lead')
            p_tag.textContent=item.strInstructions

           


            main_div.append(h_tag,img,p_tag)
            res.append(main_div)

        }
        )
    }
}






window.addEventListener('load',get_recipe)