const RSS_URL = 'https://api.cors.lol/?url=blog.royandika.my.id/feeds/posts/default?alt=rss'; // Ganti URL dengan RSS Feed Anda

async function fetchRSSFeed() {
  try {
    const response = await fetch(RSS_URL);
    const text = await response.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, "application/xml");
    const items = xml.querySelectorAll("item");

    const feedContainer = document.getElementById("feed-container");

    // Membatasi hanya untuk 3 post terbaru
    const posts = Array.from(items).slice(0, 12); // Ambil 3 item pertama

    posts.forEach(item => {
      const title = item.querySelector("title")?.textContent || "No Title";
      const link = item.querySelector("link")?.textContent || "#";
      const pubDate = item.querySelector("pubDate")?.textContent || "No Date";
      const description = item.querySelector("description")?.textContent || "No Description";

      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = description;
      const img = tempDiv.querySelector("img")?.src || "";

      const postElement = document.createElement("div");

      postElement.innerHTML = `
					<div class="col-md-3 text-center col-padding">
						<a href="${link}" rel="nofollow" target="_blank" class="work" style="background-image: url(${img});" alt="${title}">
							<div class="desc">
								<h3>${title}</h3>
								<span>${new Date(pubDate).toLocaleString()}</span>
							</div>
						</a>
					</div>
                `;

      feedContainer.appendChild(postElement);
    });
  } catch (error) {
    console.error("Gagal mengambil RSS feed:", error);
  }
}

fetchRSSFeed();