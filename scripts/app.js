function readContentFunction() {
    let title = $("#txtTitle").val().trim();
    let desc = $("#txtDescription").val().trim();
    let color = $("#selColor").val();
    let date = $("#selDate").val();
    let budget = $("#numBudget").val();
    let status = $("#selStatus").val();

    //Validate
    if (!title || !desc || !date || !budget) {
        alert("Please fill in all required fields!");
        return;
    }

    // new Task
    let newTask = new Task(title, desc, color, date, budget, status);

    displayTask(newTask);

    // Clear form
    $("#txtTitle, #txtDescription, #selDate, #numBudget, #selStatus").val("");
    $("#selColor").val("#000000");

}

function testConection() {
    $.ajax({
        type : "GET",
        url : "https://106api-b0bnggbsgnezbzcz.westus3-01.azurewebsites.net/",

        }).done(function(res){
            console.log("Connection successful", res);
        }).fail(function(err){
            console.error("Connection failed", err);
        });
}
function displayTask(task) {
    // status label
    let statusText = "";
    switch (task.status) {
        case "1":
            statusText = "New";
            break;
        case "2":
            statusText = "In Progress";
            break;
        case "3":
            statusText = "Done";
            break;
    }

    // HTML card
    let card = `
    <div class="card mb-3 p-3 shadow-sm" style="border-left: 8px solid ${task.color};">
      <h5>${task.title}</h5>
      <p>${task.description}</p>
      <p><strong>Color:</strong>${task.color}</p>
      <p><strong>Date:</strong> ${task.date}</p>
      <p><strong>Budget:</strong> $${task.budget}</p>
      <p><strong>Status:</strong> ${statusText}</p>
    </div>
  `;

    //Add to the List
    $("#List").append(card);
}

// Initialize events
function init() {
    console.log("Initialization started...");
    $("#btnsave").click(readContentFunction);
}

window.onload = init;
