// URL feed YouTube
const feedUrl = 'https://api.cors.lol/?url=youtube.com/feeds/videos.xml?channel_id=UCjVRZHkH68txrkfuFhMDIeQ';

// Fungsi untuk memuat dan memparsing feed
async function loadFeed(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const xmlText = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "application/xml");
        
        displayFeed(xmlDoc);
    } catch (error) {
        console.error("Error loading feed:", error);
    }
}

// Fungsi untuk menampilkan feed ke dalam HTML
function displayFeed(xmlDoc) {
    const feedContainer = document.getElementById('youtube-feed-container');
    const entries = xmlDoc.getElementsByTagName('entry');

    // Batasi hanya 3 video terbaru
    const maxVideos = 6;
    for (let i = 0; i < Math.min(entries.length, maxVideos); i++) {
        const entry = entries[i];
        const title = entry.getElementsByTagName('title')[0]?.textContent || "No Title";
        const published = entry.getElementsByTagName('published')[0]?.textContent || "No Date";
        const link = entry.getElementsByTagName('link')[0]?.getAttribute('href') || "#";
        const description = entry.getElementsByTagName('media:description')[0]?.textContent || "No Description";
        const thumbnail = entry.getElementsByTagName('media:thumbnail')[0]?.getAttribute('url') || "";

        // Membuat elemen HTML untuk tiap entry
        const entryDiv = document.createElement('div');
        entryDiv.innerHTML = `
        <div class="col-md-3 text-center col-padding">
						<a href="${link}" rel="nofollow" target="_blank" class="work" style="background-image: url(${thumbnail});" alt="${description}">
							<div class="desc">
								<h3>${title}</h3>
								<span>${new Date(published).toLocaleString()}</span>
							</div>
						</a>
					</div>
        `;
        feedContainer.appendChild(entryDiv);
    }
}

// Panggil fungsi loadFeed
loadFeed(feedUrl);