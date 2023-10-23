const sponsorsContainer = document.getElementById('sponsors');

function createSponsorRow(start, end) {
    const row = document.createElement('div');
    row.className = 'row';

    for (let i = start; i <= end; i++) {
        const col = document.createElement('div');
        col.className = 'col-1';

        const img = document.createElement('img');
        img.src = `assets/images/sponsors/sponsor-${i}.png`;
        img.alt = `Sponsor ${i}`;
        img.className = 'img-fluid';

        col.appendChild(img);
        row.appendChild(col);
    }

    return row;
}

sponsorsContainer.appendChild(createSponsorRow(1, 10));
sponsorsContainer.appendChild(createSponsorRow(11, 20));

// JavaScript to create the 3x3 grid of images
const instagramFeed = document.getElementById('instagram-feed');
const rows = instagramFeed.getElementsByClassName('instagram-row');

for (let i = 0; i < 9; i++) {
    const img = document.createElement('img');
    img.src = `assets/images/instagram-feed/instagram-image-${i + 1}.png`;
    img.alt = `Instagram Image ${i + 1}`;
    img.className = 'img-fluid';

    const rowIndex = Math.floor(i / 3);
    rows[rowIndex].appendChild(img);
}

// readMore button functionality
const readMoreButtons = document.querySelectorAll('.read-more-btn');
    const popupContainer = document.getElementById('popup-container');
    const popupContent = document.getElementById('popup-content');

readMoreButtons.forEach(button => {
    button.addEventListener('click', function() {
        fetch('readMore.html')
            .then(response => response.text())
            .then(data => {
                popupContent.innerHTML = data;
                popupContainer.style.display = 'flex';
            })
            .catch(error => console.log(error));
    });
});

popupContainer.addEventListener('click', function() {
    popupContainer.style.display = 'none';
});
