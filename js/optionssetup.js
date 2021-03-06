var isIntervalSet = false;
var optionIntervalTimerId = "";

$(function() {
	//done to get stats that are updated until NOW !
	chrome.extension.getBackgroundPage().BackGroundManager.storeStats();
	populateBlockSets();
	populateWhiteListedUrls();
	populateTags();
	populateGenOptions();
	populateLockDown();
	setupDatePickers();
	setupAllDialogs();
});

$(document).ready(function() {	
	$("#tabs").tabs();

	$('#addTagToBlockList').click(addTagToBlockListDiv);
	$('#addToBlockList').click(addBlockSet);
	$('#clearBlockListTags').click(clearBlockListUrlTags);
	$('#clearBlockList').click(clearBlockListBlock);
	$('#addTagToWhiteList').click(addTagToWhiteListDiv);
	$('#addToWhiteList').click(addUrlToWhiteList);
	$('#clearWhiteListTags').click(clearWhiteListUrlTags);
	$('#clearWhiteList').click(clearWhiteListBlock);
	$('#addToTags').click(addTag);
	$('#saveGenOptions').click(saveGeneralOptions);
	$('#refreshLockDownDtlsBtn').click(refreshLockDownDtls);
	$('#selectAllLockDownBtn').click(selectAllLockDown);
	$('#unSelectAllLockDownBtn').click(unSelectAllLockDown);
	$('#beginLockDownBtn').click(beginLockDown);
	$('#validateRegExpBtn').click(validateRegExp);
	$('#resetRegExpFldsBtn').click(resetRegExpFlds);
	$('#calcCharts').click(plotCharts);
});