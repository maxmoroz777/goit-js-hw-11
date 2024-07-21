const params = {
    key: "45047588-af4c5471e93ba8198453341cf",
    q: "",
    imageType: "photo",
    orientation: "horizontal",
    safesearch: true,
};

export function generateHttpsQuery(formValue) {
    params.q = formValue;
    const queryString = new URLSearchParams(params).toString();
    return `https://pixabay.com/api/?${queryString}`;
}

export function fetchPictures(httpsQuery) {
    return fetch(httpsQuery)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
}