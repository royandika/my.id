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
    const posts = Array.from(items).slice(0, 3); // Ambil 3 item pertama

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
                    <div class="col-md-4">
          <a href="${link}" target="_blank">${img ? `<img src="${img}" alt="${title}" class="responsive">` : ""}</a>
          <div class="blog-text">
            <span class="posted_on">${new Date(pubDate).toLocaleDateString()}</span>
            <h4><a href="${link}" target="_blank">${title}</a></h4>
            <p style="text-align:right;"><a href="${link}"><i class="icon-arrow-right22"></i></a></p>
          </div>
      </div>
                `;

      feedContainer.appendChild(postElement);
    });
  } catch (error) {
    console.error("Gagal mengambil RSS feed:", error);
  }
}

fetchRSSFeed();