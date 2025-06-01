document.addEventListener("DOMContentLoaded", () => {
    loadBookmarks();
});

function addBookmark() {
    const siteName = prompt("Enter Website Name:");
    const siteURL = prompt("Enter Website URL (https://...)");

    if (siteName && siteURL) {
        const bookmark = { name: siteName, url: siteURL };
        saveBookmark(bookmark);
        displayBookmark(bookmark);
    } else {
        alert("Please enter both name and URL!");
    }
}

function saveBookmark(bookmark) {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    bookmarks.push(bookmark);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

function loadBookmarks() {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    bookmarks.forEach(displayBookmark);
}

function displayBookmark(bookmark) {
    const list = document.getElementById('bookmarkList');
    const listItem = document.createElement('li');

    const link = document.createElement('a');
    link.href = bookmark.url;
    link.textContent = bookmark.name;
    link.target = "_blank";
    link.style.color = "#cc0000";
    link.style.textDecoration = "none";
    link.style.fontWeight = "bold";

    listItem.appendChild(link);
    list.appendChild(listItem);
}
