document.addEventListener("DOMContentLoaded", function() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    var dailyNotePath = "0 - Notes/" + today;

    var dashboard = document.querySelector('.markdown-preview-view');
    if (dashboard) {
        var link = document.createElement('a');
        link.href = `obsidian://open?vault=your_vault_name&file=${encodeURIComponent(dailyNotePath)}`;
        link.textContent = "Open Today's Daily Note";

        dashboard.appendChild(link);
    }
});
