var isIntervalSet = false;
var optionIntervalTimerId = "";

$(document).ready(function() {	
	//done to get stats that are updated until NOW !
	chrome.extension.getBackgroundPage().BackGroundManager.storeStats();
	$("#tabs").tabs();
	populateBlockSets();
	populateWhiteListedUrls();
	populateTags();
	populateGenOptions();
	populateLockDown();
	setupDatePickers();
	setupAllDialogs();

	$('#addTagToBlockList').click(addTagToBlockListDiv);
	$('#addToBlockList').click(addBlockSet);
});