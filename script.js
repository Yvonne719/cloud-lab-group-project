 const words = [
  {
    term: "Cloud Computing",
    definition: "Delivering computing services like storage and software over the internet instead of your local computer."
  },
  {
    term: "Virtualization",
    definition: "Creating a virtual version of something like a server so multiple systems can share one physical machine."
  },
  {
    term: "IaaS",
    definition: "Infrastructure as a Service — renting computing infrastructure like servers and storage from a cloud provider."
  },
  {
    term: "SaaS",
    definition: "Software as a Service — using software over the internet without installing it, like Gmail or Google Docs."
  },
  {
    term: "Deployment",
    definition: "The process of making your application available and running on a server or cloud platform."
  },
  {
    term: "Bandwidth",
    definition: "The maximum amount of data that can be transferred over a network connection in a given time."
  },
  {
    term: "Virtual Machine",
    definition: "A software-based computer that runs inside another computer, like Oracle VirtualBox."
  }
]

function newWord() {
  const random = Math.floor(Math.random() * words.length)
  document.getElementById("word-term").textContent = words[random].term
  document.getElementById("word-definition").textContent = words[random].definition
}
newWord()

function validateForm() {
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const message = document.getElementById("message").value
        const error = document.getElementById("error-msg")

        if (name === "" || email === "" || message === "") {
          error.textContent = "⚠️ Please fill in all fields before submitting."
          error.style.color = "red"
        } else {
          error.textContent = "✅ Message sent! Thank you."
          error.style.color = "green"
        }
      }
   