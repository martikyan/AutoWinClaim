const checkInterval = 100;

setInterval(() =>
{
    let panels = document.getElementsByClassName("game-panel-btns-container board-panel-game-panel-wrapper")
    if (panels == null || panels.length == 0)
    {
        return;
    }

    let claimButtons = document.getElementsByClassName("ui_v5-button-component ui_v5-button-secondary ui_v5-button-x-small");
    if (claimButtons == null || claimButtons.length == 0)
    {
        return;
    }

    var button = claimButtons[0];
    button.click();

    console.log("Claim button clicked.");
}, checkInterval);