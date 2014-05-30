//Add UI for the first time

var UIAdded = false;

function initializeAutoBattleUI() {
    if (!UIAdded)
    {
        UIAdded = true;
        $("#optionsWindowOptionsArea").append('<div id="autoBattleOptionsTitle" class="optionsWindowOptionsTitle">autoBattle Options</div>');
    
        //Auto fight
        $("#optionsWindowOptionsArea").append('<div class="optionsWindowOption" onmousedown="toggleAutoFight()">' +
                'Fight automatically: <span id="toggleAutoFight">' + (autoFightEnabled ? 'ON' : 'OFF') + '</span></div>');
            
        //Auto buy mercs
        $("#optionsWindowOptionsArea").append('<div class="optionsWindowOption" onmousedown="toggleAutoBuy()">' +
                'Buy mercenaries automatically: <span id="toggleAutoBuy">' + (autoBuyEnabled ? 'ON' : 'OFF') + '</span></div>');

        //Auto Inventory
        $("#optionsWindowOptionsArea").append('<div class="optionsWindowOption" onmousedown="toggleAutoInventory()">' +
                'Manage inventory automatically: <span id="toggleAutoInventory">' + (autoInventoryEnabled ? 'ON' : 'OFF') + '</span></div>');
    
        //Auto Level up
        $("#optionsWindowOptionsArea").append('<div class="optionsWindowOption" onmousedown="toggleAutoLevel()">' +
                'Level up automatically: <span id="toggleAutoLevel">' + (autoLevelEnabled ? 'ON' : 'OFF') + '</span></div>');
    
        //Auto Adjust mob level
        $("#optionsWindowOptionsArea").append('<div class="optionsWindowOption" onmousedown="toggleAutoMobLevel()">' +
                'Adjust mob levels automatically: <span id="toggleAutoMobLevel">' + (autoMobLevelUpdateEnabled ? 'ON' : 'OFF') + '</span></div>');
            
        //Auto Quest
        $("#optionsWindowOptionsArea").append('<div class="optionsWindowOption" onmousedown="toggleAutoQuest()">' +
                'Complete quests automatically: <span id="toggleAutoQuest">' + (autoQuestEnabled ? 'ON' : 'OFF') + '</span></div>');
    }
}

function toggleAutoFight() {
    autoFightEnabled = !autoFightEnabled;
    autoBattleStart();
    $("#toggleAutoFight").html(autoFightEnabled ? 'ON' : 'OFF');
}

function toggleAutoBuy() {
    autoBuyEnabled = !autoBuyEnabled;
    autoBattleStart();
    $("#toggleAutoBuy").html(autoBuyEnabled ? 'ON' : 'OFF');
}

function toggleAutoInventory() {
    autoInventoryEnabled = !autoInventoryEnabled;
    autoBattleStart();
    $("#toggleAutoInventory").html(autoInventoryEnabled ? 'ON' : 'OFF');
}

function toggleAutoLevel() {
    autoLevelEnabled = !autoLevelEnabled;
    autoBattleStart();
    $("#toggleAutoLevel").html(autoLevelEnabled ? 'ON' : 'OFF');
}

function toggleAutoMobLevel() {
    autoMobLevelUpdateEnabled = !autoMobLevelUpdateEnabled;
    autoBattleStart();
    $("#toggleAutoMobLevel").html(autoMobLevelUpdateEnabled ? 'ON' : 'OFF');
}

function toggleAutoQuest() {
    autoQuestEnabled = !autoQuestEnabled;
    autoBattleStart();
    $("#toggleAutoQuest").html(autoQuestEnabled ? 'ON' : 'OFF');
}
