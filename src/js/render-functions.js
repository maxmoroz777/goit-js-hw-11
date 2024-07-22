export function renderImages(hits) {
    return hits.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => `
    <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}" width="360" height="152"/>
        </a>
        <div>
          <ul class="info-list">
       		  <li>Likes<span>${likes}</span></li>
					  <li>Views<span>${views}</span></li>
						<li>Comments<span>${comments}</span></li>
						<li>Downloads<span>${downloads}</span></li>
          </ul>
        </div>
      </li>
    `).join("");
}