

export const goToPost = (navigate) => {
    navigate('/post')
}


export const goToLogin = (navigate) => {
    navigate('/')
}


export const goToFeed = (navigate, id) => {
    navigate(`/feed/${id}`)
}