export const fetchNavbar = () => (
    $.ajax({
        method: 'GET',
        url: '/api/navbar'
    })
)