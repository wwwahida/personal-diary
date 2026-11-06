const entryList = document.querySelector("#entry-list")

let diaries = []

async function fetchDiaries() {
    try {
        const response = await fetch("/diary")

        if (!response.ok) {
            throw new Error("Failed to fetch entries")
        }
        diaries = await response.json()
        displayDiaries()
    } catch (error) {
        console.error("Error fetching entries:", error)
    }
}

function displayDiaries() {
    entryList.innerHTML = ""

    diaries.forEach(diary => {
        const entry = document.createElement("div")
        entry.classList.add("diary-entry")

        const title = document.createElement("h3")
        title.textContent = diary.title

        const content = document.createElement("p")
        content.textContent = diary.description

        const entryContent = document.createElement("div")
        entryContent.classList.add("entry-content")

        const date = document.createElement("small")
        date.textContent = new Date(diary.date).toLocaleString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        })
        date.classList.add("entry-date")

        const deleteButton = document.createElement("button")
        deleteButton.textContent = "Delete"
        deleteButton.classList.add("delete-button")
        deleteButton.addEventListener("click", () => deleteEntry(diary.id))

        const editButton = document.createElement("button")
        editButton.textContent = "Edit"
        editButton.classList.add("edit-button")
        editButton.addEventListener("click", () => editEntry(diary.id))

        const buttonContainer = document.createElement("div")
        buttonContainer.classList.add("button-container")
        buttonContainer.append(editButton, deleteButton)

        const entryActions = document.createElement("div")
        entryActions.classList.add("entry-actions")

        entryContent.append(title, content)
        entryActions.append(date, buttonContainer)
        
        entry.append(entryContent, entryActions)
        entryList.appendChild(entry)
    })
}

function deleteEntry(id) {
    diaries = diaries.filter(diary => diary.id !== id)
    displayDiaries()
}

function editEntry(id) {
    const diary = diaries.find(diary => diary.id === id)
    if (diary) {
        const newTitle = prompt("Edit title:", diary.title)
        const newContent = prompt("Edit content:", diary.content)
        if (newTitle !== null && newContent !== null) {
            diary.title = newTitle
            diary.content = newContent
            displayDiaries()
        }
    }
}

fetchDiaries()