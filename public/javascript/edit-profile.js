async function editProfileHandler(event){
    event.preventDefault();

    const firstName = document.querySelector('input[id="first_name"]').value.trim();
    const lastName = document.querySelector('input[id="last_name"]').value.trim();
    const hasChildren = document.querySelector('input[id="chldrn"]').value.trim();
    const hasPets = document.querySelector('input[id="pets"]').value.trim();
    const likesSports = document.querySelector('input[id="sports"]').value.trim();
    const likesMedia = document.querySelector('input[id="media"]').value.trim();


    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    
    hasChildren = parseInt(hasChildren);
    hasPets= parseInt(hasPets);
    likesSports = parseInt(likesSports);
    likesMedia = parseInt(likesMedia)

    const response = await fetch(`api/person/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            last_name: lastName,
            first_name: firstName,
            has_children: hasChildren,
            has_pets: hasPets,
            likes_sports: likesSports,
            likes_media: likesMedia
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(response.ok){
        console.log(ok);
    }
    else {
        alert(response.statusText);
    }
}

document.getElementById('submit-edit').addEventListener('click', editProfileHandler);