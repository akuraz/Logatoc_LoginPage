const form = document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault ()

    const username = form.username.value
    const password = form.password.value
    
    const authenticated = authentication(username,password)

    if(authenticated)
    {window.open("https://variety.com/wp-content/uploads/2019/03/spongebob.jpg?w=1000&h=563&crop=1")
    }else{
        window.open("https://i.ytimg.com/vi/mVjuDwbf4E0/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AHwBYAC4AOKAgwIABABGGAgYChgMA8=&rs=AOn4CLB64UfwyUAXE81zE90ccIO1DEdvtg")
    }
})

// funtion for checking username and password

function authentication(username, password){
    if( username === "Wilbur" && password === "12345"){return true
    }else{
        return false
    }
}