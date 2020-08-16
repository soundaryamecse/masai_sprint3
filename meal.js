function get_meal_list()
{
    
    var xhr=new XMLHttpRequest()
    var url="https://www.themealdb.com/api/json/v1/1/categories.php"
    xhr.open('GET',url)
    xhr.send()
    xhr.onload=function()
    {
        console.log(this.status)
        if(this.status===200)
        {
        var response=JSON.parse(this.response)
        //console.log(response.categories)
        var res=document.getElementById('res')
        //res.innerHTML=" "
        var loading_content=response.categories
        for(i=0;i<loading_content.length;i++)
        {
            //console.log(loading_content[i].strCategoryThumb)  
            
            var a_tag=document.createElement('a')
            a_tag.href="meal_content.html?strCategory="+loading_content[i].strCategory 
            var div_content=document.createElement('div')
            div_content.setAttribute('class','card m-3')   
                          
            var h_tag=document.createElement('h3')
            h_tag.innerText=loading_content[i].strCategory  
            h_tag.setAttribute('class','text-center')
            var meal_type=loading_content[i].strCategory 
            var meal_img=document.createElement('img')
            meal_img.setAttribute('alt',meal_type)
            meal_img.setAttribute('src',loading_content[i].strCategoryThumb)
            meal_img.setAttribute("width","250px")
            meal_img.setAttribute("height","250px")
            
            div_content.append(h_tag,meal_img)  
            a_tag.append(div_content) 
            res.append(a_tag)                       
            
            
        }
    }
    else  if(this.status>=400)
    {
        var res=document.getElementById('res')
        res.setAttribute('class','display-1')
        res.innerText="Error:Recipe Not Found"
    }
        
        
    }
}

window.addEventListener('load',get_meal_list)
/*{
    var btn=document.getElementById('meal')
    btn.addEventListener('click',get_meal_list)
}
)*/





