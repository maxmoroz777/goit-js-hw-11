const parameters = {
    key: "45047588-af4c5471e93ba8198453341cf",
    q: "",
    imageType: "photo",
    orientation: "horizontal",
    safesearch: true,
};

export function getHttpRequest(formValue) {
    parameters.q = formValue;
    const queryString = new URLSearchParams(parameters).toString();
    return `https://pixabay.com/api/?${queryString}`;
}
export async function fetchImages(httpsRequest) {
    const response = await fetch(httpsRequest);
    if (!response.ok) {
        throw new Error(response.status);
    }
    return await response.json();
}