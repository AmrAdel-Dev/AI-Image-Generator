const api = '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';
const inp = document.getElementById('inp')
const images = document.querySelector('.images')

const getImage = async () => {
    // Make A Request To Openai API
    const methods = {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${api}`
        },
        body:JSON.stringify(
            {
                "prompt":inp.value,
                "n":3,
                "size":"512x512"
            }
        )
    }
    const res = await fetch('https://api.openai.com/v1/images/generations', methods)
    // Parse the Response as JSON
    const data = await res.json()
    console.log(data);
    const listImages = data.data;
    // images.innerHTML = ''
    listImages.map(photo => {
        const container = document.createElement('div')
        images.append(container)
        const img = document.createElement('img')
        container.append(img)
        img.src = photo.url
    })
}

document.querySelector('button').onclick = getImage