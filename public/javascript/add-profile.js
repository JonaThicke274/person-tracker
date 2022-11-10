async function addProfileHandler(event){
    event.preventDefault();

    let lastName = document.querySelector('input[id="last_name"]').value.trim();
    let firstName = document.querySelector('input[id="first_name"]').value.trim();
    let hasChildren = document.querySelector('input[id="has_children').value.trim();
    let hasPets = document.querySelector('input[id="has_pets').value.trim();
    let likesSports = document.querySelector('input[id="likes_sports"]').value.trim();
    let likesMedia = document.querySelector('input[id="likes_media"]').value.trim();

    hasChildren = parseInt(hasChildren);
    hasPets = parseInt(hasPets);
    likesSports = parseInt(likesSports);
    likesMedia = parseInt(likesMedia)

    console.log('making profile')
    
    const response = await fetch(`http://localhost:3001/api/person`, {
        method: 'POST',
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

}

document.getElementById('submitProfile').addEventListener('click', addProfileHandler)