const entryList = document.querySelector("#entry-list")

const diaries = [
    {
        id: 1,
        title: "first entry",
        content: "completing a hackathon project",
        createdAt: "2024-06-01T10:00:00Z"
    },
    {
        id: 2,
        title: "second entry",
        content: "working on diary app",
        createdAt: "2024-06-02T14:30:00Z"
    }
]

function displayDiaries() {
    entryList.innerHTML = ""

    diaries.forEach(diary => {
        const entry = document.createElement("div")
        entry.classList.add("diary-entry")

        const title = document.createElement("h3")
        title.textContent = diary.title

        const content = document.createElement("p")
        content.textContent = diary.content

        const entryContent = document.createElement("div")
        entryContent.classList.add("entry-content")

        const date = document.createElement("small")
        date.textContent = new Date(diary.createdAt).toLocaleString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        })
        date.classList.add("entry-date")

        entryContent.append(title, content)
        entry.append(entryContent, date)
        entryList.appendChild(entry)
    })
}

displayDiaries()